import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './null.scss'
import './index.scss'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx'
import  store  from './components/Store/store.tsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
)
