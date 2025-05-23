import fastify from 'fastify'
import { knexConfig } from './database'

const server = fastify({ logger: true })

server.get('/', async (_, reply) => {
  const result = await knexConfig.select('*').from('sqlite_schema')

  server.log.info(result)

  return reply.send({ result })
})

server.listen({ port: 4444 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server listening at ${address}`)
})
