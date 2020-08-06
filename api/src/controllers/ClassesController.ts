import { Request, Response } from 'express'

import db from '../database/connection';

import converHourToMinutes from '../utils/convertHourToMinute';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query

    if (
      !filters.week_day ||
      !filters.subject ||
      !filters.time
    ) return res.status(400).json({ message: "Faltam parametros de busca." })

    const subject = filters.subject as string
    const time = filters.time as string
    const week_day = filters.week_day as string

    const timeInMinutes = converHourToMinutes(time)


    try {
      const classes = await db('classes')
        .whereExists(function () {
          this.select('class_schedule.*').from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            // Só libera as aulas onde no class_schedule conta q a aula esta disponivel para esse dia
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
          //Verifica os horarios
        })
        .where('classes.subject', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])

      return res.status(200).json(classes)
    } catch (error) {
      return res.status(400).json({
        message: "Não foi possivel buscar as aulas",
        error: error
      })
    }
  }
  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body
    const trx = await db.transaction();
    try {

      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })
      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id
      })

      const classSchedule = schedule.map((item: ScheduleItem) => {
        return {
          class_id,
          week_day: item.week_day,
          from: converHourToMinutes(item.from),
          to: converHourToMinutes(item.to)
        }
      })
      await trx('class_schedule').insert(classSchedule)


      await trx.commit();

      return res.status(201).json({ message: "Aula cadastrada com sucesso" })
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        message: "Erro ao salvar dados desta aula!",
        error: error
      })
    }
  }
}
export default new ClassesController()