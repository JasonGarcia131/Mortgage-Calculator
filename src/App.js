import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputData, setInputData] = useState({
    monthlyPayment: {
      amount: ""
    },
    principalAmount: {
      amount: ""
    },
    interestRate: {
      amount: ""
    },
    numberOfPayments: {
      amount: ""
    }
  });

  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: { amount: value } });
  }

  // const test = ({monthlyPayment, principalAmount, interestRate, numberOfPayments}) => {
  //   const total = (principalAmount.amount * (interestRate.amount * Math.pow(1 + interestRate.amount, numberOfPayments.amount)) / ( Math.pow(1 + interestRate.amount, numberOfPayments.amount) - 1));
  //   setTotal(total);
  // }

  const monthlyPaymentCalculate = () => {
    const { principalAmount, interestRate, monthlyPayment, numberOfPayments } = inputData;
    return principalAmount.amount * (interestRate.amount * Math.pow(1 + interestRate.amount, numberOfPayments.amount)) / (Math.pow(1 + interestRate.amount, numberOfPayments.amount) - 1)
  }

  const mortgageCalc = () => {
    let total;

    const { principalAmount, interestRate, monthlyPayment, numberOfPayments } = inputData;

    if (inputData.monthlyPayment.amount.length === 0) {
      console.log("monthly payment case")
      total = monthlyPaymentCalculate()
    }
    if (inputData.principalAmount.amount.length === 0) {
      console.log("principoal payment case")
      total = 1
    }


    if (inputData.interestRate.amount.length === 0) {
      console.log("interest rate payment case")
      total = 2
    }


    if (inputData.numberOfPayments.amount.length === 0) {
      console.log("number of payment case")
      total = 3
    }
  console.log("total", total)
  setTotal(total);
}


return (
  <div className="App">
    <h1>Mortgage Calculator</h1>
    <label>Principal Amount</label>
    <input
      type="number"
      name="principalAmount"
      value={inputData.principalAmount.amount}
      onChange={(e) => handleChange(e)}
    />
    <label>Monthly Payment</label>
    <input
      type="number"
      name="monthlyPayment"
      value={inputData.monthlyPayment.amount}
      onChange={(e) => handleChange(e)}
    />
    <label>Interest Rate</label>
    <input
      type="number"
      name="interestRate"
      value={inputData.interestRate.amount}
      onChange={(e) => handleChange(e)}
    />
    <label>Number of payments</label>
    <input
      type="number"
      name="numberOfPayments"
      value={inputData.numberOfPayments.amount}
      onChange={(e) => handleChange(e)}
    />
    <button onClick={() => mortgageCalc()}>Calc</button>
    <h1>{total}</h1>
  </div>
);
}

export default App;
