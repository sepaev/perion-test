import { getRefs } from './refs';
import {
  moveCup,
  createConfetti,
  changeModalBackground,
  moveConfetti,
  closeFansGate,
  writeTaglines,
  animateTeamLogo,
  openFanGates,
} from './actions';
const { body, modalWindow } = getRefs();
const actionTime = 250;

export function openModal() {
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  let delayAction = 0; //0
  window.setTimeout(moveCup, delayAction); // 0 + 500 => 500
  window.setTimeout(createConfetti, delayAction + 1); // 1 + 0 => 1
  delayAction += actionTime; //250
  window.setTimeout(moveConfetti, delayAction); // 250 + 2000 => 2250
  delayAction += actionTime * 2; //750
  window.setTimeout(closeFansGate, delayAction); //750 + 1500 => 2250
  delayAction += actionTime * 4; //1750
  window.setTimeout(writeTaglines, delayAction); // 1750 + 1800 => 3550
  delayAction += actionTime * 8; //3750
  window.setTimeout(animateTeamLogo, delayAction); // 3750 + 1000 => 4750
  window.setTimeout(changeModalBackground, delayAction + 1); // 3750 + 1000 => 4750
  delayAction += actionTime * 8; //4750
  window.setTimeout(openFanGates, delayAction); // 5750 + ? => 4750
}
