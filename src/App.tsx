import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form_Uncontroll from './components/Form_first/Form_first';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form_1" element={<Form_Uncontroll />} />
            <Route path="/form_2" element={<div>3</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
