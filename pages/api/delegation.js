import { addDelegation, removeDelegation } from './mockDB';

// post and delete to /delegation adds and removes link between candidate and role
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { candidateId, roleId } = req.body;
    if (!candidateId || !roleId) {
      return res.status(400).json({
        error: 'candidateId and roleId are required',
      });
    }
    const result = addDelegation(candidateId, roleId);
    if (result) {
      return res.status(201).json({
        message: 'Successfully added delegation',
      });
    }
    return res.status(500).json({
      error: 'Failed to add delegation',
    });
  }
  if (req.method === 'DELETE') {
    const { candidateId, roleId } = req.body;
    if (!candidateId || !roleId) {
      return res.status(400).json({
        error: 'candidateId and roleId are required',
      });
    }
    const result = removeDelegation(candidateId, roleId);
    if (result) {
      return res.status(200).json({
        message: 'Successfully removed delegation',
      });
    }
    return res.status(500).json({
      error: 'Failed to remove delegation',
    });
  }
  return res.status(405).end();
}

