import { addCommaToNumbers } from "./utils";
import { validateInput } from "./validationUI";

const eventHandlers = () => {
  const repaymentWrapper = <HTMLDivElement>(
    document.querySelector(".repayment-wrapper")
  );
  const interestOnlyWrapper = <HTMLDivElement>(
    document.querySelector(".interest-only-wrapper")
  );
  const mortgageAmountInput = <HTMLInputElement>(
    document.getElementById("mortgage-amount")
  );
  const mortgageTermInput = <HTMLInputElement>(
    document.getElementById("mortgage-term")
  );
  const interestRateInput = <HTMLInputElement>(
    document.getElementById("interest-rate")
  );
  const repaymentRadio = <HTMLInputElement>document.getElementById("repayment");
  const interestRadio = <HTMLInputElement>(
    document.getElementById("interest-only")
  );
  const clearAllBtn = <HTMLButtonElement>document.querySelector(".clear-all");
  const form = <HTMLFormElement>document.querySelector(".mortgage-form");
  const mortgTypeError = <HTMLSpanElement>(
    document.querySelector(".morg-type-error")
  );
  const amountInputWrapper = <HTMLDivElement>(
    document.querySelector(".amount-input-wrapper")
  );
  const amountInputSign = <HTMLParagraphElement>(
    document.querySelector(".amount-input-sign")
  );

  clearAllBtn.addEventListener("click", () => {
    form.reset();
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
      mortgTypeError.textContent = "";
    }
  });
  interestOnlyWrapper.addEventListener("click", () => {
    interestRadio.checked = true;
    if (interestRadio.checked) {
      interestOnlyWrapper.style.borderColor = "hsl(61, 70%, 52%)";
      interestOnlyWrapper.style.backgroundColor = "rgba(215, 218, 47, 0.2)";
      repaymentWrapper.style.borderColor = "hsl(200, 24%, 40%)";
      repaymentWrapper.style.backgroundColor = "transparent";
      mortgTypeError.textContent = "";
    }
  });

  mortgageAmountInput.addEventListener("focus", () => {
    amountInputWrapper.style.borderColor = "hsl(61, 70%, 52%)";
    amountInputSign.style.backgroundColor = "hsl(61, 70%, 52%)";
    amountInputSign.style.color = "hsl(202, 55%, 16%)";
  });

  mortgageAmountInput.addEventListener("blur", () => {
    amountInputWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    amountInputSign.style.backgroundColor = "hsl(203, 87%, 94%)";
  });

  mortgageAmountInput.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    target.value = addCommaToNumbers(target.value);
    const amountError = <HTMLSpanElement>(
      document.querySelector(".amount-error")
    );
    amountError.textContent = "";
    amountInputWrapper.style.borderColor = "hsl(61, 70%, 52%)";
    amountInputSign.style.backgroundColor = "hsl(61, 70%, 52%)";
  });

  mortgageTermInput.addEventListener("input", () => {
    const termWrapper = <HTMLDivElement>(
      document.querySelector(".term-input-wrapper")
    );
    const termError = <HTMLSpanElement>document.querySelector(".term-error");
    const termSign = <HTMLParagraphElement>document.querySelector(".term-sign");
    validateInput(mortgageTermInput, termError, termWrapper, termSign);
  });
  interestRateInput.addEventListener("input", () => {
    const rateWrapper = <HTMLDivElement>(
      document.querySelector(".rate-input-wrapper")
    );
    const rateError = <HTMLSpanElement>document.querySelector(".rate-error");
    const rateSign = <HTMLParagraphElement>document.querySelector(".rate-sign");
    validateInput(mortgageTermInput, rateError, rateWrapper, rateSign);
  });
};

export { eventHandlers };
