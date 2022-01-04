export const getRefs = () => {
  return {
    ______DOM: '_______________this is just divider',
    body: document.querySelector('body'),
    modalWindow: document.querySelector('.modal'),
    closeButton: document.querySelector('.modal__close-button'),
    confettiBox: document.querySelector('.confetti__list'),
    ______MOVING_ELEMENTS: '_______________this is just divider',
    cupHoist: document.querySelector('.cupHoist__image'),
    confettiAll: document.querySelectorAll('.confetti__item'),
    fansGate: document.querySelectorAll('.fans__wrapper'),
    // fansRight: document.querySelector('.fans__wrapper.right-side'),
    tagLines: document.querySelectorAll('.versus__tagline-p'),
    teams: document.querySelectorAll('.versus__team-svg'),
  };
};
