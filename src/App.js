import React, {useState, useEffect} from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] =useState("Rolling Stones");
  const [num, setNum] = useState(1);
  useEffect(function(){
    console.log("effect");
  }, [message,num]);
  

  return (
    <div className="App">
      <h3>Hello CodeSandbox</h3>
      <h4>Use State</h4>
     <h4>Count: {count} </h4>
     <div>
     <button onClick={()=>{setCount(count - 1)}}>-</button>
     <button onClick={() => { setCount(count + 1)}}>+</button>        
     </div>

     <h4>{message}</h4>
     <button onClick={() => {setMessage("The Beatles")}}>  Change </button>

{/* useEffect */}
<h4>UseEffect</h4>
{message}
<button onClick={() =>{setMessage("hello") }}> Change </button>
{num}
<button onClick={() => { setNum(5);}}> Change Num </button>



      
    </div>
  );
}
