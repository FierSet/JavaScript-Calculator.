import React from 'react';
import Colors from './Colors';
import buttons from './buttons'
import './App.css';

function App() 
{
  const [color] = React.useState(Math.floor(Math.random() * Colors.length));
  const [exprecion, setexprecion] = React.useState("");
  const [answer, setanswer] = React.useState("");
  
  const display = (symbol) =>
  {
    if(symbol === 'AC')
    {
      setexprecion("");
      setanswer("");
    }
    else if(symbol === '=' && exprecion !== "")
      calculate();
    else
      setexprecion(prev => prev + symbol);
  }

  const calculate = () =>
  {
    setanswer(eval(exprecion));
  }

  return (
    <div className = "App" style = {{backgroundColor: Colors[color], minHeight: "100vh"}}>
      <div className = 'constainer'>
        <div className = 'card'>
          <div className = 'card-header'><h3>JavaScript Calculator.</h3></div>
          <div className = 'grid'>
            <div id = 'display'> 
              <input type = 'text' value = {exprecion} placeholder = "0" />
              <div className = 'total'>{answer}</div>
            </div>
              {
                buttons.map((btn) => 
                (
                  <Pad btn = {btn} display = {display} />
                ))
              }
              <div id = 'author'>Designed and Coded By Miguel Ortega.</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

function Pad ( {btn, display} )
{
  const [colorbtn, setcolorbtn] = React.useState('#5B5B5B')

  React.useEffect( () =>
  {
      async function colorbutton()
      {
        if(btn.id === 'clear')
          setcolorbtn('#CB0101');
        else if(btn.id === 'equal')
          setcolorbtn('#052EB8');
        else if(btn.id === 'add' ||
                btn.id === 'subtract' ||
                btn.id === 'divide' ||
                btn.id === 'multiply')
          setcolorbtn('#6E6E6E');
      }
      colorbutton();
  }, []);

  return(
      <div className = 'padbtn' id = {btn.id} style = {{backgroundColor: colorbtn}} onClick = {() => display(btn.keyTrigger)}>
        {btn.keyTrigger}
      </div>
  );
}

export default App;
