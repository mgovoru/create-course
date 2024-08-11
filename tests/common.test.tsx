import React, { SetStateAction } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { render } from './render'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { Flyelement } from '../src/components/FlyElement/Flyelement'
import { Pagination } from '../src/components/ListView/Pagination'
import { ButtonError } from '../src/components/ErrorBoundary/ButtonError'
import { vi } from 'vitest'
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary'
import { Container } from '../src/components/Container/Container'
import MyApp from '../src/pages/_app'
import mockRouter from 'next-router-mock'
import { Router } from 'next/router'
import Loading from '../src/pages/loading'
import { HeroesService } from '../src/services/heroes.service'
import IndexPage, { getServerSideProps } from '../src/pages'
import Page from '../src/pages/page/[page]'
import { GetServerSidePropsContext } from 'next'
import { ListView } from '../src/components/ListView/ListView'
import { toggleChecked, removeAll } from '../src/components/Store/slice'

test('renders the component', () => {
  render(
    <Container
      data={{
        count: 0,
        next: null,
        previous: null,
        results: [],
      }}
      hero={{
        name: 'string',
        height: 'string',
        mass: 'string',
        hair_color: 'string',
        skin_color: 'string',
        eye_color: 'string',
        birth_year: 'string',
        gender: 'string',
        homeworld: 'string',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: 'string',
        edited: 'string',
        url: 'string',
      }}
    />
  )
  const blockItem = screen.findByTestId('perspective')
  expect(blockItem).not.toBeNull()
})

test('renders the component', () => {
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={false} setFlyisVisible={vi.fn()} />
    </Provider>
  )
  const block = screen.findByTestId('fly-modal')
  expect(block).not.toBeNull()
})
test('change flyisVisible on button click', () => {
  const setFlyisVisibleMock = vi.fn()
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={true} setFlyisVisible={setFlyisVisibleMock} />
    </Provider>
  )
  const buttons = screen.getAllByRole('button')
  const button = buttons[0]
  fireEvent.click(button)
  expect(setFlyisVisibleMock).toHaveBeenCalledTimes(1)
  const argument = setFlyisVisibleMock.mock.calls[0][0]
  expect(argument).toBeInstanceOf(Function)
  const initialState = false
  const newState = argument(initialState)
  expect(newState).toBe(true)
  expect(argument(newState)).toBe(false)
})
test('unselect all on button click', async () => {
  const dispatchMock = vi.fn()
  store.dispatch = dispatchMock
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={true} setFlyisVisible={() => {}} />
    </Provider>
  )
  const buttons = await screen.findAllByRole('button')
  const button = buttons.find(
    (button) => button.textContent === 'Unselect all'
  ) as HTMLButtonElement
  fireEvent.click(button)

  expect(dispatchMock).toHaveBeenCalledTimes(2)
  expect(dispatchMock.mock.calls[0][0]).toEqual(toggleChecked())
  expect(dispatchMock.mock.calls[1][0]).toEqual(removeAll())
})

test('renders the component', () => {
  render(
    <Provider store={store}>
      <Pagination totalPages={10} />
    </Provider>
  )
  const block = screen.findByTestId('pagination')
  expect(block).not.toBeNull()
})

test('renders error', () => {
  const error = new Error('Test error')
  const { getByText } = render(
    <div className="error-block">{error.toString()}</div>
  )
  expect(getByText('Error: Test error')).not.toBeNull()
})
test('renders the component', () => {
  render(
    <Provider store={store}>
      <ButtonError></ButtonError>
    </Provider>
  )
  const block = screen.findByTestId('Error!')
  expect(block).not.toBeNull()
})
test('renders the component', () => {
  const data = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }
  const hero = {
    name: 'string',
    height: 'string',
    mass: 'string',
    hair_color: 'string',
    skin_color: 'string',
    eye_color: 'string',
    birth_year: 'string',
    gender: 'string',
    homeworld: 'string',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: 'string',
    edited: 'string',
    url: 'string',
  }
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Container data={data} hero={hero} />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
  const block = screen.findByTestId('Characters')
  expect(block).not.toBeNull()
})
test('renders the component', () => {
  const MockComponent = () => <div>Hello World</div>
  render(
    <MyApp
      Component={MockComponent}
      pageProps={{}}
      router={mockRouter as unknown as Router}
    />
  )
})
test('renders the component', () => {
  render(<Loading />)
  const block = screen.findByTestId('loader-block ')
  expect(block).not.toBeNull()
})
test('renders the component', () => {
  const mockData = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }
  render(<IndexPage data={mockData} />)
  const block = screen.findByTestId('Characters')
  expect(block).not.toBeNull()
})
test('renders the component', () => {
  const mockData = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }
  render(<Page data={mockData} />)
  const block = screen.findByTestId('Characters')
  expect(block).not.toBeNull()
})
test('renders the component', () => {
  const hero = {
    name: 'string',
    height: 'string',
    mass: 'string',
    hair_color: 'string',
    skin_color: 'string',
    eye_color: 'string',
    birth_year: 'string',
    gender: 'string',
    homeworld: 'string',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: 'string',
    edited: 'string',
    url: 'string',
  }
  const mockData = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }
  render(<Page hero={hero} data={mockData} />)
  const block = screen.findByTestId('Characters')
  expect(block).not.toBeNull()
})

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

  it('swith data, hero and details', async () => {
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
      results: [{
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
      }]
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

      const mockHeroesData = { results: [{ name: 'Luke Skywalker' }] }

      mockHeroesService.getHeroes.mockResolvedValue(mockHeroesData)

      const result = await getServerSideProps(context)

      expect(result).toEqual({
        props: {
          data: mockHeroesData,
        },
      })

      expect(mockHeroesService.getHeroes).toHaveBeenCalledWith('1', 'test')
    })
  })
it('renders the component', () => {
  render(
    <Provider store={store}>
      <ListView
        str={''}
        isVisible={false}
        setIsVisible={function (value: SetStateAction<boolean>): void {
          console.log(value)
          throw new Error('Function not implemented.')
        }}
        heroes={{
          count: 0,
          next: null,
          previous: null,
          results: [],
        }}
      />
    </Provider>
  )
  const block = screen.findByTestId('loader-block')
  expect(block).not.toBeNull()
  const blockItem = screen.findByTestId('perspective')
  expect(blockItem).not.toBeNull()
})
test('renders the component', () => {
  const hero = undefined
  const mockData = {
    count: 0,
    next: null,
    previous: null,
    results: [{ name: 'Luke Skywalker',
						height: 'string',
						mass: 'string',
						hair_color: 'string',
						skin_color: 'string',
						eye_color: 'string',
						birth_year: 'string',
						gender: 'string',
						homeworld: 'string',
						films: [],
						species: [],
						vehicles: [],
						starships: [],
						created: 'string',
						edited: 'string',
						url: 'string',
					}],
  }
  render(<Page hero={hero} data={mockData} />)
  const block = screen.findByTestId('Luke Skywalker')
  expect(block).not.toBeNull()
})
