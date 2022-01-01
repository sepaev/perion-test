export const getRefs = () => {
  return {
    ______DOM: null,
    body: document.querySelector('body'),
    modalWindow: document.querySelector('.modal'),
    closeButton: document.querySelector('.modal__close-button'),
    ______MOVING_ELEMENTS: null,
    cupHoist: document.querySelector('.modal__image-cup'),
    confettiBox: document.querySelector('.modal__confetti'),
    confettiAll: document.querySelectorAll('.modal__confetti-piece'),
  };
};
