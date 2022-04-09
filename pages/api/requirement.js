import { addRequirement, removeRequirement } from './mockDB';

// post and delete to /requirement adds and removes link between qualification and role
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { roleId, qualificationId } = req.body;
    if (!roleId || !qualificationId) {
      return res.status(400).json({
        error: 'roleId and qualificationId are required',
      });
    }
    const result = addRequirement(roleId, qualificationId);
    if (result) {
      return res.status(201).json({
        message: 'Successfully added requirement',
      });
    }
    return res.status(500).json({
      error: 'Failed to add requirement',
    });
  }
  if (req.method === 'DELETE') {
    const { roleId, qualificationId } = req.body;
    if (!roleId || !qualificationId) {
      return res.status(400).json({
        error: 'roleId and qualificationId are required',
      });
    }
    const result = removeRequirement(roleId, qualificationId);
    if (result) {
      return res.status(200).json({
        message: 'Successfully removed requirement',
      });
    }
    return res.status(500).json({
      error: 'Failed to remove requirement',
    });
  }
  return res.status(405).end();
}

