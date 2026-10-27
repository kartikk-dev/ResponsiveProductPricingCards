
const monthlyButton = document.querySelector("#monthly");
const yearlyButton = document.querySelector("#yearly");

const prices = document.querySelectorAll(".price-value");
const priceUnits = document.querySelectorAll(".price-unit");
const annualNotes = document.querySelectorAll(".annual-note");

const planButtons = document.querySelectorAll("[data-plan]");
const selectionMessage = document.querySelector("#selection-message");

function setBillingPeriod(period) {
  const isYearly = period === "yearly";

  prices.forEach((price) => {
    price.textContent = price.dataset[period];
  });

  priceUnits.forEach((unit) => {
    unit.textContent = isYearly ? "per year" : "per month";
  });

  annualNotes.forEach((note) => {
    note.hidden = !isYearly;
  });

  monthlyButton.classList.toggle("is-active", !isYearly);
  yearlyButton.classList.toggle("is-active", isYearly);

  monthlyButton.setAttribute("aria-pressed", String(!isYearly));
  yearlyButton.setAttribute("aria-pressed", String(isYearly));
}

monthlyButton.addEventListener("click", () => {
  setBillingPeriod("monthly");
});

yearlyButton.addEventListener("click", () => {
  setBillingPeriod("yearly");
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;

    selectionMessage.textContent =
      `${plan} plan selected. This demonstration does not process subscriptions.`;
  });
});

setBillingPeriod("monthly");
