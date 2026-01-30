import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import Header from './components/Header/header';
import Principal from './components/Principal/principal';
import RegistroNomada from './components/registro-nomada/registroN';
import RegistroNodo from './components/registro-nodo/registroA';
import Ayuda from './components/help/help';

function App() {
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      document.body.classList.remove("hide-scrollbar");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.add("hide-scrollbar");
      }, 1000); // 1 segundo sin movimiento
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Principal/>} />
        <Route path="/registroNomada" element={<RegistroNomada/>} />
        <Route path="/registroNodo" element={<RegistroNodo/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
      </Routes>
      <Analytics />
   </BrowserRouter> 
  );
}
  
export default App;
