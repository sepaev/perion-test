export const getRefs = () => {
  return {
    ______DOM: '___________________________this is just divider',
    body: document.querySelector('body'),
    modalWindow: document.querySelector('.modal'),
    closeButton: document.querySelector('.modal__close-button'),
    hotspot: document.querySelector('.modal__watch-button'),
    videoBox: document.querySelector('.videoBox'),
    videoBoxOverlay: document.querySelector('.videoBox__overlay'),
    videoBoxContainer: document.querySelector('.videoBox__video-container'),
    videoBoxContent: document.querySelector('.videoBox__video-content'),
    videoBoxCloseBtn: document.querySelector('.videoBox__close-button'),
    videoBoxPlayBtn: document.querySelector('.videoBox__play-button'),
    confettiBox: document.querySelector('.confetti__list'),
    background: document.querySelector('.background'),
    dashboard: document.querySelector('.dashboard'),
    ______MOVING_ELEMENTS: '_______________this is just divider',
    cupHoist: document.querySelector('.cupHoist__image'),
    confettiAll: document.querySelectorAll('.confetti__item'),
    fansGate: document.querySelectorAll('.fans__wrapper'),
    tagLines: document.querySelectorAll('.versus__tagline-p'),
    teams: document.querySelectorAll('.versus__team-svg'),
  };
};
