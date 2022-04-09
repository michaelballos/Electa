import { createRole } from '../mockDB'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, candidateIds, qualificationIds } = req.body
    if (
      !name ||
      !description ||
      !candidateIds ||
      !qualificationIds
    ) {
      return res.status(400).json({
        error: 'name, description, candidateIds, qualificationIds are required',
      })
    }
    const result = createRole(
      name,
      description,
    )
    if (result) {
      return res.status(201).json({
        message: 'Successfully created role!',
      })
    }
    return res.status(500).json({
      error: 'Failed to create candidate',
    })
  }
}