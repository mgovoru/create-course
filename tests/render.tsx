import React, { ReactElement, ReactNode } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'

interface WrapperProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
)

function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export { render }
