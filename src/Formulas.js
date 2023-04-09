
export function monthlyPaymentCalculate({ principalAmount, interestRate, numberOfPayments }) {
    return principalAmount * ((interestRate / 1200) * Math.pow(1 + (interestRate / 1200), numberOfPayments)) / (Math.pow(1 + (interestRate / 1200), numberOfPayments) - 1)
}

export function principalCalculate({ interestRate, monthlyPayment, numberOfPayments }) {
    return (monthlyPayment * (Math.pow(1 + (interestRate / 1200), numberOfPayments) - 1)) / ((interestRate / 1200) * Math.pow(1 + (interestRate / 1200), numberOfPayments))
}

export function interestCalculate({ principalAmount, monthlyPayment, numberOfPayments }) {
    const interestDecimal = (monthlyPayment * numberOfPayments) - principalAmount;
    const interestPercent = interestDecimal * 1200;
    return interestPercent;
}

export function nThPaymentsCalculate({ principalAmount, interestRate, monthlyPayment }) {
    return ((interestRate / 100) + principalAmount) / monthlyPayment;
}



