import { addCommaToNumbers } from "./utils";
import { validateInput } from "./validationUI";

const eventHandlers = () => {
  const repaymentWrapper = document.querySelector(".repayment-wrapper");
  const interestOnlyWrapper = document.querySelector(".interest-only-wrapper");
  const mortgageAmountInput = document.getElementById("mortgage-amount");
  const mortgageTermInput = document.getElementById("mortgage-term");
  const interestRateInput = document.getElementById("interest-rate");
  const repaymentRadio = document.getElementById("repayment");
  const interestRadio = document.getElementById("interest-only");
  const clearAllBtn = document.querySelector(".clear-all");

  clearAllBtn.addEventListener("click", () => {
    document.querySelector(".mortgage-form").reset();
    repaymentWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    repaymentWrapper.style.backgroundColor = "transparent";
    interestOnlyWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    interestOnlyWrapper.style.backgroundColor = "transparent";
  });

  repaymentWrapper.addEventListener("click", () => {
    repaymentRadio.checked = true;
    if (repaymentRadio.checked) {
      repaymentWrapper.style.borderColor = "hsl(61, 70%, 52%)";
      repaymentWrapper.style.backgroundColor = "rgba(215, 218, 47, 0.2)";
      interestOnlyWrapper.style.borderColor = "hsl(200, 24%, 40%)";
      interestOnlyWrapper.style.backgroundColor = "transparent";
      document.querySelector(".morg-type-error").textContent = "";
    }
  });
  interestOnlyWrapper.addEventListener("click", () => {
    interestRadio.checked = true;
    if (interestRadio.checked) {
      interestOnlyWrapper.style.borderColor = "hsl(61, 70%, 52%)";
      interestOnlyWrapper.style.backgroundColor = "rgba(215, 218, 47, 0.2)";
      repaymentWrapper.style.borderColor = "hsl(200, 24%, 40%)";
      repaymentWrapper.style.backgroundColor = "transparent";
      document.querySelector(".morg-type-error").textContent = "";
    }
  });

  mortgageAmountInput.addEventListener("focus", () => {
    document.querySelector(".amount-input-wrapper").style.borderColor =
      "hsl(61, 70%, 52%)";
    document.querySelector(".amount-input-sign").style.backgroundColor =
      "hsl(61, 70%, 52%)";
    document.querySelector(".amount-input-sign").style.color =
      "hsl(202, 55%, 16%)";
  });

  mortgageAmountInput.addEventListener("blur", () => {
    document.querySelector(".amount-input-wrapper").style.borderColor =
      "hsl(200, 24%, 40%)";
    document.querySelector(".amount-input-sign").style.backgroundColor =
      "hsl(203, 87%, 94%)";
  });

  mortgageAmountInput.addEventListener("input", (event) => {
    event.target.value = addCommaToNumbers(event.target.value);
    const amountWrapper = document.querySelector(".amount-input-wrapper");
    const amountError = document.querySelector(".amount-error");
    const amountSign = document.querySelector(".amount-input-sign");
    amountError.textContent = "";
    amountWrapper.style.borderColor = "hsl(61, 70%, 52%)";
    amountSign.style.backgroundColor = "hsl(61, 70%, 52%)";
  });

  mortgageTermInput.addEventListener("input", () => {
    const termWrapper = document.querySelector(".term-input-wrapper");
    const termError = document.querySelector(".term-error");
    const termSign = document.querySelector(".term-sign");
    validateInput(mortgageTermInput, termError, termWrapper, termSign);
  });
  interestRateInput.addEventListener("input", () => {
    const rateWrapper = document.querySelector(".rate-input-wrapper");
    const rateError = document.querySelector(".rate-error");
    const rateSign = document.querySelector(".rate-sign");
    validateInput(mortgageTermInput, rateError, rateWrapper, rateSign);
  });
};

export { eventHandlers };
