"use strict";

const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const totalAmount = document.querySelector(".total-amount");

function calculate() {
  const principalInput = document.querySelector("#principal");
  const rateInput = document.querySelector("#rate");
  const yearsInput = document.querySelector("#years");

  if (!principalInput.value || !rateInput.value || !yearsInput.value) {
    alert("Please fill out all required fields.");
    return;
  }

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value) / 100;
  let years = Number(yearsInput.value);

  if (principal < 0 || isNaN(principal)) {
    principal = 0;
    principalInput.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
    rate = 0;
    rateInput.value = 0;
  }
  if (years < 0 || isNaN(years)) {
    years = 0;
    yearsInput.value = 0;
  }

  const result = principal * Math.pow(1 + rate / 1, 1 * years);

  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}

function clear() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
  totalAmount.textContent = "$0.00";
}

submitBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clear);
