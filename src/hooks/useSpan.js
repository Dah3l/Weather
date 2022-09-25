import { useState } from "react";
import { useEffect } from "react";

export const useSpan = (first_text) => {
    const [text1, setText1] = useState("");

useEffect(() =>{
    const timeout = setTimeout(() => {
        setText1(first_text.slice(0, text1.length + 1));
        
    }, 200); 
    if(text1.length === first_text.length + 1){
        setText1('');
    }
    return () => clearTimeout(timeout);
}, [text1, first_text]);

    return [
        text1
    ]
}

