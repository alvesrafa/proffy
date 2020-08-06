import { Request, Response } from 'express'
import db from '../database/connection';

class ConnectionsController {
  async index(req: Request, res: Response) {
    try {
      const [totalConnections] = await db('connections').count('* as total')
      const { total } = totalConnections
      return res.status(200).json({ total })
    } catch (error) {
      return res.status(400).json({ message: 'Falha ao verificar total de conexões' })
    }
  }
  async create(req: Request, res: Response) {
    const { user_id } = req.body;
    try {
      await db('connections').insert({ user_id })

      return res.status(201).json({ message: 'Conexão criada!' })
    } catch (error) {
      return res.status(400).json({ message: 'Falha ao criar conexão' })
    }
  }
}
export default new ConnectionsController()