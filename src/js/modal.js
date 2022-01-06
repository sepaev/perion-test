import { getRefs } from './refs';
import {
  moveCup,
  createConfetti,
  changeModalBackground,
  moveConfetti,
  moveFansGate,
  writeTaglines,
  teamLogoAnimation,
  openFanGates,
} from './actions';
const { body, modalWindow, closeButton } = getRefs();
const actionTime = 250;
const startDelay = actionTime * 0;

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
  window.setTimeout(moveCup, delayAction); // 0 + 500 => 500
  window.setTimeout(createConfetti, delayAction + 1); // 1 + 0 => 1
  delayAction += actionTime; //250
  window.setTimeout(moveConfetti, delayAction); // 250 + 2000 => 2250
  delayAction += actionTime * 2; //750
  window.setTimeout(moveFansGate, delayAction); //750 + 1500 => 2250
  delayAction += actionTime * 4; //1750
  window.setTimeout(writeTaglines, delayAction); // 1750 + 1800 => 3550
  delayAction += actionTime * 8; //3750
  window.setTimeout(teamLogoAnimation, delayAction); // 3750 + 1000 => 4750
  window.setTimeout(changeModalBackground, delayAction + 1); // 3750 + 1000 => 4750
  delayAction += actionTime * 8; //4750
  window.setTimeout(openFanGates, delayAction); // 5750 + ? => 4750
}

window.setTimeout(openModal, startDelay);
