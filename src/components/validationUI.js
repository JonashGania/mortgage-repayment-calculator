const validateForm = (morgageAmount, mortgageTerm, interestRate, morgType) => {
  const amountWrapper = document.querySelector(".amount-input-wrapper");
  const termWrapper = document.querySelector(".term-input-wrapper");
  const rateWrapper = document.querySelector(".rate-input-wrapper");
  const amountError = document.querySelector(".amount-error");
  const termError = document.querySelector(".term-error");
  const rateError = document.querySelector(".rate-error");
  const morgTypeError = document.querySelector(".morg-type-error");
  const amountSign = document.querySelector(".amount-input-sign");
  const termSign = document.querySelector(".term-sign");
  const rateSign = document.querySelector(".rate-sign");
  if (morgageAmount === "") {
    amountError.textContent = "This field is required";
    amountWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    amountSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    amountSign.style.color = "#ffffff";
  } else {
    amountError.textContent = "";
    amountWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    amountSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    amountSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (mortgageTerm === "") {
    termError.textContent = "This field is required";
    termWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    termSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    termSign.style.color = "#ffffff";
  } else {
    termError.textContent = "";
    termWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    termSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    termSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (interestRate === "") {
    rateError.textContent = "This field is required";
    rateWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    rateSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    rateSign.style.color = "#ffffff";
  } else {
    rateError.textContent = "";
    rateWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    rateSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    rateSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (!morgType) {
    morgTypeError.textContent = "This field is required";
  } else {
    morgTypeError.textContent = "";
  }
};

const validateInput = (
  inputElement,
  errorSpan,
  wrapperElement,
  signElement,
) => {
  if (inputElement.checkValidity()) {
    errorSpan.textContent = "";
    wrapperElement.style.borderColor = "hsl(200, 24%, 40%)";
    signElement.style.backgroundColor = "hsl(203, 87%, 94%)";
    signElement.style.color = "hsl(202, 55%, 16%)";
  }
};

export { validateForm, validateInput };
