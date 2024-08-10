import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from 'next/dist/client/components/error-boundary'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
test('renders the component ErrorBoundary', () => {
  render(
    <Provider store={store}>
      <ErrorBoundary error={undefined}></ErrorBoundary>
    </Provider>
  )
  const block = screen.findByTestId('error-title')
  expect(block).not.toBeNull()
})
