import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './null.scss'
import './index.scss'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
