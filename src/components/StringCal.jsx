import React from 'react'
import { useState } from 'react';
import { AddValue } from '../utils/stringCal';

function StringCal() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    
    const handleClick = () => {
        try{
            let sum = AddValue(input);
            setResult(sum);
            setError('');

        }catch(error){
         setResult(null);
         setError(error.message);
        }
    }

  return (
    <div className='main' style={{padding:20}}>
        <h2>String Calculator</h2>
        <textarea 
         rows={5}
         cols={40}
         placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
         value={input}
         onChange={(e)=>setInput(e.target.value)}
        />
        <br/>
        <br/>
        <button style={{color:'#fff',border:0, borderRadius:'15px',backgroundColor:'#0275d8',padding:'10px'}} type='button' onClick={handleClick}>Calculate</button>
        {result !==null && <p>Result: {result} </p>}
        {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default StringCal