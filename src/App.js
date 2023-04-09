import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Mortgage from './Mortgage';

function App() {

  // const [inputData, setInputData] = useState({
  //   monthlyPayment: "",
  //   principalAmount: "",
  //   interestRate: "",
  //   numberOfPayments: ""
  // });

  // const [total, setTotal] = useState(0);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputData({ ...inputData, [name]: value });
  // }

  // const test = ({monthlyPayment, principalAmount, interestRate, numberOfPayments}) => {
  //   const total = (principalAmount.amount * (interestRate.amount * Math.pow(1 + interestRate.amount, numberOfPayments.amount)) / ( Math.pow(1 + interestRate.amount, numberOfPayments.amount) - 1));
  //   setTotal(total);
  // }


//   const mortgageCalc = () => {
//     let total;
//     if (inputData.principalAmount.length === 0) {
//       console.log("principoal payment case")
//       total = principalCalculate(inputData);
//     }
//     if (inputData.interestRate.length === 0) {
//       console.log("interest rate payment case")
//       total = interestCalculate(inputData);
//     }
//     if (inputData.numberOfPayments.length === 0) {
//       console.log("number of payment case")
//       total = nThPaymentsCalculate(inputData);
//     }
//     if (inputData.monthlyPayment.length === 0) {
//       console.log("monthly payment case")
//       total = monthlyPaymentCalculate(inputData);
//     }
//   console.log("total", total)
//   setTotal(total);
// }


return (
  <div className="App">
   <Mortgage/>
  </div>
);
}

export default App;
