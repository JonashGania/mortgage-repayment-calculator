import {
  calculateMonthlyRepayment,
  calculateTotalRepayment,
  calculateMonthlyInterest,
  calculateTotalInterest,
} from "./utils";
import { validateForm } from "./validationUI";
import displayResults from "./displayResults";

const formSubmission = () => {
  const calculateForm = <HTMLFormElement>(
    document.querySelector(".mortgage-form")
  );

  calculateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mortgageTermInput = <HTMLInputElement>(
      document.getElementById("mortgage-term")
    );
    const interestRateInput = <HTMLInputElement>(
      document.getElementById("interest-rate")
    );
    const morgageAmountInput = <HTMLInputElement>(
      document.getElementById("mortgage-amount")
    );
    const selectedRadio = <HTMLInputElement>(
      document.querySelector(
        "input[type='radio'][name='mortgage-type']:checked",
      )
    );
    const mortgageTerm = parseFloat(mortgageTermInput.value.trim());
    const interestRate = parseFloat(interestRateInput.value.trim());
    let morgageAmount = morgageAmountInput.value.trim();
    morgageAmount = morgageAmount.replace(/,/g, "");
    const mortgageAmountNumber = parseFloat(morgageAmount);

    const mortgageTermValue = mortgageTermInput.value.trim();
    const interestRateValue = interestRateInput.value.trim();
    const mortgageType = selectedRadio ? selectedRadio.value : null;

    if (!mortgageType) {
      validateForm(
        morgageAmount,
        mortgageTermValue,
        interestRateValue,
        mortgageType,
      );
    }

    if (
      !isNaN(mortgageAmountNumber) &&
      !isNaN(mortgageTerm) &&
      !isNaN(interestRate) &&
      mortgageType
    ) {
      if (mortgageType === "repayment") {
        const monthlyPayment = calculateMonthlyRepayment(
          mortgageAmountNumber,
          mortgageTerm,
          interestRate,
        );
        const totalPayment = calculateTotalRepayment(
          monthlyPayment,
          mortgageTerm,
        );

        displayResults(monthlyPayment, totalPayment);
      } else if (mortgageType === "interest-only") {
        const monthlyInterestPayment = calculateMonthlyInterest(
          mortgageAmountNumber,
          interestRate,
        );
        const totalInterestPayment = calculateTotalInterest(
          monthlyInterestPayment,
          mortgageTerm,
        );
        displayResults(monthlyInterestPayment, totalInterestPayment);
      }
    }
  });
};

export default formSubmission;
