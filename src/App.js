import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const date = new Date();
  let onlyDate = date.toDateString()
  const [myCounter, setMyCounter] = useState([onlyDate])
  const [stepCounter, setStepCounter] = useState(1)
  const [countCounter, setCountCounter] = useState(0)



  function stepMinusHandler() {
    if (stepCounter > 1)
      setStepCounter(stepCounter - 1)
  }

  function stepPlusHandler() {
    setStepCounter(stepCounter + 1)
  }



  // ========================== PLUS =========================== //
  function countPlusHandler() {
    setCountCounter(countCounter + stepCounter)
    const incrementDate = date.setDate(date.getDate() + (countCounter + stepCounter))
    console.log(incrementDate)
    const dateSet = new Date(incrementDate)
    onlyDate = dateSet.toDateString()
    console.log(onlyDate)
    setMyCounter(onlyDate)
    setCountCounter(countCounter + stepCounter)
  }


  // ==============================  MINUS ===================== //
  function countMinusHandler() {

    if (countCounter == 0) {
      return alert("sorry")
    }
    setCountCounter(countCounter - stepCounter)
    console.log(onlyDate)
    const newDate = new Date(myCounter)
    console.log(newDate)
    const decrementtDate = newDate.setDate(newDate.getDate() - stepCounter)
    const dateset = new Date(decrementtDate)
    console.log(dateset)
    onlyDate = dateset.toDateString()
    setMyCounter(onlyDate)

  }

  return (
    <div className="App">
      <div className='stepDiv'>
        <button onClick={stepMinusHandler}>-</button>
        <h3 className='countentStep'>Step: </h3> <h3 className='stepCount'>{stepCounter}</h3>
        <button onClick={stepPlusHandler}>+</button>
      </div>
      <div className='countDiv'>
        <button onClick={countMinusHandler}>-</button>
        <h3 className='countentCount'>Count: </h3 ><h3 className='count'>{countCounter}</h3>
        <button onClick={countPlusHandler}>+</button>
      </div>


      <p className="contentShow">
        <span>
          {countCounter === 0
            ? ""
            : countCounter === 1
              ? countCounter + " day from "
              : countCounter === -1
                ? countCounter + " day from "
                : countCounter + " days from "}
        </span>
        Today is {myCounter}
      </p>







    </div>
  );
}

export default App;
