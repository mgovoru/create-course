import React from 'react'
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
test('unselect all on button click', () => {
  const dispatchMock = vi.fn()
  store.dispatch = dispatchMock
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={true} setFlyisVisible={() => {}} />
    </Provider>
  )
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
// describe('getHeroes', () => {
//   it('should fetch heroes', async () => {
//     const mockData = {
//       count: 0,
//       next: null,
//       previous: null,
//       results: [],
//     }
//     const data = await HeroesService.getHeroes('1', 'test')
//     expect(data).toEqual(mockData)
//   })
// })
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

     const mockHeroesData = { results: [{ name: 'Luke Skywalker' }] }
     const mockHeroData = { name: 'Luke Skywalker' }

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
   