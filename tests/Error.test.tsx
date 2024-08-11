import React from 'react'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
test('renders the component ErrorBoundary', () => {
  render(
    <Provider store={store}>
      <ErrorBoundary children={undefined} ></ErrorBoundary>
    </Provider>
  )
  const block = screen.findByTestId('error-title')
  expect(block).not.toBeNull()
})
