import {
  deleteCandidate,
  updateCandidate,
  getResourceById,
  updateQualification,
  deleteRole,
  getResourceById,
  updateRole,
} from '../mockDB'

export default function handler(req, res) {
  const { candidateId } = req.query

  if (req.method === 'GET') {
    const role = getResourceById('candidate', candidateId)
    return res.status(200).json({
      id: candidate.id,
      name: candidate.name,
      description: candidate.description,
      endorsements: candidate.candidateIds,
      requirements: candidate.candidateIds,
    })
  }
  if (req.method === 'PUT') {
    const { name, description } = req.body
    const result = updateRole(roleId, name, description)
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
    // Get the candidateIds associated with this qualification and delete
    // the foreign key references to this qualification
    const candidateId = getResourceById('candidate', candidateId).roleIds
    candidateIds.forEach((candidateId) => {
      const candidate = getResourceById('candidate', candidateId)
      const newCandidateIds = candidate.candidateIds.filter(
        (candidateId) => candidateId !== candidateId
      )
      updateCandidate(
        candidate.Id,
        candidate.name,
        candidate.description,
        newCandidateIds,
        candidate.candidateIds
      )
    })

    // Get the roleIds associated with this qualification and delete
    // the foreign key references to this qualification
    const candidateIds = getResourceById('candidate', candidateId).roleIds
    candidateIds.forEach((candidateId) => {
      const candidate = getResourceById('candidate', candidateId)
      const newCandidateIds = candidate.candidateIds.filter(
        (candidateId) => candidateId !== candidateId
      )
      updateCandidate(
        candidateId,
        candidate.name,
        candidate.description,
        candidate.roleIds,
        newCandidateIds
      )
    })

    const result = deleteCandidate(candidateId)

    if (result) {
      return res.status(200).json({
        message: 'Successfully deleted candidate',
      })
    }
    return res.status(500).json({
      error: 'Failed to delete canidate',
    })
  }
}
