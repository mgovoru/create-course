import React, { ReactNode } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

interface RenderOptionsWithRouter extends RenderOptions {
  route?: string
}

function render(
  ui: React.ReactElement,
  { route = '/' }: RenderOptionsWithRouter = {},
  options?: Omit<RenderOptions, 'wrapper'>
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export { render }
