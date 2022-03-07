import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Gender from './Gender'

export default  class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstname:string

  @column()
  public lastname:string

  @column()
  public email:string

  @column()
  public password:string


  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
