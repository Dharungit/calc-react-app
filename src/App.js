import logo from "./logo.png";

function App() {
  
  const CalNums = () =>{
    const digits =[];

    for (let i=1; i<10; i++){
      digits.push(
      <button key={i}>{i}</button>
      )
    }
    return digits;
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
            <span>(0)</span>0
          </div>

          <div className="operators">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
            <button>DEL</button>
          </div>
          <div className="digits">
            {CalNums()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
