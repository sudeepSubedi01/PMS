import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>} />
    </Routes>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
