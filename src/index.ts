import 'reflect-metadata'

import { TVDAO } from './dao/TVDAO'
import { getContainer } from './injections/container'
import { TYPES } from './injections/types'
import { TV } from './models/TV'

const run = async () => {
  const container = await getContainer()
  const dao = container.get<TVDAO>(TYPES.TVDAO)

  const canal1 = new TV(
    '1',
    'Netflix',
    '10/05/2015',
    '10',
    'Ingles',
    'ACÃO',
    ' ',
  )

  const id = await dao.create(canal1)
  console.log(`ID: ${id}`)

  let canal = await dao.findOne(id)
  console.log(canal1)

  const updated = await dao.update(id, {
    title: 'NETFLIX',
  })
  console.log(`Atualizado: ${updated}`)

   TV = await dao.findOne(id)
  console.log(TV)

  let TV = await dao.findByName('TV')
  console.log(TV)

  const deleted = await dao.delete(id)
  console.log(`Removido: ${deleted}`)

 
}

run()
