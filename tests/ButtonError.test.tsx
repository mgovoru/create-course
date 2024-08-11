import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { render } from '../tests/render'
import { vi } from 'vitest'
import { ButtonError } from '../src/components/ErrorBoundary/ButtonError'
import mockRouter from 'next-router-mock'

vi.mock('next/router', () => require('next-router-mock'))

describe('ButtonError', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })
  it('render button', async () => {
    render(<ButtonError />)
    const buttons = await screen.findAllByRole('button')
    const button = buttons.find(
      (button) => button.textContent === 'Error!'
    ) as HTMLButtonElement
    expect(button).toBeInTheDocument()
  })

  it('error and navigate to _error page', () => {
    render(<ButtonError />)
    const buttons = screen.getAllByRole('button')
    const button = buttons.find(
      (button) => button.textContent === 'Error!'
    ) as HTMLButtonElement
    fireEvent.click(button)
expect(pushMock).toHaveBeenCalledWith('_error')
  })
})
