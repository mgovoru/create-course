import { screen } from '@testing-library/react'
import { render } from '../../../tests/render'
import { Provider } from 'react-redux'
import store from '../Store/store'
import { UnknownPage } from '../404'
import React from 'react'

it('renders the component 404', () => {
  render(
    <Provider store={store}>
      <UnknownPage />
    </Provider>
  )
  const block = screen.findByTestId('unknown-title')
  expect(block).not.toBeNull()
})
