//------For the card-----

//Number at the back of the card
const cvctxt = document.querySelector(".cvc-text");

// Card Number
const firstCardNumSet = document.querySelector(".first-span");
const secondCardNumSet = document.querySelector(".second-span");
const thirdCardNumSet = document.querySelector(".third-span");
const fourthCardNumSet = document.querySelector(".fourth-span");
const fifthCardNumSet = document.querySelector(".fifth-span");
const spanP = document.querySelector(".spanP");

//Card Name
const cardName = document.querySelector(".name-on-card");

//exp date
const cardexpmm = document.querySelector(".exp-mm-on-card");
const cardexpyy = document.querySelector(".exp-yy-on-card");

//------For the Input fields---------

const inputName = document.querySelector("#cardholder-name");
const inputCardNum = document.querySelector("#card-number");
const inputexpmm = document.querySelector("#expiration-mm");
const inputexpyy = document.querySelector("#expiration-yy");
const inputcvc = document.querySelector("#cvc");

//------For the error handling--------

const nameErr = document.querySelector(".err-name");
const numErr = document.querySelector(".err-num");
const expErr = document.querySelector(".err-exp");
const cvcErr = document.querySelector(".err-cvc");

//-------form-----
const form = document.querySelector("form");
const formButton = document.querySelector(".form-button");
const formSection = document.querySelector(".form");
const completeContainer = document.querySelector(".complete-container");

//-----function declarations--------
function setAll() {
  if (inputName.value !== "") {
    cardName.innerHTML = inputName.value;
  }

  if (inputCardNum.value !== "") {
    updatechangeNum();
  }

  if (inputexpmm.value !== "") {
    cardexpmm.innerHTML = inputexpmm.value;
  }

  if (inputexpyy.value !== "") {
    cardexpyy.innerHTML = inputexpyy.value;
  }

  if (inputcvc.value !== "") {
    cvctxt.innerHTML = inputcvc.value;
  }

  completeContainer.classList = "complete-container hidden";
  form.classList = "";
}

function updateName(e) {
  cardName.innerHTML =
    e.currentTarget.value === "" ? "Jane Appleseed" : e.currentTarget.value;
  nameErr.classList = "error-description err-num hidden";
  inputName.classList = "";
}

function updateExpmm(e) {
  cardexpmm.innerHTML =
    e.currentTarget.value === "" ? "00" : e.currentTarget.value;
  expErr.classList = "error-description err-exp hidden";
  inputexpmm.classList = "";
}

function updateExpyy(e) {
  cardexpyy.innerHTML =
    e.currentTarget.value === "" ? "00" : e.currentTarget.value;
  expErr.classList = "error-description err-exp hidden";
  inputexpyy.classList = "";
}

function updateCvc(e) {
  cvctxt.innerHTML =
    e.currentTarget.value === "" ? "000" : e.currentTarget.value;
  cvcErr.classList = "error-description err-cvc hidden";
  inputcvc.classList = "";
}

function updatechangeNum() {
  const numPattern = /^(\d{4}\s?){0,3}\d{0,4}(\s\d{4}){0,3}$/;
  const value = inputCardNum.value.replace(/\s/g, "").split("");
  const firstvalue = value.slice(0, 4).join("").replace(/\s/g, "");
  const secondvalue = value.slice(4, 8).join("").replace(/\s/g, "");
  const thirdvalue = value.slice(8, 12).join("").replace(/\s/g, "");
  const fourthvalue = value.slice(12, 16).join("").replace(/\s/g, "");
  const fifthvalue = value.slice(16, 20).join("").replace(/\s/g, "");

  numErr.classList = "error-description err-num hidden";
  inputCardNum.classList = "";

  firstCardNumSet.innerHTML = firstvalue == "" ? "0000" : firstvalue;
  secondCardNumSet.innerHTML = secondvalue == "" ? "0000" : secondvalue;
  thirdCardNumSet.innerHTML = thirdvalue == "" ? "0000" : thirdvalue;
  fourthCardNumSet.innerHTML = fourthvalue == "" ? "0000" : fourthvalue;
  fifthCardNumSet.innerHTML = fifthvalue;

  if (value.length > 16) {
    spanP.style.fontSize =
      window.innderWidth > 1500
        ? "1.625rem"
        : window.innerWidth > 1024
        ? "1.425rem"
        : window.innerWidth > 700
        ? "1.425rem"
        : "1.105rem";
  } else {
    spanP.style.fontSize =
      window.innderWidth > 1500
        ? "1.85rem"
        : window.innerWidth > 1024
        ? "1.625rem"
        : window.innerWidth > 700
        ? "1.625rem"
        : "1.2rem";
  }
  if (value.length > 20) {
    numErr.textContent = "Value Limit Exceeded!";
    numErr.classList.remove("hidden");
    inputCardNum.classList = "error";
  }
}

function handleContinueButton() {
  form.reset();
  if (inputName.value == "") {
    cardName.innerHTML = inputName.value;
  }

  if (inputCardNum.value == "") {
    updatechangeNum();
  }

  if (inputexpmm.value == "") {
    cardexpmm.innerHTML = inputexpmm.value;
  }

  if (inputexpyy.value == "") {
    cardexpyy.innerHTML = inputexpyy.value;
  }

  if (inputcvc.value == "") {
    cvctxt.innerHTML = inputcvc.value;
  }

  completeContainer.classList = "complete-container hidden";
  form.classList = "";
}

function handleSubmit(e) {
  e.preventDefault();
  const numPattern = /^(\d{4}\s?){0,3}\d{0,4}(\s\d{4}){0,3}$/;
  const alphapattern = /^[A-Za-z\s!@#$%^&*()_+={}\[\]|;:'",.<>/?\\-]*$/;
  const cvcpattern = /^(|\d{3,4})$/;
  const monthPattern = /^(|(0[1-9]|1[0-2]))$/;
  const yearPattern = /^(|(0[0-9]|[1-9][0-9]))$/;

  const isNumber = numPattern.test(inputCardNum.value);
  const isNumBlank = inputCardNum.value.trim() === "";
  const isCvc = cvcpattern.test(inputcvc.value);
  const isCvcBlank = inputcvc.value.trim() === "";
  const isExpyy = yearPattern.test(inputexpyy.value);
  const isExpyyBlank = inputexpyy.value.trim() === "";
  const isExpmm = monthPattern.test(inputexpmm.value);
  const isExpmmBlank = inputexpmm.value.trim() === "";
  const isNameBlank = inputName.value.trim() === "";
  const isName = alphapattern.test(inputName.value);

  if (!isName) {
    nameErr.textContent = "wrong format, alphabets only";
    nameErr.classList = "error-description err-num";
    inputName.classList = "error";
  } else if (isNameBlank) {
    nameErr.textContent = "can't be blank";
    nameErr.classList = "error-description err-num";
    inputName.classList = "error";
  }

  if (!isNumber) {
    numErr.textContent = "wrong format, numbers only";
    numErr.classList = "error-description err-num";
    inputCardNum.classList = "error";
  } else if (isNumBlank) {
    numErr.innerHTML = "can't be blank";
    numErr.classList = "error-description err-num ";
    inputCardNum.classList = "error";
  }

  if (!isCvc) {
    cvcErr.textContent = "invalid CVC format";
    cvcErr.classList = "error-description err-cvc";
    inputcvc.classList = "error";
  } else if (isCvcBlank) {
    cvcErr.textContent = "can't be blank";
    cvcErr.classList = "error-description err-cvc";
    inputcvc.classList = "error";
  }

  if (!isExpmm) {
    expErr.textContent = "wrong mm format";
    expErr.classList = "error-description err-exp";
    inputexpmm.classList = "error";
  } else if (isExpmmBlank) {
    expErr.textContent = "can't be blank";
    expErr.classList = "error-description err-exp";
    inputexpmm.classList = "error";
  }

  if (!isExpyy) {
    expErr.textContent = "wrong year format";
    expErr.classList = "error-description err-exp";
    inputexpyy.classList = "error";
  } else if (isExpyyBlank) {
    expErr.textContent = "can't be blank";
    expErr.classList = "error-description err-exp";
    inputexpyy.classList = "error";
  }

  if (
    isCvcBlank ||
    !isCvc ||
    !isNumber ||
    isNumBlank ||
    !isExpmm ||
    isExpmmBlank ||
    !isExpyy ||
    isExpyyBlank ||
    !isName ||
    isNameBlank
  ) {
    return;
  } else {
    completeContainer.classList = "complete-container";
    form.classList = "hidden";
  }
}

//--------Event listeners---------

window.addEventListener("DOMContentLoaded", setAll);
inputName.addEventListener("keyup", updateName);
inputCardNum.addEventListener("keyup", updatechangeNum);
inputexpmm.addEventListener("keyup", updateExpmm);
inputexpyy.addEventListener("keyup", updateExpyy);
inputcvc.addEventListener("keyup", updateCvc);
formButton.addEventListener("click", handleSubmit);
