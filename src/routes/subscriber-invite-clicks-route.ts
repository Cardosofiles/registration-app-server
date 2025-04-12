import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { subscriberInviteClicksService } from '../services/subscriber-invite-clicks-service'

export const subscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async server => {
    server.get(
      '/subscribers/:subscriberId/ranking/clicks',
      {
        schema: {
          summary: 'Get subscriber invite clicks count',

          tags: ['referral'],

          params: z.object({
            subscriberId: z.string(),
          }),

          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async (request, _reply) => {
        const { subscriberId } = request.params

        const { count } = await subscriberInviteClicksService({ subscriberId })

        return { count }
      }
    )
  }
