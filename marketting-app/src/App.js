import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>

        {/* <Route path="/menu" element={<Menu/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
