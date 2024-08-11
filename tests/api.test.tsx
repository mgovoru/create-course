import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { HeroesService } from '../src/services/heroes.service'
vi.mock('axios')

describe('HeroesService', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('fetch heroes', async () => {
    const mockData = {
      results: [{ name: 'Luke Skywalker' }],
    }

    ;(axios.get as jest.Mock).mockResolvedValue({ data: mockData })

    const result = await HeroesService.getHeroes('1', 'Luke')
    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledWith('/people/?page=1&&search=Luke')
  })

  it('fetch a hero by id', async () => {
    const mockHero = { name: 'Luke Skywalker' }
    ;(axios.get as jest.Mock).mockResolvedValue({ data: mockHero })

    const result = await HeroesService.getHero('1')
    expect(result).toEqual(mockHero)
    expect(axios.get).toHaveBeenCalledWith('/people/1')
  })
})
