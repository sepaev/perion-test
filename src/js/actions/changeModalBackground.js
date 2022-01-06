import { confettiPosipion } from '../../options/confettiPosition';
import { getRefs } from '../refs';

export function changeModalBackground() {
  const { cupHoist, confettiBox, modalWindow } = getRefs();
  cupHoist.style.display = 'none';
  console.log(confettiBox);
  confettiBox.style.display = 'none';
  modalWindow.classList.add('afterAnimation');
}
