import { screen } from '@testing-library/react'
import { render } from './render'
import { ListView } from '../src/components/ListView/ListView'
import { SetStateAction } from 'react'

describe('ListView', () => {
  it('renders the component', () => {
		render(<ListView str={''} isVisible={false} setIsVisible={function (value: SetStateAction<boolean>): void {
			console.log(value)
			throw new Error('Function not implemented.')
		} } />)
    const block = screen.findByTestId('loader-block')
    expect(block).not.toBeNull()
  })
})
