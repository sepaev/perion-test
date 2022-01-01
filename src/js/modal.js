import { getRefs } from './refs';
import {
  actionA,
  actionB,
  actionC,
  actionD,
  actionE,
  actionF,
  actionG,
  actionH,
  actionI,
  actionJ,
  actionK,
  actionL,
  actionM,
  actionN,
  actionO,
  actionP,
} from './actions';
const startDelay = 1000;
const actionTime = 250;

const { confettiBox, cupHoist, body, modalWindow, closeButton } = getRefs();

function closeModalWindow(e) {
  e.preventDefault();
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.removeEventListener('click', closeModalWindow);
  console.log('closed');
}

function openModal() {
  console.log('opened');
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.addEventListener('click', closeModalWindow);
  window.setTimeout(() => actionA(cupHoist, confettiBox), actionTime * 0);
  window.setTimeout(() => actionB(), actionTime * 1);
  actionC();
  actionD();
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
