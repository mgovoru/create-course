import { AppProps } from 'next/app'
import '../styles/null.scss'
import '../styles/index.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import store from '../components/Store/store'
import { Theme } from '../components/Theme/ThemeSwitch'
export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Theme>
            <Component {...pageProps} />
          </Theme>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp
