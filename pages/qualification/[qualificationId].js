
import { deleteQualification, getResourceById, updateQualification } from '../mockDB'

export default function handler(req, res) {
  const { qualificationId } = req.query

  if (req.method === 'GET') {
    const qualification = getResourceById('qualifications', qualificationId)
    return res.status(200).json({
      id: qualification.id,
      name: qualification.name,
      description: qualification.description,
      endorsements: qualification.candidateIds,
      requirements: qualification.roleIds,
    });
  }

  if (req.method === 'PUT') {
    const { name, description } = req.body
    const result = updateQualification(qualificationId, name, description);
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
    // Get the candidateIds associated with this qualification and delete
    // the foreign key references to this qualification
    const candidateIds = getResourceById('qualifications', qualificationId).candidateIds;
    candidateIds.forEach(candidateId => {
      const candidate = getResourceById('candidates', candidateId);
      const newQualificationIds = candidate.qualificationIds.filter(qualificationId => qualificationId !== qualificationId);
      updateQualification(candidateId, candidate.name, candidate.description, newQualificationIds, candidate.roleIds);
    });

    // Get the roleIds associated with this qualification and delete
    // the foreign key references to this qualification
    const roleIds = getResourceById('qualifications', qualificationId).roleIds;
    roleIds.forEach(roleId => {
      const role = getResourceById('roles', roleId);
      const newQualificationIds = role.qualificationIds.filter(qualificationId => qualificationId !== qualificationId);
      updateQualification(roleId, role.name, role.description, role.candidateIds, newQualificationIds);
    });

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