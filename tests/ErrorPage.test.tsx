import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../tests/render'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import ErrorPage from '../src/pages/_error'

test('renders the component Error', () => {
  render(
    <Provider store={store}>
      <ErrorPage />
    </Provider>
  )
  const block = screen.findByTestId('error-title')
  expect(block).not.toBeNull()
})
