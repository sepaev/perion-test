import { getRefs } from './refs';
import { actionA, actionB, actionC, actionD, actionE } from './actions';
import { actionF, actionG, actionH, actionI, actionJ } from './actions';
import { actionK, actionL, actionM, actionN, actionO, actionP } from './actions';
const actionTime = 250;
const startDelay = actionTime * 4;

const { confettiBox, cupHoist, body, modalWindow, closeButton } = getRefs();
const { teams, fansGate, tagLines } = getRefs();

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
  window.setTimeout(() => actionA(cupHoist, confettiBox), actionTime * 0); // 0 + 500 => 500
  window.setTimeout(() => actionB(), actionTime * 1); // 250 + 2000 => 2250
  window.setTimeout(() => actionC(fansGate), actionTime * 3); //750 + 1500 => 2250
  window.setTimeout(() => actionD(tagLines), actionTime * 7); // 1750 + 1800 => 3550
  window.setTimeout(() => actionE(teams), actionTime * 15); // 3750 + 500
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
