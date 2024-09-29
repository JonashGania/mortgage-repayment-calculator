const calculateMonthlyRepayment = (amountBorrowed, years, annualRate) => {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  const monthlyRepayment =
    (amountBorrowed * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return monthlyRepayment.toFixed(2);
};

const calculateTotalRepayment = (monthlyPayment, years) => {
  const totalMonths = years * 12;

  return (monthlyPayment * totalMonths).toFixed(2);
};

const calculateMonthlyInterest = (amountBorrowed, annualRate) => {
  const monthlyRate = annualRate / 100 / 12;

  return (amountBorrowed * monthlyRate).toFixed(2);
};

const calculateTotalInterest = (monthlyInterest, years) => {
  const totalMonths = years * 12;
  return (monthlyInterest * totalMonths).toFixed(2);
};

const addCommaToNumbers = (value) => {
  let resultValue = value.replace(/[^0-9.]/g, "");
  let parts = resultValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export {
  calculateMonthlyRepayment,
  calculateTotalRepayment,
  calculateMonthlyInterest,
  calculateTotalInterest,
  addCommaToNumbers,
};
