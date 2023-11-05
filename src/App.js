import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Navbar from './Components/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';
import ShowSingleProduct from './Components/ShowSingleProduct/ShowSingleProduct'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/addProduct" element={<AddProduct/>} />
    </Routes>
    <Routes>
      <Route path="/showSingleProduct/:id" element={<ShowSingleProduct/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
