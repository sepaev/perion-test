import { getRefs } from '../refs';

export function moveFansGate() {
  const [fansLeft, fansRight] = getRefs().fansGate;
  fansLeft.style.transform = 'translate(-4%, 0%)';
  fansRight.style.transform = 'translate(12%, 0%)';
}
