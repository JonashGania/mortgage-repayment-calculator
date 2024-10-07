const calculateMonthlyRepayment = (
  amountBorrowed: number,
  years: number,
  annualRate: number,
) => {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  const monthlyRepayment =
    (amountBorrowed * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return Math.round(monthlyRepayment * 100) / 100;
};

const calculateTotalRepayment = (monthlyPayment: number, years: number) => {
  const totalMonths = years * 12;

  return Math.round(monthlyPayment * totalMonths * 100) / 100;
};

const calculateMonthlyInterest = (
  amountBorrowed: number,
  annualRate: number,
) => {
  const monthlyRate = annualRate / 100 / 12;

  return Math.round(amountBorrowed * monthlyRate * 100) / 100;
};

const calculateTotalInterest = (monthlyInterest: number, years: number) => {
  const totalMonths = years * 12;
  return Math.round(monthlyInterest * totalMonths * 100) / 100;
};

const addCommaToNumbers = (value: string) => {
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
