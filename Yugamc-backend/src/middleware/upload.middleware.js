const multer = require('multer');
const path = require('path');
const fs = require('fs');

const UPLOAD_DIR = path.join(__dirname, '../../uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

/**
 * Sanitizes filename by keeping only alphanumeric characters, hyphens, and underscores.
 * @param {string} filename 
 * @returns {string} Sanitized filename
 */
const sanitizeFilename = (filename) => {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const sanitizedBase = base.replace(/[^a-zA-Z0-9_\-]/g, '_');
  return sanitizedBase + ext;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    // Sanitize the originalname so downstream services use the clean name
    file.originalname = sanitizeFilename(file.originalname);
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.pdf', '.docx', '.txt', '.md', '.json'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (!allowedExtensions.includes(ext)) {
    return cb(new Error(`Invalid file type: ${ext}. Only PDF, DOCX, TXT, MD, and JSON files are allowed.`), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: {
    files: 20,
    fileSize: 15 * 1024 * 1024 // 15 MB in bytes
  },
  fileFilter
});

const uploadMiddleware = (req, res, next) => {
  const uploadArray = upload.array('files', 20);

  uploadArray(req, res, (err) => {
    if (err) {
      // Clean up any files that were uploaded in the request before error occurred
      if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
          if (fs.existsSync(file.path)) {
            try {
              fs.unlinkSync(file.path);
            } catch (unlinkError) {
              console.error(`Error deleting temp file ${file.path}:`, unlinkError);
            }
          }
        });
      }
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

module.exports = uploadMiddleware;
