// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readJobDataFromFile } from '@/utils/functions'
import type { NextApiRequest, NextApiResponse } from 'next'

const FILE_PATH = './data.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await readJobDataFromFile(FILE_PATH);

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({message: 'Data not found'});
  }
}
 