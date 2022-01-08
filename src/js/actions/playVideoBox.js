import { getRefs } from '../refs';

export function playVideoBox(e, player) {
  const { videoBoxPlayBtn } = getRefs();
  e.preventDefault();
  console.dir(player);
  player.play();
  videoBoxPlayBtn.style.pointerEvents = 'none';
  videoBoxPlayBtn.style.opacity = 0;
  videoBoxPlayBtn.removeEventListener('click', e => playVideoBox(e, player));
}
