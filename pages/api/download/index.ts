import { NextApiRequest, NextApiResponse } from 'next';

async function getBlobUrl(blobName: string) {
  // url
  const sasUrl = 'https://'+`${process.env.MINIO_ENDPOINT}` + '/data/' + blobName;

  return sasUrl;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  console.log('request logs', body.blobName);

  try {
    const sasUrl = await getBlobUrl(body.blobName);
    console.log('sasUrl', sasUrl)
    // Send the SAS URL as a JSON response
    res.status(200).json({ downloadUrl: sasUrl });
  } catch (error) {
    console.error('Error getting download URL:', error);
    res.status(400).json({ error: 'Error getting download URL' });
  }
};
