const { Storage } = require('@google-cloud/storage');
const env = require('./env');

const storageClient = new Storage({
  projectId: env.GCP_PROJECT_ID
});

const bucketName = env.GCS_BUCKET_NAME;
const bucket = storageClient.bucket(bucketName);

module.exports = { storageClient, bucket, bucketName };
