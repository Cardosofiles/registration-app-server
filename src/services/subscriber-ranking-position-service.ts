import { redis } from '../db/redis/client'

interface SubscriberRankingPositionServiceParams {
  subscriberId: string
}
export async function subscriberRankingPositionService({
  subscriberId,
}: SubscriberRankingPositionServiceParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}

7
