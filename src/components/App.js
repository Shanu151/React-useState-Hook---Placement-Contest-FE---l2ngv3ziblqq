
import '../styles/App.css';

import React, { useState } from 'react';

export default function App() {
 //code here 
 const [inputValue,setInput]=useState("")
 const [text,setText]=useState("")
 const changeInput=(e)=>{
   setInput(e.target.value);
 }
 const buttonClick=()=>{
  setText((prev)=>prev+inputValue)
   setInput('')
 } 
  return (
    <div>
  <input type="text" id='input' value={inputValue} onChange={(e)=>changeInput(e)} />
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
// import React, { useState } from 'react';

// export default function App() {
//  //code here 

 
//   return (
//     <div>
//   <input id='input' value={inputValue} onChange={changeInput} />
  
//       <p id='intro'>Concated String</p>
//       <p id='text'>{text} </p>
//       <button id='button' onClick={buttonClick}>
//         Click me
//       </button>
//     </div>
//   );
// }
