// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Services } from '../../../utails/DataServices'
export default function handler(req, res) {
    res.status(200).json(Services)
  }
  