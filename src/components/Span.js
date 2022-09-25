
import React from 'react';
import { useSpan } from '../hooks/useSpan.js';
import '../stylesheets/Presentacion.css'

const Span = ({palabra}) => {

const first_text = palabra;
let character = '|';



const [data1] = useSpan(first_text);

    return(
        <div className='span'>
            {data1 + character}
        </div>
    );

}
export default React.memo(Span);