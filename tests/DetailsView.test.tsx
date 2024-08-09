import { screen } from '@testing-library/react'
import { render } from './render'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { DetailsView } from '../src/components/DetailsView/DetailsView'
it('renders the component DetailsView', () => {
  render(
    <Provider store={store}>
      <DetailsView />
    </Provider>
  )
  const block = screen.findByTestId('details-hero')
  expect(block).not.toBeNull()
})
