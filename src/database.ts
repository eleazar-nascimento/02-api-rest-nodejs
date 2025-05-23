import { knex } from 'knex'

export const knexConfig = knex({
  client: 'sqlite3',
  connection: {
    filename: './tmp/db.sqlite',
  },
  useNullAsDefault: true,
})
