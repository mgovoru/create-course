import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Container } from './components/Container/Container'
import { UnknownPage } from './components/404/404'
import { Theme } from './components/Theme/ThemeSwitch'

function App() {
  return (
    <>
      <Router>
        <Theme>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/page/:page" element={<Container />} />
              <Route path="*" element={<UnknownPage />} />
            </Routes>
          </div>
        </Theme>
      </Router>
    </>
  )
}

export default App
