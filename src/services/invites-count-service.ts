import { redis } from '../db/redis/client'

interface SubscriberInvitesCountServiceParams {
  subscriberId: string
}
export async function subscriberInvitesCountService({
  subscriberId,
}: SubscriberInvitesCountServiceParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}

7
