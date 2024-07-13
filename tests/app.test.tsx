import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('renders the component', () => {
    render(<App />)
    const element = screen.getByText('Characters')
    expect(element).not.toBeNull()
  })
})
