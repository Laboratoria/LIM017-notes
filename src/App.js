/* import './App.css'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from '../src/components/Welcome/Welcome';
import { Register } from '../src/components/Register/Register';
import { Login } from '../src/components/Login/Login';
import { Home } from '../src/components/Home/Home';
import { AuthProvider } from '../src/context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Welcome/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    );
  }

export default App;
