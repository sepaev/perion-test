export const getRefs = () => {
  return {
    ______DOM: null,
    body: document.querySelector('body'),
    modalWindow: document.querySelector('.modal'),
    closeButton: document.querySelector('.modal__close-button'),
    confettiBox: document.querySelector('.modal__confetti'),
    ______MOVING_ELEMENTS: null,
    cupHoist: document.querySelector('.modal__image-cup'),
    confettiAll: document.querySelectorAll('.modal__confetti-piece'),
    fansLeft: document.querySelector('.modal__fans-wrapper.left-side'),
    fansRight: document.querySelector('.modal__fans-wrapper.right-side'),
  };
};
