import React from 'react'
import '../stylesheets/Presentacion.css';
import svgfoto from '../assets/line-rain2a(1).svg'
import { WiCloud,WiCelsius, WiRaindrop, WiStrongWind} from "react-icons/wi";
import {GoLocation} from 'react-icons/go'
import {MdOutlineVisibility} from 'react-icons/md';
import {MdOutlineDescription} from 'react-icons/md'
import {FaTemperatureLow} from 'react-icons/fa'
import {RiCelsiusLine} from 'react-icons/ri'
import {GiValve} from 'react-icons/gi'
import {useState, useEffect} from 'react'
import getProvincia from '../services/getProvinciaAxios';
import Loading from '../components/Loading'


function Parametros() {
    
    const [provincia, setProvincia] = useState(null);

    useEffect(()=> {
        const data = getProvincia().catch((err) => {
            console.log('Se ha producido un error!');
        });
        data.then((res) => setProvincia(res.data));
    
}, [])   
return (
    <>
        {(provincia === null) ?  (<Loading />) : 
        (<div className='info-container'>
                    <h1>{provincia.name}</h1>
                    <p><MdOutlineVisibility className='icons' /> Visibility: {provincia.visibility / 1000} kms  </p>
                    <p><WiCloud className='icons'             />Description: {provincia.weather[0].main} </p>
                    <p><MdOutlineDescription className='icons'/>{provincia.weather[0].description}</p>
                    <p><WiCelsius className='icons'           /> Temp: {Math.round(provincia.main.temp - 273.15)} <RiCelsiusLine /></p>
                    <p><WiRaindrop className='icons'          /> Humidity: {provincia.main.humidity} % </p>
                    <p><WiStrongWind className='icons'        />Wind speed: {provincia.wind.speed} m/s  </p>
                    <p><FaTemperatureLow className='icons'    />Feels like: {Math.round(provincia.main.feels_like - 273.15)} <RiCelsiusLine /> </p>
                
        </div>) }
    </>
)
}

export default Parametros;