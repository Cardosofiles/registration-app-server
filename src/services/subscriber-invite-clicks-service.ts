import { redis } from '../db/redis/client'

interface SubscriberInviteClicksServiceParams {
  subscriberId: string
}
export async function subscriberInviteClicksService({
  subscriberId,
}: SubscriberInviteClicksServiceParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}

7
