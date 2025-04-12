import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import z from 'zod'
import { getRankingService } from '../services/list-ranking-service'

export const listRankingRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking',

        tags: ['referral'],

        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async request => {
      const { rankingWithScore } = await getRankingService()

      return { ranking: rankingWithScore }
    }
  )
}
