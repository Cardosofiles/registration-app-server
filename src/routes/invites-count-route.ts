import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { subscriberInvitesCountService } from '../services/invites-count-service'

export const subscriberInvitesCountRoute: FastifyPluginAsyncZod =
  async server => {
    server.get(
      '/subscribers/:subscriberId/ranking/count',
      {
        schema: {
          summary: 'Get subscriber invites count',

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
      async request => {
        const { subscriberId } = request.params

        const { count } = await subscriberInvitesCountService({ subscriberId })

        return { count }
      }
    )
  }
