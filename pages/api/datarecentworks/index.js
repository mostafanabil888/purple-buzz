import { DataRecentWorks } from '../../../utails/DataRecentWorks'
export default function handler(req, res) {
    res.status(200).json(DataRecentWorks)
  }