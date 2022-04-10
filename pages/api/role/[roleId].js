import {
  getResourceById,
  updateQualification,
  deleteRole,
  getResourceById,
  updateRole,
} from '../mockDB'
export default function handler(req, res) {
  const { roleId } = req.query

  if (req.method === 'GET') {
    const role = getResourceById('role', roleId)
    return res.status(200).json({
      id: role.id,
      name: role.name,
      description: role.description,
      endorsements: role.roleIds,
      requirements: role.roleIds,
    })
  }
  if (req.method === 'PUT') {
    const { name, description } = req.body
    const result = updateRole(roleId, name, description)
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
    // Get the candidateIds associated with this qualification and delete
    // the foreign key references to this qualification
    const roleId = getResourceById('role', roleId).candidateIds
    roleIds.forEach((roleId) => {
      const role = getResourceById('role', roleId)
      const newRoleIds = role.roleIds.filter((roleId) => roleId !== roleId)
      updateQualification(
        role.Id,
        role.name,
        role.description,
        newRoleIds,
        role.roleIds
      )
    })

    // Get the roleIds associated with this qualification and delete
    // the foreign key references to this qualification
    const roleIds = getResourceById('role', roleId).candidateIds
    roleIds.forEach((roleId) => {
      const role = getResourceById('roles', roleId)
      const newRoleIds = role.roleIds.filter((roleId) => roleId !== roleId)
      updateRole(
        roleId,
        role.name,
        role.description,
        role.candidateIds,
        newRoleIds
      )
    })

    const result = deleteRole(roleId)

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
