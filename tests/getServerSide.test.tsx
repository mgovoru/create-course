import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { render } from './render'
import { vi } from 'vitest'
import { getServerSideProps } from '../src/pages/page/[page]'
import Page from '../src/pages/page/[page]'
import { HeroesService } from '../src/services/heroes.service'
import { screen } from '@testing-library/react'
describe('test getServerSideProps', () => {
  vi.mock('../src/services/heroes.service', () => ({
    HeroesService: {
      getHeroes: vi.fn(),
      getHero: vi.fn(),
    },
  }))
  const mockHeroesService = HeroesService as jest.Mocked<typeof HeroesService>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('with data, hero and details', async () => {
    const context = {
      query: {
        page: '1',
        details: '1',
        search: 'test',
      },
    } as unknown as GetServerSidePropsContext

    const mockHeroesData = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '',
          mass: '',
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',
          homeworld: '',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '',
          edited: '',
          url: '',
        },
      ],
    }
    const mockHeroData = {
      name: 'Luke Skywalker',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: '',
    }

    mockHeroesService.getHeroes.mockResolvedValue(mockHeroesData)
    mockHeroesService.getHero.mockResolvedValue(mockHeroData)

    const result = await getServerSideProps(context)

    expect(result).toEqual({
      props: {
        data: mockHeroesData,
        hero: mockHeroData,
      },
    })

    expect(mockHeroesService.getHeroes).toHaveBeenCalledWith('1', 'test')
    expect(mockHeroesService.getHero).toHaveBeenCalledWith('1')
    render(<Page data={mockHeroesData} hero={mockHeroData} />)
    const block = screen.findByTestId('Luke Skywalker')
    expect(block).not.toBeNull()
  })
  it('without details', async () => {
    const context = {
      query: {
        page: '1',
        search: 'test',
      },
    } as unknown as GetServerSidePropsContext

    const mockHeroesData = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '',
          mass: '',
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',
          homeworld: '',
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: '',
          edited: '',
          url: '',
        },
      ],
    }

    mockHeroesService.getHeroes.mockResolvedValue(mockHeroesData)

    const result = await getServerSideProps(context)

    expect(result).toEqual({
      props: {
        data: mockHeroesData,
      },
    })

    expect(mockHeroesService.getHeroes).toHaveBeenCalledWith('1', 'test')
    render(<Page data={mockHeroesData} hero={undefined} />)
    const block = screen.findByTestId('Luke Skywalker')
    expect(block).not.toBeNull()
  })
})
