import { eq } from 'drizzle-orm'

import { db } from '../db/drizzle/client'
import { subscriptions } from '../db/drizzle/schema/subscriptions'
import { redis } from '../db/redis/client'

interface SubscribeToEventParams {
  name: string
  email: string
  referrerId?: string | null
}
export async function createProfileService({
  name,
  email,
  referrerId,
}: SubscribeToEventParams) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) {
    return { subscriberId: subscribers[0].id }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  if (referrerId) {
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id,
  }
}
