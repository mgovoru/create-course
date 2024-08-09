import { screen } from '@testing-library/react'
import { render } from '../../../tests/render'
import { Provider } from 'react-redux'
import store from '../Store/store'
import { ErrorBoundary } from './ErrorBoundary'
it('renders the component ErrorBoundary', () => {
  render(
    <Provider store={store}>
      <ErrorBoundary children={undefined}></ErrorBoundary>
    </Provider>
  )
  const block = screen.findByTestId('error-title')
  expect(block).not.toBeNull()
})
