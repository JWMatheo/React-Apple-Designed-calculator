import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  let tempFirstMapCurrentNumber = "";
  let tempSecondtMapCurrentNumber = "";
  const [number, setNumber] = useState("0");
  const [individualFirstNumber, setIndividualFirstNumber] = useState([]);
  const [firstNumber, setFirstNumber] = useState([]);
  const [individualSecondNumber, setIndividualSecondNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [add, setAdd] = useState(false);
  const [sub, setSub] = useState(false);
  const [mult, setMult] = useState(false);
  const [div, setDiv] = useState(false);
 
  const handleNumberChange = (e) => {
      e.preventDefault();

      if (add === false && sub === false && mult === false && div === false) {

        const tempCurrentNumber = [...individualFirstNumber, e.target.value];
        setIndividualFirstNumber(tempCurrentNumber);

        individualFirstNumber.map((stringNumber) => (
          tempFirstMapCurrentNumber = tempFirstMapCurrentNumber + stringNumber
        ))

        const tempNumber = (tempFirstMapCurrentNumber + e.target.value)
        setNumber(tempNumber);

        const temp = [...firstNumber, number + e.target.value];
        setFirstNumber(temp);

      } else {

        const tempCurrentNumber = [...individualSecondNumber, e.target.value];
        setIndividualSecondNumber(tempCurrentNumber);

        individualSecondNumber.map((stringNumber) => (
          tempSecondtMapCurrentNumber = tempSecondtMapCurrentNumber + stringNumber
        ))

        const tempNumber = (tempSecondtMapCurrentNumber + e.target.value)
        setNumber(tempNumber);

          
        const temp = [...secondNumber, tempNumber];
        setSecondNumber(temp)
        }
      
  
  }

  
  const handleResetClick = () => {
    setNumber(0);
    setFirstNumber([]);
    setIndividualFirstNumber([]);
    setSecondNumber([]);
    setIndividualSecondNumber([]);
    setAdd(false);
    setSub(false);
    setMult(false);
    setDiv(false);
  }

  const handleSignChange = () => {
    let opositeNumber = number - (2*number);
    setNumber(opositeNumber);
    if (add === false && sub === false && mult === false && div === false) {
      setIndividualFirstNumber([...individualFirstNumber, String(opositeNumber)]);
      setFirstNumber([...firstNumber, String(opositeNumber)])
    } else {
      setIndividualSecondNumber([...individualSecondNumber, String(opositeNumber)]);
      setSecondNumber([...secondNumber, String(opositeNumber)])
    }
  }

  const handlePercentChange = () => {
    let percentNumber = number / 100;
    setNumber(percentNumber);
    if (add === false && sub === false && mult === false && div === false) {
      setIndividualFirstNumber([...individualFirstNumber, String(percentNumber)]);
      setFirstNumber([...firstNumber, String(percentNumber)])
    } else {
      setIndividualSecondNumber([...individualSecondNumber, String(percentNumber)]);
      setSecondNumber([...secondNumber, String(percentNumber)])
    }
  }
  
  const handleOperationClick = (e) => {
    if (e.target.value === "+") {
      setAdd(true);
      setSub(false);
      setMult(false);
      setDiv(false);
      setSecondNumber([]);
      setIndividualSecondNumber([]);
      if (individualFirstNumber.length === 0){
        setIndividualFirstNumber(["0"]);
        setFirstNumber(["0"]);
      }
    } else if (e.target.value === "-") {
      setSub(true);
      setAdd(false);
      setMult(false);
      setDiv(false);
      setSecondNumber([]);
      setIndividualSecondNumber([]);
      if (individualFirstNumber.length === 0){
        setIndividualFirstNumber(["0"]);
        setFirstNumber(["0"]);
      }
    } else if (e.target.value === "x") {
      setMult(true);
      setAdd(false);
      setSub(false);
      setDiv(false);
      setSecondNumber([]);
      setIndividualSecondNumber([]);
      if (individualFirstNumber.length === 0){
        setIndividualFirstNumber(["0"]);
        setFirstNumber(["0"]);
      }
    } else {
      setDiv(true);
      setAdd(false);
      setSub(false);
      setMult(false);
      setSecondNumber([]);
      setIndividualSecondNumber([]);
      if (individualFirstNumber.length === 0){
        setIndividualFirstNumber(["0"]);
        setFirstNumber(["0"]);
      }
    }
  }
  
  const handleEqualClick = () => {
    if (add === true && sub === false && mult === false && div === false) {
      const tempSecondNumberLength = secondNumber.length;
      const tempFirstNumberLength = firstNumber.length;
      const tempResult = parseFloat(firstNumber[tempFirstNumberLength - 1]) + parseFloat(secondNumber[tempSecondNumberLength - 1]);
      setNumber(String(tempResult));
      setFirstNumber([tempResult]);
      setIndividualFirstNumber([tempResult]);
    } else if (add === false && sub === true && mult === false && div === false) {
      const tempSecondNumberLength = secondNumber.length;
      const tempFirstNumberLength = firstNumber.length;
      const tempResult = parseFloat(firstNumber[tempFirstNumberLength - 1]) - parseFloat(secondNumber[tempSecondNumberLength - 1]);
      setNumber(String(tempResult));
      setFirstNumber([tempResult]);
      setIndividualFirstNumber([tempResult]);
    } else if (add === false && sub === false && mult === true && div === false) {
      const tempSecondNumberLength = secondNumber.length;
      const tempFirstNumberLength = firstNumber.length;
      const tempResult = parseFloat(firstNumber[tempFirstNumberLength - 1]) * parseFloat(secondNumber[tempSecondNumberLength - 1]);
      setNumber(String(tempResult));
      setFirstNumber([tempResult]);
      setIndividualFirstNumber([tempResult]);
    } else  if (add === false && sub === false && mult === false && div === true) {
      const tempSecondNumberLength = secondNumber.length;
      const tempFirstNumberLength = firstNumber.length;
      const tempResult = parseFloat(firstNumber[tempFirstNumberLength - 1]) / parseFloat(secondNumber[tempSecondNumberLength - 1]);
      setNumber(String(tempResult));
      setFirstNumber([tempResult]);
      setIndividualFirstNumber([tempResult]);
    } else {
      
    }
    

    // setSecondNumber([]);
    // setIndividualSecondNumber([]);
    // setAdd(false);
    // setSub(false);
    // setMult(false);
    // setDiv(false);
  }

  let today = new Date();
  let time = today.getHours() + ":" + (today.getMinutes()<10 ? '0' : '') + today.getMinutes() ;


  return (
    <div className="App">
      <div className='icon-wrapper'>
        <div className="icon-left-wrapper">
          <div className="time">{time}</div>
            <div className="icont-left-cut"></div>
          <i className="fa fa-light fa-location-arrow"></i>
        </div>
        <div className='icon-right-wrapper'>
        <i className="fa-solid fa-signal"></i>
          <div className="icont-right-cut"></div>
        <i className="fa-solid fa-wifi"></i>
          <div className="icont-right-cut"></div>
        <i className="fa-solid fa-battery-full"></i>
        </div>
      </div>
      <div className={number.length>7 ? 'result-wrapper more-number' : "result-wrapper"}>
          {number}
      </div>
      <div className='button-wrapper'>
      <div className="button-container">
      <button className='black grey' onClick={handleResetClick} value={"AC"}>AC</button>
      <button className='black grey' onClick={handleSignChange} value={"+/-"}>+/-</button>
      <button className='black grey' onClick={handlePercentChange} value={"%"}>%</button>
      <button onClick={handleOperationClick} value={"÷"} className={div === true ? "operator" : ""}>÷</button>
      </div>
      <div className="button-container">
      <button className='tainted-grey' onClick={handleNumberChange} value={"7"}>7</button>
      <button className='tainted-grey' onClick={handleNumberChange} value={"8"}>8</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"9"}>9</button>
      <button onClick={handleOperationClick} value={"x"} className={mult === true ? "operator" : ""}>x</button>
      </div>
      <div className="button-container">
      <button className='tainted-grey'onClick={handleNumberChange} value={"4"}>4</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"5"}>5</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"6"}>6</button>
      <button onClick={handleOperationClick} value={"-"} className={sub === true ? "operator" : ""}>-</button>
      </div>
        <div className="button-container">
      <button className='tainted-grey'onClick={handleNumberChange} value={"1"}>1</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"2"}>2</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"3"}>3</button>
      <button onClick={handleOperationClick} value={"+"} className={add === true ? "operator" : ""}>+</button>
      </div>
      <div className="button-container">
      <button className='tainted-grey zero' onClick={handleNumberChange} value={"0"}>0</button>
      <button className='tainted-grey'onClick={handleNumberChange} value={"."}>.</button>
      <button onClick={handleEqualClick} value={"="}>=</button>
      </div>
      </div>
      <div className='swipe-bar'></div>
    </div>
  );
}

export default App;