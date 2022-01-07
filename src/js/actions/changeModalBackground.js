import { confettiPosipion } from '../../options/confettiPosition';
import { getRefs } from '../refs';

export function changeModalBackground() {
  const { cupHoist, confettiBox, modalWindow, background, dashboard } = getRefs();
  cupHoist.style.display = 'none';
  console.log(confettiBox);
  confettiBox.style.display = 'none';
  modalWindow.classList.add('afterAnimation');
  background.style.opacity = 1;
  dashboard.style.opacity = 1;
}
