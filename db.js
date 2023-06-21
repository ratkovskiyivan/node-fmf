import pkg from 'pg'
import config from 'config'

const {Pool} = pkg

const dbConfig = config.get('customer.dbConfig')

export const pool = new Pool(dbConfig)