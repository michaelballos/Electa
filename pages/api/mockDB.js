const db = {
  data: {
    candidates: [],
    roles: [],
    qualifications: [],
  },
}

export const getAllOfResource = (resourceKey) => {
  return db.data[resourceKey]
}

export const getResourceById = (resourceKey, id) => {
  return db.data[resourceKey].find((resource) => resource.id === id)
}

export const createCandidate = (
  name,
  description,
  roleIds,
  qualificationIds,
) => {
  db.data.candidates.push({
    id: `c${db.data.candidates.length + 1}`,
    name,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
    roleIds,
    qualificationIds,
  })
  return true
}

export const updateCandidate = (
  id,
  name,
  description,
  roleIds,
  qualificationIds,
) => {
  const candidate = db.data.candidates.find((candidate) => candidate.id === id)
  if (candidate) {
    candidate.name = name
    candidate.description = description
    candidate.roleIds = roleIds
    candidate.qualificationIds = qualificationIds
    candidate.updatedAt = new Date().toISOString()
    return true
  }
  return false
}

export const deleteCandidate = (id) => {
  const candidate = db.data.candidates.find((candidate) => candidate.id === id)
  if (candidate) {
    candidate.deletedAt = new Date().toISOString()
    return true
  }
  return false
}

export const createRole = (name, description) => {
  db.data.roles.push({
    id: `r${db.data.roles.length + 1}`,
    name,
    description,
    assignedCandidateIds: [],
    requiredQualificationIds: [],
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
  })
  return true;
}

export const updateRole = (id, name, description, assignedCandidateIds, requiredQualificationIds) => {
  const role = db.data.roles.find((role) => role.id === id)
  if (role) {
    role.name = name
    role.description = description
    role.updatedAt = new Date().toISOString()
    role.assignedCandidateIds = assignedCandidateIds
    role.requiredQualificationIds = requiredQualificationIds
    role.updatedAt = new Date().toISOString()
    return true
  }
  return false
}

export const deleteRole = (id) => {
  const role = db.data.roles.find((role) => role.id === id)
  if (role) {
    role.deletedAt = new Date().toISOString()
    return true
  }
  return false
}

export const createQualification = (name, description) => {
  db.data.qualifications.push({
    id: `q${db.data.qualifications.length + 1}`,
    name,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
  })
}

export const updateQualification = (id, name, description, candidateIds, roleIds) => {
  const qualification = db.data.qualifications.find((qualification) => qualification.id === id)
  if (qualification) {
    qualification.name = name
    qualification.description = description
    qualification.candidateIds = candidateIds
    qualification.roleIds = roleIds
    qualification.updatedAt = new Date().toISOString()
    return true
  }
  return false
}

export const deleteQualification = (id) => {
  const qualification = db.data.qualifications.find((qualification) => qualification.id === id)
  if (qualification) {
    qualification.deletedAt = new Date().toISOString()
    return true
  }
  return false
}

export default db;