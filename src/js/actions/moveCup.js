import { confettiPosipion } from '../../options/confettiPosition';
import { getRefs } from '../refs';

export function moveCup() {
  const { cupHoist } = getRefs();
  cupHoist.style.bottom = '-15px';
}
