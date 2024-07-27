import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './null.scss'
import './index.scss'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx'
import store from './components/Store/store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

export function RenderApp(rootElementId: string) {
  const rootElement = document.getElementById(rootElementId)
  if (!rootElement) {
    throw new Error(`Element with id '${rootElementId}' not found`)
  }

  return ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Router>
            <App />
          </Router>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
}
