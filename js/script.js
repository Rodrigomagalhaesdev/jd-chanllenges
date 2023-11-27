const form = document.querySelector("form");
const inputField = document.querySelectorAll(".required");
const msgError = document.querySelectorAll(".data-required");
const emailRegex = /^\w+([-+,']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const confirmModalBtn = document.getElementById("confirm-modal");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.getElementById("fade");
const nameClient = document.querySelector("#modal-header");
const passwordIconView = document.querySelector(".fa-eye-slash");
const passwordInputView = document.querySelector("#password");
const loadingContainer = document.querySelector(".container-loading");

const showLoading = () => {
  loadingContainer.style.display = "flex";
};

const hideLoading = () => {
  loadingContainer.style.display = "none";
};

const setError = (index) => {
  inputField[index].style.border = "1px solid #db2b00";
  inputField[index].style.boxShadow = " 0px 2px 8px 0px rgba(219,43,0,0.2)";
  msgError[index].style.display = "block";
};

const removeError = (index) => {
  inputField[index].style.border = "";
  inputField[index].style.boxShadow = "";
  msgError[index].style.display = "none";
};

const nameValidate = () => {
  if (inputField[0].value.length < 5) {
    setError(0);
    return false;
  } else {
    removeError(0);
    nameClient.textContent = "Bem-vindo(a), " + inputField[0].value;
    return true;
  }
};

const emailValidate = () => {
  if (!emailRegex.test(inputField[1].value)) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
};

const passwordValidate = () => {
  if (inputField[2].value.length < 5) {
    setError(2);
    return false;
  } else {
    removeError(2);
    return true;
  }
};

const toggleModal = () => {
  showLoading();

  setTimeout(() => {
    hideLoading();
    [modal, fade].forEach((element) => element.classList.toggle("hide"));
  }, 2000);
};

const checkModal = [closeModalBtn, fade].forEach((element) => {
  element.addEventListener("click", () => toggleModal());
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (true) {
    const nameValid = nameValidate();
    const emailValid = emailValidate();
    const passwordValid = passwordValidate();

    if (nameValid && emailValid && passwordValid) {
      toggleModal();
    }
  }
});