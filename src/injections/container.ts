import { Container } from 'inversify'
import { Db, MongoClient } from 'mongodb'

import { TVDAO } from '../dao/TVDAO'
import { TVDAO } from '../dao/mongodb/TVDAO'
import { TYPES } from './types'

export const getContainer = async () => {
  const container = new Container()

  

  const connection = await MongoClient.connect('mongodb://localhost')
  const db = connection.db('authdb')
  container.bind<Db>(TYPES.DbConnector).toConstantValue(db)

  container.bind<TVDAO>(TYPES.TVDAO).to(DAO)

  return container
}
