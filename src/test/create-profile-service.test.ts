import { beforeEach, describe, expect, it, vi } from 'vitest'
import { db } from '../db/drizzle/client'
import { subscriptions } from '../db/drizzle/schema/subscriptions'
import { createProfileService } from '../services/create-profile-service'

vi.mock('../db/drizzle/client', () => {
  return {
    db: {
      insert: vi.fn(),
    },
  }
})

describe('createProfileService', () => {
  const mockInsert = db.insert as unknown as ReturnType<typeof vi.fn>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should insert name and email into subscriptions and return subscriberId', async () => {
    const fakeData = {
      id: '123',
      name: 'João Batista',
      email: 'joao@example.com',
    }

    const returningMock = vi.fn().mockResolvedValue([fakeData])
    const valuesMock = vi.fn().mockReturnValue({ returning: returningMock })
    mockInsert.mockReturnValue({ values: valuesMock })

    const result = await createProfileService({
      name: fakeData.name,
      email: fakeData.email,
    })

    expect(mockInsert).toHaveBeenCalledWith(subscriptions)
    expect(valuesMock).toHaveBeenCalledWith({
      name: fakeData.name,
      email: fakeData.email,
    })
    expect(returningMock).toHaveBeenCalled()
    expect(result).toEqual({ subscriberId: '123' })
  })
})
