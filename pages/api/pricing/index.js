import { Pricing } from '../../../utails/Pricing'
export default function handler(req, res) {
    res.status(200).json(Pricing)
  }