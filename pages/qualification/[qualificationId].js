
import { deleteQualification, getResourceById, updateQualification } from '../mockDB'

export default function handler(req, res) {
  const { qualificationId } = req.query
  if (req.method === 'GET') {
    return res.status(200).json(getResourceById('qualifications', qualificationId));
  }
  if (req.method === 'PUT') {
    const { name, description, candidateIds, roleIds } = req.body
    const result = updateQualification(qualificationId, name, description, candidateIds, roleIds);
    if (result) {
      return res.status(200).json({
        message: 'Successfully updated qualification',
      })
    }
    return res.status(500).json({
      error: 'Failed to update qualification',
    })
  }
  if (req.method === 'DELETE') {
    const result = deleteQualification(qualificationId);
    if (result) {
      return res.status(200).json({
        message: 'Successfully deleted qualification',
      })
    }
    return res.status(500).json({
      error: 'Failed to delete qualification',
    })
  }
}