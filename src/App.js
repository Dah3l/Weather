
import Navbar from './components/Navbar';
import './App.css';
import HavanaBanner from './components/HavanaBanner';
import Parametros from './components/Parametros';
import './App.css';
import Contact from './components/Contact/Contact';
import React from 'react';
import { useRef } from 'react';

function App() {
  const referencia = useRef(null);
  console.log(referencia)

  return (
    <div className="App">
      
      <Navbar />
      <HavanaBanner />
      <Parametros/>
      <Contact ref={referencia}/>
      
      
    </div>
  );
}

export default App;
