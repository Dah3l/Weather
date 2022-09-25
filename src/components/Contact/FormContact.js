import React, {useReducer, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const initialState = {
    from_name: '',
    to_name: '',
    message: ''
}

const reducer = (state, action)=> {
    switch(action.type){
        case 'NAME':
            return {
                ...state, from_name: action.payload
            }
        case 'VALIDO': 
            return {
                ...state, to_name: action.payload
            }
        case 'MESSAGE':
            return {
                ...state, message: action.paylaod
            }
        default: return state;
    }
}
export const FormContact = () => {
  const [valido, setValido] = useState(false);
  const [options, dispatch] = useReducer(reducer, initialState);
  
  const form      = useRef();
  const validator = useRef();

  const sendEmail = (e) => { 
    
    e.preventDefault();

    if(valido === true) {
        emailjs.send('service_7ik68p8', 'template_6yubslk' ,options, 'N4QJSHC-9E59iTBVh')
          .then((result) => {
            alert('Email enviado correctamente!');
          }, (error) => {
            
            console.log(error.text);
          });
    }else {
        alert("Email no Valido!");
    }
  };
  const handleInputMail = (e) =>{

    const regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const data = regExp.test(validator.current.value);
    if(data === false) {
        setValido(false);
    }else{
        dispatch({type: 'VALIDO', payload: validator.current.value})
        setValido(true);
    }
  }
  /* EmailJS brinda la funcion sendForm donde como 3er parametro se le puede pasar un formulario, resulta una via mas rapida de solucion
    esta la hice con el fin de practicar el hook useReducer() y useRef() */
    
  return (
    <form ref={form} onSubmit={sendEmail} className='form-container' >
      <label className='h1'>Contactenos...</label>
      <label>Name</label>
      <input type="text" name="from_name" onChange={(e) =>{dispatch({type: 'NAME', payload: e.target.value})} }/>
      <label>Email</label>
      <input type="email" name="to_name" className={valido ? 'ok' : 'bad'} ref={validator} onChange={handleInputMail} required />
      <label>Message</label>
      <textarea name="message" onChange={(e)=>{dispatch({type: 'MESSAGE', paylaod: e.target.value})}} required/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default React.memo(FormContact);