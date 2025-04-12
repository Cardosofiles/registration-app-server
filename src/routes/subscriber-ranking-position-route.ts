import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { subscriberRankingPositionService } from '../services/subscriber-ranking-position-service'

export const subscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async server => {
    server.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscriber ranking position',

          tags: ['referral'],

          params: z.object({
            subscriberId: z.string(),
          }),

          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { position } = await subscriberRankingPositionService({
          subscriberId,
        })

        return { position }
      }
    )
  }
