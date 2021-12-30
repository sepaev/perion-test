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

const { body, modalWindow, closeButton } = getRefs();

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
  actionA();
  actionB();
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

window.setTimeout(openModal, 1000);
