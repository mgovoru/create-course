import { fireEvent, screen } from '@testing-library/react'
import { render } from './render'
import { ListView } from '../src/components/ListView/ListView'
import { SetStateAction } from 'react'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { DetailsView } from '../src/components/DetailsView/DetailsView'
import { Flyelement } from '../src/components/FlyElement/Flyelement'
import { Pagination } from '../src/components/ListView/Pagination'
//import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary'
import { ButtonError } from '../src/components/ErrorBoundary/ButtonError'
import React from 'react'
//import App from '../src/base/App'
import { vi } from 'vitest'
import { toggleChecked, removeAll } from '../src/components/Store/slice'
import { heroesApi } from './__mocks__/heroesApiMock'
import { configureStore } from '@reduxjs/toolkit'

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
          results: []
        }}
      />
    </Provider>
  )
  const block = screen.findByTestId('loader-block')
  expect(block).not.toBeNull()
  const blockItem = screen.findByTestId('perspective')
  expect(blockItem).not.toBeNull()
})

it('renders the component', () => {
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={false} setFlyisVisible={vi.fn()} />
    </Provider>
  )
  const block = screen.findByTestId('fly-modal')
  expect(block).not.toBeNull()
})
it('change flyisVisible on button click', () => {
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
it('unselect all on button click', () => {
  const dispatchMock = vi.fn()
  store.dispatch = dispatchMock
  render(
    <Provider store={store}>
      <Flyelement flyisVisible={true} setFlyisVisible={() => {}} />
    </Provider>
  )

  const buttons = screen.getAllByRole('button')
  const button = buttons.find((button) =>
    button.classList.contains('button-unselect')
  ) as HTMLButtonElement
  fireEvent.click(button)

  expect(dispatchMock).toHaveBeenCalledTimes(2)
  expect(dispatchMock.mock.calls[0][0]).toEqual(toggleChecked())
  expect(dispatchMock.mock.calls[1][0]).toEqual(removeAll())
})

it('renders the component', () => {
  render(
    <Provider store={store}>
      <Pagination totalPages={10} />
    </Provider>
  )
  const block = screen.findByTestId('pagination')
  expect(block).not.toBeNull()
})

it('renders error', () => {
  const error = new Error('Test error')
  const { getByText } = render(
    <div className="error-block">{error.toString()}</div>
  )
  expect(getByText('Error: Test error')).not.toBeNull()
})
it('renders the component', () => {
  render(
    <Provider store={store}>
      <ButtonError></ButtonError>
    </Provider>
  )
  const block = screen.findByTestId('Error!')
  expect(block).not.toBeNull()
})
// it('renders the component', () => {
//   render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <ErrorBoundary>
//           {/* <App /> */}
//         </ErrorBoundary>
//       </Provider>
//     </React.StrictMode>
//   )
//   const block = screen.findByTestId('Characters')
//   expect(block).not.toBeNull()
// })

// it('test Api', async () => {
//   const store = configureStore({
//     reducer: {
//       [heroesApi.reducerPath]: heroesApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(heroesApi.middleware),
//   })
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const element = await screen.findByText('Luke Skywalker')
//   expect(element).not.toBeNull()
// })
it('test details', async () => {
  const store = configureStore({
    reducer: {
      [heroesApi.reducerPath]: heroesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(heroesApi.middleware),
  })
  render(
    <Provider store={store}>
      <DetailsView />
    </Provider>
  )
  const element = await screen.findByText('Luke Skywalker')
  expect(element).not.toBeNull()
})
