import './App.css';
import { About } from './index/About.js';
import { All } from './index/All';
import { Footer } from './index/Footer';
import { Gel } from './index/Gel';
import { Header } from './index/Header';
import { Home } from './index/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Naruto } from './index/Naruto';

function App() {
  return (
    <>
     
   <BrowserRouter>
   <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Jinchuriki" element={<Gel/>}/>
          <Route path="/all" element={<All/>}/>
          <Route path="/naruto" element={<Naruto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       
    </>
  );
}





export default App;