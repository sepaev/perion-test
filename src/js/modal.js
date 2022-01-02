import { getRefs } from './refs';
import { actionA, actionB, actionC, actionD, actionE } from './actions';
import { actionF, actionG, actionH, actionI, actionJ } from './actions';
import { actionK, actionL, actionM, actionN, actionO, actionP } from './actions';
const actionTime = 250;
const startDelay = actionTime * 4;

const { confettiBox, cupHoist, body, modalWindow, closeButton } = getRefs();
const { fansLeft, fansRight, tagLines } = getRefs();

function closeModalWindow(e) {
  e.preventDefault();
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.removeEventListener('click', closeModalWindow);
}

function openModal() {
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.addEventListener('click', closeModalWindow);
  window.setTimeout(() => actionA(cupHoist, confettiBox), actionTime * 0);
  window.setTimeout(() => actionB(), actionTime * 1);
  window.setTimeout(() => actionC(fansLeft, fansRight), actionTime * 3);
  window.setTimeout(() => actionD(tagLines), actionTime * 4);
  actionE();
  actionF();
  actionG();
  actionH();
  actionI();
  actionJ();
  actionK();
  actionL();
  actionM();
  actionN();
  actionO();
  actionP();
}

window.setTimeout(openModal, startDelay);
