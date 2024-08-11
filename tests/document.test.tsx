import React from 'react'
import { render } from '@testing-library/react'
import Document from '../src/pages/_document'
// import { Html, Head, Main, NextScript } from 'next/document'
import { vi } from 'vitest'

vi.mock('next/document', () => ({
  Html: (props: React.HTMLAttributes<HTMLHtmlElement>) => <html {...props} />,
  Head: () => <head>head</head>,
  Main: () => <div>content</div>,
  NextScript: () => <script>script</script>,
}))

describe('Document', () => {
  it('renders', () => {
    const { container, getByText } = render(<Document />)
    expect(container.querySelector('html')).toBeInTheDocument()
    expect(container.querySelector('head')).toBeInTheDocument()
    expect(container.querySelector('body')).toBeInTheDocument()
    expect(getByText('head')).toBeInTheDocument()
    expect(getByText('content')).toBeInTheDocument()
    expect(container.querySelector('script')).toHaveTextContent('script')
  })
})
