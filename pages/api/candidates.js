import { getAllOfResource } from './mockDB'

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(getAllOfResource('candidates'));
  }
  return res.status(405).end();
}