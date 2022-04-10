<<<<<<< Updated upstream
import { deleteCandidate, getResourceById, updateCandidate } from '../mockDB'
=======
import {
  deleteCandidate,
  updateCandidate,
  getResourceById,
  updateQualification,
  deleteRole,
  updateRole,
} from '../mockDB'
>>>>>>> Stashed changes

export default function handler(req, res) {
  const { candidateId } = req.query
  if (req.method === 'GET') {
    const candidate = getResourceById('candidates', candidateId);
    return res.status(200).json(
      {
        id: candidate.id,
        name: candidate.name,
        description: candidate.description,
        delegations: candidate.roleIds,
        endorsements: candidate.qualificationIds,
      }
    )
  }
  if (req.method === 'PUT') {
    const { name, description } = req.body
<<<<<<< Updated upstream
    const result = updateCandidate(
      candidateId,
      name,
      description,
    )
=======
    const result = updateRole(candidateId, name, description)
>>>>>>> Stashed changes
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
    const result = deleteCandidate(candidateId)
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
