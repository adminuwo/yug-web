const fs = require('fs');
const path = require('path');

/**
 * Extracts text from a file depending on its extension.
 * Supported formats: PDF, DOCX, TXT, MD, JSON.
 * @param {string} filePath - Local path to the file.
 * @param {string} originalName - Original filename to determine extension.
 * @returns {Promise<string>} - Extracted text.
 */
const extractText = async (filePath, originalName) => {
  const extension = path.extname(originalName).toLowerCase();
  const fileBuffer = fs.readFileSync(filePath);

  if (extension === '.pdf') {
    try {
      const { PDFParse } = require('pdf-parse');
      const uint8 = new Uint8Array(fileBuffer);
      const extractor = new PDFParse(uint8);
      const data = await extractor.getText();
      return data.text || "";
    } catch (e) {
      console.error('PDF Parse Specific Error:', e);
      return "";
    }
  } else if (extension === '.docx') {
    try {
      const mammoth = require('mammoth');
      const result = await mammoth.extractRawText({ buffer: fileBuffer });
      return result.value || "";
    } catch (e) {
      console.error('Docx Parse Error:', e);
      return "";
    }
  } else if (extension === '.txt' || extension === '.md' || extension === '.json') {
    return fileBuffer.toString('utf8');
  }
  return ""; 
};

module.exports = {
  extractText
};
