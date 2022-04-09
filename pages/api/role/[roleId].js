import { deleteRole, getResourceById, updateRole } from '../mockDB'

export default function handler(req, res) {
  const { candidateId } = req.query
  if (req.method === 'GET') {
    return res.status(200).json(getResourceById('candidates', candidateId));
  }
  if (req.method === 'PUT') {
    const { name, description, roleIds, qualificationIds } = req.body
    const result = updateRole(candidateId, name, description, roleIds, qualificationIds);
    if (result) {
      return res.status(200).json({
        message: 'Successfully updated candidate',
      })
    }
    return res.status(500).json({
      error: 'Failed to update candidate',
    })
  }
  if (req.method === 'DELETE') {
    const result = deleteRole(candidateId);
    if (result) {
      return res.status(200).json({
        message: 'Successfully deleted candidate',
      })
    }
    return res.status(500).json({
      error: 'Failed to delete candidate',
    })
  }
}