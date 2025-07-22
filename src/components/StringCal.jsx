import React from 'react'
import { useState } from 'react';

function StringCal() {
    const [input, SetInput] = useState('');
    const [result, SetResult] = useState(null);
    const [error, SetError] = useState('');
    
    function handleClick(){
        console.log("test")
    }

  return (
    <div className='main' style={{padding:20}}>
        <h2>String Calculator</h2>
        <textarea 
         rows={5}
         cols={40}
         placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
         value={input}
         onChange={(e)=>SetInput(e.target.value)}
        />
        <button type='button' onClick={handleClick}>Calculate</button>
        {result !==null && <p>Result: {result} </p>}
        {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default StringCal