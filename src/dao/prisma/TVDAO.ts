import { PrismaClient } from '@prisma/client'
import { inject, injectable } from 'inversify'

import { TYPES } from '../../injections/types'
import { TV} from '../../models/TV'
import { TVDAO } from '../TVDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class TvDAO extends GenericDAO<TV> implements TVDAO {
  constructor(@inject(TYPES.DbConnector) client: PrismaClient) {
    super()
    
    this._model = client.TV
  }

 
  async findByName(tv: string): Promise<TV[]> {
    const tvs = await this.find({
      tv: {
        contains: tv,
        mode: 'insensitive',
      },
    })

    return tvs
  }
}
