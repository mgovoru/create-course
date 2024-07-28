import { screen } from '@testing-library/react'
import { render } from '../../../tests/render'
import { Provider } from 'react-redux'
import store from '../Store/store'
import { DetailsView } from './DetailsView'
it('renders the component', () => {
  render(
    <Provider store={store}>
      <DetailsView />
    </Provider>
  )
  const block = screen.findByTestId('details-hero')
  expect(block).not.toBeNull()
})
