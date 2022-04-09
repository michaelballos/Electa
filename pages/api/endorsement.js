import { addEndorsement, removeEndorsement } from './mockDB';

// post and delete to /endorsement adds and removes link between qualification and candidate
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { candidateId, qualificationId } = req.body;
    if (!candidateId || !qualificationId) {
      return res.status(400).json({
        error: 'candidateId and qualificationId are required',
      });
    }
    const result = addEndorsement(candidateId, qualificationId);
    if (result) {
      return res.status(201).json({
        message: 'Successfully added endorsement',
      });
    }
    return res.status(500).json({
      error: 'Failed to add endorsement',
    });
  }
  if (req.method === 'DELETE') {
    const { candidateId, qualificationId } = req.body;
    if (!candidateId || !qualificationId) {
      return res.status(400).json({
        error: 'candidateId and qualificationId are required',
      });
    }
    const result = removeEndorsement(candidateId, qualificationId);
    if (result) {
      return res.status(200).json({
        message: 'Successfully removed endorsement',
      });
    }
    return res.status(500).json({
      error: 'Failed to remove endorsement',
    });
  }
  return res.status(405).end();
}

