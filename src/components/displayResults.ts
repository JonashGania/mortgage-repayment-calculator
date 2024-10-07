import resultsCard from "./resultsCard";

const displayResults = (monthlyRepay: number, totalRepay: number) => {
  const resultsContainer = <HTMLElement>(
    document.querySelector(".results-container")
  );
  const resultsWrapper = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const resultCard = resultsCard(monthlyRepay, totalRepay);

  resultsContainer.innerHTML = "";
  resultsWrapper.classList.add("results-container-wrapper");

  h2.textContent = "Your Results";
  p.textContent =
    'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.';

  resultsWrapper.appendChild(h2);
  resultsWrapper.appendChild(p);
  resultsWrapper.appendChild(resultCard);
  resultsContainer.appendChild(resultsWrapper);
};

export default displayResults;
