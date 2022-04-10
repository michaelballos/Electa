<<<<<<< Updated upstream
import { deleteRole, getResourceById, updateRole } from '../mockDB'
=======
import {
  getResourceById,
  updateQualification,
  deleteRole,
  updateRole,
} from '../mockDB'
>>>>>>> Stashed changes

export default function handler(req, res) {
  const { roleId } = req.query
  if (roleId) {
    if (req.method === 'GET') {
      const role = getResourceById('roles', roleId);
      return res.status(200).json({
        id: roleId,
        name: role.name,
        description: role.description,
        delegations: role.candidateIds,
        requirements: role.qualificationIds,
      });
    }
    if (req.method === 'PUT') {
      const { name, description } = req.body
      const result = updateRole(roleId, name, description);
      if (result) {
        return res.status(200).json({
          message: 'Successfully updated role',
        })
      }
      return res.status(500).json({
        error: 'Failed to update role',
      })
    }
    if (req.method === 'DELETE') {

      const result = deleteRole(roleId);
      if (result) {
        return res.status(200).json({
          message: 'Successfully deleted role',
        })
      }
      return res.status(500).json({
        error: 'Failed to delete role',
      })
    }
  }
  return res.status(400).json({
    error: 'Invalid request: roleId is required',
  })
}