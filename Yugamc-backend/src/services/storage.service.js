const { bucket } = require('../config/storage');

/**
 * Uploads a local file to GCS.
 * @param {string} localFilePath - Path to the local file.
 * @param {string} gcsDestination - Destination path inside the bucket.
 * @returns {Promise<any>}
 */
const uploadFile = async (localFilePath, gcsDestination) => {
  return bucket.upload(localFilePath, { destination: gcsDestination });
};

/**
 * Deletes a file from GCS.
 * @param {string} gcsFilename - Name of the file in GCS.
 * @returns {Promise<any>}
 */
const deleteFile = async (gcsFilename) => {
  return bucket.file(gcsFilename).delete();
};

module.exports = {
  uploadFile,
  deleteFile
};
