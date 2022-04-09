import { getAllOfResource } from './mockDB'

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(getAllOfResource('candidates'));
  }
  return res.status(405).end();
}

/**
 * 
 * 
 * roles: [
 *   {
 *     id,
 *     candidateId,   <<<<<
 *     qualificationIds[],
 *   }
 *   {
 *     id,
 *     candidateId, <<<<<
 *     qualificationIds[],
 *   }
 * ]
 * candidate: [
 *   {
 *     id,
 *     roleId, <<<<<
 *     qualificationIds[],
 *   }
 *   {
 *     id,
 *     roleId, <<<<<
 *     qualificationIds[],
 *   }
 * ]
 * qualifications: [
 *   {
 *     id,
 *     roleIds[],
 *     candidateIds[],
 *   }
 * ]
 */