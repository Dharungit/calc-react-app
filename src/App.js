import { openSync } from "fs";
import { useState } from "react";

import logo from "./logo.png";

function App() {
  
  const CalNums = () =>{
    const digits =[];

    for (let i=1; i<10; i++){
      digits.push(
      <button onClick={() => updateCalc(i.toString()) } key={i} >{i}</button>
      )
    }
    return digits;
  }

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opr = ["/", "*", "+", "-", "."];



  const updateCalc = value => {
    if(
      opr.includes(value) && calc == "" ||
      opr.includes(value) && opr.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc + value);

    if(!opr.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const evalCalc = () =>{
    if(calc == ""){
      return;
    }
    setCalc(eval(calc).toString());
  }
  
  const deleteLast = () => {
    if(calc == ""){
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }
  const deleteAll = () => {
    if(calc == ""){
      return;
    }
    setCalc("");
  }

  return (
    <div className="root">
      <div className="header">
        <img src={logo} alt="logo" width="30px" />
        <h3>Calulator App</h3>
      </div>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result  ? <span>({result})</span> : "" }&nbsp; {calc || "0"}
          </div>

          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => deleteLast()}>DEL</button>
            <button onClick={() => deleteAll()}>AC</button>

          </div>
          <div className="digits">
            {CalNums()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={() => evalCalc()}>=</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
