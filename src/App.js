//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from '../src/components/Welcome/Welcome';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from '../src/components/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Welcome/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    );
  }

export default App;
