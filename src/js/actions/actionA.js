import { confettiPosipion } from '../../options/confettiPosition';

export function actionA(cupHoist, confettiBox) {
  cupHoist.style.bottom = '-15px';
  confettiPosipion.map(({ left = null, right = null, bottom, rotate }, index) => {
    const bottomStartPosition = bottom - window.screen.height * 2.1;
    const confetti = document.createElement('li');
    confetti.id = index;
    confetti.className = 'confetti__item';
    if (left) confetti.style.left = `${left}px`;
    if (right) confetti.style.right = `${right}px`;
    confetti.style.bottom = bottomStartPosition + 'px';
    confettiBox.insertAdjacentElement('beforebegin', confetti);
  });
}
