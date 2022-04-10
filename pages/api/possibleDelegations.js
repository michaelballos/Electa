
import { addDelegation, removeDelegation, getAllOfResource, getResourceById } from './mockDB';

/**
 * Accepts a post request to /api/possibleDelegations
 * Finds all roles for the given candidate where the roles qualifications are
 * a subset of the candidate's qualifications
 */
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = JSON.parse(req.body);
    console.log(req.body);
    console.log(id);
    const candidate = getResourceById('candidates', id);
    if (!candidate) {
      return res.status(404).json({
        error: 'Candidate not found',
      });
    }
    const roles = getAllOfResource('roles');
    const possibleDelegations = roles.filter((role) => {
      role.qualificationIds.forEach((qualificationId) => {
        if (!candidate.qualificationIds.includes(qualificationId)) {
          return false;
        }
      });
      return true;
    })
    return res.status(200).json(possibleDelegations);
  }
}