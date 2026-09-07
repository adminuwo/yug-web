const { generativeModel } = require('../config/vertex');
const { getSystemPrompt } = require('../prompts/yugamcConcierge.prompt');

let isVertexFailed = false;

const generateResponse = async (message, history, contextLines) => {
  const systemPrompt = getSystemPrompt(contextLines);

  // 1. If GEMINI_API_KEY is provided, use Google Generative AI directly (works locally without GCP credentials)
  if (process.env.GEMINI_API_KEY) {
    try {
      const { GoogleGenerativeAI } = require('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
        systemInstruction: systemPrompt
      });
      const chat = model.startChat({
        history: (history || []).map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: (h.parts && h.parts[0] && h.parts[0].text) || h.content || '' }]
        }))
      });
      const result = await chat.sendMessage(message);
      return result.response.text();
    } catch (geminiError) {
      console.error('[Gemini API Key Error]:', geminiError.message);
      throw geminiError;
    }
  }

  // 2. If Vertex AI previously failed due to auth or is offline, serve instant fallback
  if (isVertexFailed) {
    return getConciergeFallback(message);
  }

  // 3. Otherwise try Vertex AI (GCP ADC / Cloud Run default)
  try {
    const chat = generativeModel.startChat({
      history: history || [],
      systemInstruction: systemPrompt
    });

    const result = await chat.sendMessage(message);
    return result.response.candidates[0].content.parts[0].text;
  } catch (error) {
    if (error.message && (error.message.includes('GoogleAuthError') || error.message.includes('invalid_grant') || error.message.includes('authenticate'))) {
      console.warn('[VertexAI Offline Mode]: GCP auth unavailable. Switching to fast concierge fallback mode.');
      isVertexFailed = true;
      return getConciergeFallback(message);
    }
    throw error;
  }
};

const getConciergeFallback = (message = '') => {
  const query = message.toLowerCase();

  if (query.includes('project') || query.includes('current') || query.includes('property') || query.includes('yash') || query.includes('plaza') || query.includes('square')) {
    return `At YUG AMC, we bring you Jabalpur's finest landmark developments designed for elevated living and high-yield commercial value.

### Featured Developments

• **Yash Heights** – Exclusive ultra-luxury residences located in South Civil Lines, offering panoramic city views and bespoke amenities.
• **City Plaza** – High-footfall prime retail and commercial hub at Rampur Chowk.
• **SG Square** – Modern corporate offices and retail spaces strategically situated at Vijay Nagar.

Each project is crafted with top-tier architectural precision and high return-on-investment potential.

Would you like to explore available options or book a site visit?`;
  }

  if (query.includes('book') || query.includes('visit') || query.includes('tour') || query.includes('timing')) {
    return `We would be delighted to arrange a private walkthrough for you. We provide personalized property tours including complimentary pickup and drop-off services across Jabalpur.

### Site Visit Inclusions

• Direct walkthrough of **Yash Heights**, **City Plaza**, or **SG Square**.
• Detailed unit floor plans, price breakdowns, and ROI estimates.
• One-on-one consultation with our senior investment advisors.

You can select a convenient date and time using our 'Book a Site Visit' button right above.

Would you like to explore available options or book a site visit?`;
  }

  if (query.includes('invest') || query.includes('benefit') || query.includes('roi') || query.includes('growth') || query.includes('price') || query.includes('cost')) {
    return `Investing with YUG AMC ensures secured capital appreciation and exceptional rental yields in Jabalpur's highest-growth corridors.

### Why Invest With YUG AMC

• **Prime Locations**: Strategic positioning in South Civil Lines, Rampur Chowk, and Vijay Nagar.
• **High Capital Appreciation**: Consistently outperforming regional commercial and residential benchmarks.
• **Transparent Assurance**: RERA-compliant, clear-title developments with flexible payment structures.

Our advisory team provides detailed cash flow forecasting tailored to your investment goals.

Would you like to explore available options or book a site visit?`;
  }

  if (query.includes('contact') || query.includes('sales') || query.includes('call') || query.includes('office') || query.includes('phone') || query.includes('address')) {
    return `Our sales and advisory team is at your disposal to guide you toward the right property decision.

### Connect With Us

• **Head Office**: SG Square, Rampur Chowk, Jabalpur.
• **Services**: Property consultation, customized floor layouts, and documentation support.
• **Direct Assistance**: Dedicated relationship managers for seamless onboarding.

Feel free to share your requirements or submit your details in the contact form.

Would you like to explore available options or book a site visit?`;
  }

  return `Welcome to YUG AMC, Jabalpur's premier real estate development and asset management group. We specialize in signature residences and prestigious commercial developments.

Our landmark projects include **Yash Heights** in South Civil Lines, **City Plaza** at Rampur Chowk, and **SG Square** in Vijay Nagar.

Would you like to explore available options or book a site visit?`;
};

module.exports = {
  generateResponse
};
