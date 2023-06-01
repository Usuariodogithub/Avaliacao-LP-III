import { TV } from '../models/TV'
import { IGenericDAO } from './IGenericDAO'

export interface TVDAO extends IGenericDAO<TV> {
  findByName(TV: string): Promise<TV[]>
}
