import React, { useRef } from 'react'
import '../stylesheets/Navbar.css';
import Botones from './Botones';
import {IoIosArrowDown} from 'react-icons/io';


const Navbar = () => {
  
  return (
    <div className='navbar'>
    <img src={require('../assets/nube-logo.png')} alt='Erne' className='nube' />
    <div className='boton-container'>
      <Botones  texto='Inicio'> <IoIosArrowDown className='icono' />  </Botones>
      <Botones  texto='Tiempo'> <IoIosArrowDown className='icono' />  </Botones> 
      <Botones  texto='Contacto'> <IoIosArrowDown className='icono' />  </Botones>
      

    </div>
    </div>
)
}
export default Navbar;