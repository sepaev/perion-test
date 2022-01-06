import { confettiPosipion } from '../../options/confettiPosition';
import { getRefs } from '../refs';

export function createConfetti() {
  const { confettiBox } = getRefs();
  confettiPosipion.map(({ left = null, right = null, bottom, rotate }, index) => {
    const bottomStartPosition = bottom - window.screen.height * 2.1;
    const confetti = document.createElement('li');
    confetti.id = index;
    confetti.className = 'confetti__item';
    if (left) confetti.style.left = `${left}px`;
    if (right) confetti.style.right = `${right}px`;
    confetti.style.bottom = bottomStartPosition + 'px';
    confettiBox.appendChild(confetti);
  });
}
