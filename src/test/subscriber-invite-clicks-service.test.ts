// src/test/create-profile-service.test.ts
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createProfileService } from '../services/create-profile-service'

// ⛔ Corrige o mock para simular o comportamento encadeado do Drizzle
vi.mock('../db', () => {
  return {
    db: {
      select: vi.fn(() => ({
        from: vi.fn(() => ({
          where: vi.fn(() => Promise.resolve([])), // Simula nenhum e-mail existente
        })),
      })),
      insert: vi.fn(() => ({
        values: vi.fn(() => ({
          returning: vi.fn(() => Promise.resolve([{ id: 'mock-id-123' }])),
        })),
      })),
    },
  }
})

describe('createProfileService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should insert name and email into subscriptions and return subscriberId', async () => {
    const result = await createProfileService({
      name: 'João Batista',
      email: 'joao@example.com',
    })

    expect(result).toEqual({ subscriberId: 'mock-id-123' })
  })
})
