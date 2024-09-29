import {
  calculateMonthlyRepayment,
  calculateTotalRepayment,
  calculateMonthlyInterest,
  calculateTotalInterest,
} from "./utils";
import { validateForm } from "./validationUI";
import displayResults from "./displayResults";

const formSubmission = () => {
  const calculateForm = document.querySelector(".mortgage-form");

  calculateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mortgageTerm = document.getElementById("mortgage-term").value.trim();
    const interestRate = document.getElementById("interest-rate").value.trim();
    let morgageAmount = document.getElementById("mortgage-amount").value.trim();
    morgageAmount = morgageAmount.replace(/,/g, "");
    const selectedRadio = document.querySelector(
      "input[type='radio'][name='mortgage-type']:checked",
    );
    const mortgageType = selectedRadio ? selectedRadio.value : null;

    validateForm(morgageAmount, mortgageTerm, interestRate, mortgageType);

    if (mortgageType === "repayment") {
      const monthlyPayment = calculateMonthlyRepayment(
        morgageAmount,
        mortgageTerm,
        interestRate,
      );
      const totalPayment = calculateTotalRepayment(
        monthlyPayment,
        mortgageTerm,
      );

      displayResults(monthlyPayment, totalPayment);
      console.log(monthlyPayment);
      console.log(totalPayment);
    } else if (mortgageType === "interest-only") {
      const monthlyInterestPayment = calculateMonthlyInterest(
        morgageAmount,
        interestRate,
      );
      const totalInterestPayment = calculateTotalInterest(
        monthlyInterestPayment,
        mortgageTerm,
      );
      displayResults(monthlyInterestPayment, totalInterestPayment);
      console.log(monthlyInterestPayment);
      console.log(totalInterestPayment);
    }
  });
};

export default formSubmission;
