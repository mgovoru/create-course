import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { RenderApp } from '../src'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
    const element = screen.getByText('Characters')
    expect(element).not.toBeNull()
  })
  it('renders the component', () => {
    const id = 'root'
    document.body.innerHTML = `<div id="${id}"></div>`
    expect(() => RenderApp(id)).not.toThrow()
  })
})
