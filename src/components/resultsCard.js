import { addCommaToNumbers } from "./utils";

const resultsCard = (monthlyRepayment, totalRepayment) => {
  monthlyRepayment = addCommaToNumbers(monthlyRepayment);
  totalRepayment = addCommaToNumbers(totalRepayment);

  const resultCardContainer = document.createElement("div");
  resultCardContainer.classList.add("result-card-container");
  resultCardContainer.innerHTML = `
        <div class="monthly-repayment-results">
            <span>Your monthly repayments</span>
            <h1 class="monthly-repayments">£${monthlyRepayment}</h1>
        </div>
        <div class="total-repayment-results">
            <span>Total you'll repay over the term</span>
            <h3 class="total-repayments">£${totalRepayment}</h3>
        </div>
  `;

  return resultCardContainer;
};

export default resultsCard;
