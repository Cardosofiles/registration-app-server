import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { env } from './env'
import { createProfileRoute } from './routes/create-profile-route'

const server = fastify().withTypeProvider<ZodTypeProvider>()

server.register(fastifyCors, {
  origin: true,
})

server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API for serving invitation and ranking data',
      version: '0.0.1',
    },
  },

  transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

server.register(createProfileRoute)

server.listen({ port: env.PORT }).then(() => {
  console.log('🔥 API HTTP server running 🚀')
})
