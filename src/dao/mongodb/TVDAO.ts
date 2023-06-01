import { inject, injectable } from 'inversify'
import { Db } from 'mongodb'

import { TYPES } from '../../injections/types'
import { TV } from '../../models/TV'
import { TVDAO } from '../TVDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class TvDAO extends GenericDAO<TV> implements TVDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super()
    this._collection = db.collection('users')
  }

  async findByName(TV: string): Promise<TV[]> {
    const tvs = await this.find({
      tv: {
        $regex: TV,
        $options: 'i',
      },
    })

    return tvs
  }
}
