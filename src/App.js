import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Navbar from './Components/Navbar';
import AddProduct from './pages/AddProduct/AddProduct';
import ShowSingleProduct from './Components/ShowSingleProduct/ShowSingleProduct'
import EditProduct from './pages/EditProduct/EditProduct'

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
    <Routes>
      <Route path='/editProduct/:id' element={<EditProduct/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
