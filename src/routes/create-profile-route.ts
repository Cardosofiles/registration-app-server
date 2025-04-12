import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { createProfileService } from '../services/create-profile-service'

export const createProfileRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Create profile to the event',

        tags: ['subscription'],

        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish(),
        }),

        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body

      const { subscriberId } = await createProfileService({
        name,
        email,
        referrerId: referrer,
      })

      return reply.status(201).send({ subscriberId })
    }
  )
}
