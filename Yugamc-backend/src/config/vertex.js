const { VertexAI } = require('@google-cloud/vertexai');
const env = require('./env');

const vertexAI = new VertexAI({
  project: env.GCP_PROJECT_ID,
  location: env.GOOGLE_LOCATION
});

const generativeModel = vertexAI.getGenerativeModel({
  model: env.GEMINI_MODEL,
});

module.exports = { vertexAI, generativeModel };
