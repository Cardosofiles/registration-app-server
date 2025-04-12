import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

import { env } from '../env'
import { accessInviteLinkService } from '../services/access-invite-link-service'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and redirects users',

        tags: ['referral'],

        params: z.object({
          subscriberId: z.string(),
        }),

        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLinkService({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
