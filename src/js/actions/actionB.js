import { getRefs } from '../refs';
import { confettiPosipion } from '../../options/confettiPosition';

export function actionB() {
  const { confettiAll } = getRefs();
  confettiPosipion.map(({ bottom, rotate }, index) => {
    confettiAll[index].style.bottom = bottom + 'px';
    confettiAll[index].style.transform = `rotate(${rotate}deg)`;
  });
}
