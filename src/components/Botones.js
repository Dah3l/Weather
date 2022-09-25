import React from 'react'
import '../stylesheets/Boton.css'


const Botones = React.forwardRef((props, ref)=> {
  const handleClick = () => {
    console.log(ref.current);
    ref.current.scrollIntoView();
  }
  return (
    <div className='boton' onClick={()=>handleClick()}>
        {props.texto} {props.children}
    </div>
  )
}
)

export default Botones