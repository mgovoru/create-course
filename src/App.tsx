import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form_Uncontroll from './components/Form_first/Form_first';
import Main from './components/Main/Main';
import Form_Controll from './components/Form_second/Form_second';

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form_1" element={<Form_Uncontroll />} />
            <Route path="/form_2" element={<Form_Controll />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
