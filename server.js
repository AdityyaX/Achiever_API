const express = require('express');
const { S3Client, ListObjectsCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  S3_BUCKET_NAME,
} = process.env;

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const app = express();

app.get('/images', async (req, res) => {
  try {
    const params = {
      Bucket: S3_BUCKET_NAME,
    };

    const command = new ListObjectsCommand(params);
    const data = await s3Client.send(command);

    const imageUrls = data.Contents.map((obj) => `https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${obj.Key}`);

    res.json(imageUrls);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving image links');
  }
});

app.get('/images/:key', async (req, res) => {
  const key = req.params.key;

  try {
    const params = {
      Bucket: S3_BUCKET_NAME,
      Key: key,
    };

    const command = new GetObjectCommand(params);
    const data = await s3Client.send(command);

    res.setHeader('Content-Type', data.ContentType);
    res.send(data.Body);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving image');
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});