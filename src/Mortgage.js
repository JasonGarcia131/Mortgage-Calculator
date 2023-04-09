import { useState } from 'react';
import { monthlyPaymentCalculate, principalCalculate, interestCalculate, nThPaymentsCalculate } from './Formulas';
import Input
    from './components/Input';
const Mortgage = () => {

    const [inputData, setInputData] = useState({
        monthlyPayment: "",
        principalAmount: "",
        interestRate: "",
        numberOfPayments: ""
    });

    const [total, setTotal] = useState({
        amount: "",
        name: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const mortgageCalc = () => {

        let total;
        if (inputData.principalAmount.length === 0) {
            console.log("principoal payment case")
            total = principalCalculate(inputData);
            setTotal({ amount: total, name: "Principal Payment $" });
        }
        if (inputData.interestRate.length === 0) {
            console.log("interest rate payment case")
            total = interestCalculate(inputData);
            setTotal({ amount: total, name: "Interest Rate %" });
        }
        if (inputData.numberOfPayments.length === 0) {
            console.log("number of payment case")
            total = nThPaymentsCalculate(inputData);
            setTotal({ amount: total, name: "Number of Payments" });
        }
        if (inputData.monthlyPayment.length === 0) {
            console.log("monthly payment case")
            total = monthlyPaymentCalculate(inputData);
            setTotal({ amount: total, name: "Monthly Payment $" });
        }
    }


    return (
        <div className="mortgage-container">
            <img class="background-image" src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" alt="realestate" />
            <div className='desktop'>
                <fieldset>
                    <legend>Mortgage Calculator</legend>
                    <div className='row calculator-container'>
                        <div className='input-container'>
                            <Input
                                label="Principal Amount $"
                                name="principalAmount"
                                value={inputData.principalAmount}
                                handleChange={handleChange}
                            />
                            <Input
                                label="Monthly Payment $"
                                name="monthlyPayment"
                                value={inputData.monthlyPayment}
                                handleChange={handleChange}
                            />
                            <Input
                                label="Interest Rate %"
                                name="interestRate"
                                value={inputData.interestRate}
                                handleChange={handleChange}
                            />
                            <Input
                                label="Number of Payments"
                                name="numberOfPayments"
                                value={inputData.numberOfPayments}
                                handleChange={handleChange}
                            />
                            <button onClick={() => mortgageCalc()} disabled={Object.values(inputData).some(v => !v) ? false : true}>Calc</button>
                        </div>

                        <div className='results'>
                            {
                                total.amount ? (
                                    <div>
                                        <h2> Your {total.name}</h2>
                                        <h3>{total.amount}</h3>
                                        <div className='column'>
                                            <p>Find Your Home!</p>
                                            <a rel="noreferrer noopener" target="_blank" href='https://www.zillow.com/'>Zillow</a>
                                            <a rel="noreferrer noopener" target="_blank" href='https://www.trulia.com/'>Trulia</a>
                                            <a rel="noreferrer noopener" target="_blank" href='https://www.realtor.com/'>Realtor</a>
                                        </div>

                                    </div>

                                ) :
                                    ""
                            }

                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    );
}

export default Mortgage;
