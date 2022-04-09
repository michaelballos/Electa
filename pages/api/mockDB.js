const db = {
  data: {
    candidates: [
      {
        id: 'c1',
        name: 'John Doe',
        description: 'Good copilot',
        roleIds: ['r2'],
        qualificationIds: ['q2'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
      {
        id: 'c2',
        name: 'Jane Doe',
        description: 'Flies planes and stuff',
        roleIds: ['r1', 'r2'],
        qualificationIds: ['q1', 'q2'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
    ],
    roles: [
      {
        id: 'r1',
        name: 'KCI to LGA',
        description: '7 hour flight round trip',
        candidateIds: ['c2'],
        qualificationIds: ['q1'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
      {
        id: 'r2',
        name: 'LGA to DEN',
        description: '7 hour flight round trip',
        candidateIds: ['c1', 'c2'],
        qualificationIds: ['q2'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
    ],
    qualifications: [
      {
        id: 'q1',
        name: 'Boeing 747 Certification',
        description: 'Certified to fly 747',
        candidateIds: ['c2'],
        roleIds: ['r1'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
      {
        id: 'q2',
        name: 'Airbus A380 Certification',
        description: 'Certified to fly A380',
        candidateIds: ['c1', 'c2'],
        roleIds: ['r2'],
        createdAt: '2011-10-05T14:48:00.000Z',
        updatedAt: null,
        deletedAt: null,
      },
    ],
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
) => {
  db.data.candidates.push({
    id: `c${db.data.candidates.length + 1}`,
    name,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
    roleIds: [],
    qualificationIds: [],
  })
  return true
}

export const updateCandidate = (
  id,
  name,
  description,
) => {
  const candidate = db.data.candidates.find((candidate) => candidate.id === id)
  if (candidate) {
    candidate.name = name
    candidate.description = description
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
    candidateIds: [],
    qualificationIds: [],
    createdAt: new Date().toISOString(),
    updatedAt: null,
    deletedAt: null,
  })
  return true
}

export const updateRole = (
  id,
  name,
  description,
) => {
  const role = db.data.roles.find((role) => role.id === id)
  if (role) {
    role.name = name
    role.description = description
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
    roleIds: [],
    candidateIds: [],
  })
}

export const updateQualification = (
  id,
  name,
  description,
) => {
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === id
  )
  if (qualification) {
    qualification.name = name
    qualification.description = description
    qualification.updatedAt = new Date().toISOString()
    return true
  }
  return false
}

export const deleteQualification = (id) => {
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === id
  )
  if (qualification) {
    qualification.deletedAt = new Date().toISOString()
    return true
  }
  return false
}

// A delegation is a relationship between a candidate and a role.
export const addDelegation = (candidateId, roleId) => {
  const candidate = db.data.candidates.find(
    (candidate) => candidate.id === candidateId
  )
  const role = db.data.roles.find((role) => role.id === roleId)
  if (candidate && role) {
    candidate.roleIds.push(roleId)
    role.candidateIds.push(candidateId)
    return true
  }
  return false
}

// An endorsement is a relationship between a candidate and a qualification.
export const addEndorsement = (candidateId, qualificationId) => {
  const candidate = db.data.candidates.find(
    (candidate) => candidate.id === candidateId
  )
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === qualificationId
  )
  if (candidate && qualification) {
    candidate.qualificationIds.push(qualificationId)
    qualification.candidateIds.push(candidateId)
    return true
  }
  return false
}

// A requirement is a relationship between a role and a qualification.
export const addRequirement = (roleId, qualificationId) => {
  const role = db.data.roles.find((role) => role.id === roleId)
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === qualificationId
  )
  if (role && qualification) {
    role.qualificationIds.push(qualificationId)
    qualification.roleIds.push(roleId)
    return true
  }
  return false
}

export const removeDelegation = (candidateId, roleId) => {
  const candidate = db.data.candidates.find(
    (candidate) => candidate.id === candidateId
  )
  const role = db.data.roles.find((role) => role.id === roleId)
  if (candidate && role) {
    const index = candidate.roleIds.indexOf(roleId)
    if (index > -1) {
      candidate.roleIds.splice(index, 1)
    }
    const index2 = role.candidateIds.indexOf(candidateId)
    if (index2 > -1) {
      role.candidateIds.splice(index2, 1)
    }
    return true
  }
  return false
}

export const removeEndorsement = (candidateId, qualificationId) => {
  const candidate = db.data.candidates.find(
    (candidate) => candidate.id === candidateId
  )
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === qualificationId
  )
  if (candidate && qualification) {
    const index = candidate.qualificationIds.indexOf(qualificationId)
    if (index > -1) {
      candidate.qualificationIds.splice(index, 1)
    }
    const index2 = qualification.candidateIds.indexOf(candidateId)
    if (index2 > -1) {
      qualification.candidateIds.splice(index2, 1)
    }
    return true
  }
  return false
}

export const removeRequirement = (roleId, qualificationId) => {
  const role = db.data.roles.find((role) => role.id === roleId)
  const qualification = db.data.qualifications.find(
    (qualification) => qualification.id === qualificationId
  )
  if (role && qualification) {
    const index = role.qualificationIds.indexOf(qualificationId)
    if (index > -1) {
      role.qualificationIds.splice(index, 1)
    }
    const index2 = qualification.roleIds.indexOf(roleId)
    if (index2 > -1) {
      qualification.roleIds.splice(index2, 1)
    }
    return true
  }
  return false
}


export default db
