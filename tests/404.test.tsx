import { screen } from '@testing-library/react'
import { render } from '../tests/render'
import { Provider } from 'react-redux'
import UnknownPage  from './../src/pages/404'
import React from 'react'
import store from '../src/components/Store/store'

test('renders the component 404', () => {
  render(
    <Provider store={store}>
      <UnknownPage />
    </Provider>
  )
  const block = screen.findByTestId('unknown-title')
  expect(block).not.toBeNull()
})
