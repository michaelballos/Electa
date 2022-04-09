import { createCandidate } from '../mockDB'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description } = req.body
    if (
      !name ||
      !description
    ) {
      return res.status(400).json({
        error: 'name, description, roleIds, qualificationIds are required',
      })
    }
    const result = createCandidate(
      name,
      description,
    )
    if (result) {
      return res.status(201).json({
        message: 'success',
      })
    }
    return res.status(500).json({
      error: 'Failed to create candidate',
    })
  }
}