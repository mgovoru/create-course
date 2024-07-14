import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Container } from './components/Container/Container'
import { UnknownPage } from './components/404/404'

function App() { 
  return (
    <>
      <Router>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/page/:page" element={<Container />} />
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
