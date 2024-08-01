//import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import { Container } from '../components/Container/Container'
//import { UnknownPage } from '../components/404/404'
import { Theme } from '../components/Theme/ThemeSwitch'
import React from 'react'
import { Provider } from 'react-redux'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import store from '../components/Store/store'


function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
            <Theme>
              <div className="wrapper">
                <Container />
              </div>
            </Theme>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
}

export default App
