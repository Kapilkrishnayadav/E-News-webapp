const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const cross = popup.querySelector(".popup__close");

function openPopup() {
  overlay.addEventListener("click", closePopup);
  cross.addEventListener("click", closePopup);
  overlay.classList.add("overlay_visible");
  popup.classList.add("popup_visible");
}

openPopup();

function closePopup() {
  overlay.classList.remove("overlay_visible");
  popup.classList.remove("popup_visible");
  document.body.classList.remove("body_blur");
  overlay.removeEventListener("click", closePopup);
  cross.removeEventListener("click", closePopup);
}

// Опросник
const quizes = document.querySelectorAll(".quiz");
const questions = document.querySelectorAll(".popup__content");

quizes.forEach((quiz) => {
  const options = quiz.querySelectorAll(".quiz__input");
  const nextButton = quiz.querySelector(".popup__button");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      nextButton.disabled = false;
    });
  });
});

questions.forEach((question, i) => {
  const button = document.getElementById(`popupButton${i + 1}`);
  button.addEventListener("click", () => {
    question.classList.remove("question-visible");
    if (questions[i + 1]) {
      questions[i + 1].classList.add("question-visible");
    }
  });
});
