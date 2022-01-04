import { getRefs } from './refs';
import { actionA, actionB, actionC, actionD, actionE } from './actions';
import { actionF, actionG, actionH, actionI, actionJ } from './actions';
import { actionK, actionL, actionM, actionN, actionO, actionP } from './actions';
const actionTime = 250;
const startDelay = actionTime * 0;
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
  let delayAction = 0; //0
  window.setTimeout(() => actionA(cupHoist, confettiBox), delayAction); // 0 + 500 => 500
  delayAction += actionTime; //250
  window.setTimeout(() => actionB(), delayAction); // 250 + 2000 => 2250
  delayAction += actionTime * 2; //750
  window.setTimeout(() => actionC(fansGate), delayAction); //750 + 1500 => 2250
  delayAction += actionTime * 4; //1750
  window.setTimeout(() => actionD(tagLines), delayAction); // 1750 + 1800 => 3550
  delayAction += actionTime * 8; //3750
  window.setTimeout(() => actionE(teams), delayAction); // 3750 + 1000 => 4750
  delayAction += actionTime * 8; //4750
  window.setTimeout(() => actionF(fansGate, tagLines, teams), delayAction); // 5750 + ? => 4750
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
