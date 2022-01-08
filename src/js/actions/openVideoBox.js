import Playable from 'playable';
import { getRefs } from '../refs';

import { playVideoBox } from './';
import { getConfigsForPlayable } from '../getConfigsForPlayable';

export function openVideoBox(e) {
  e.preventDefault();
  const [config, theme] = getConfigsForPlayable();
  const { videoBox, videoBoxOverlay, hotspot, videoBoxContent, videoBoxCloseBtn, videoBoxPlayBtn } =
    getRefs();
  videoBox.classList.toggle('isOpen');
  hotspot.style.opacity = 0;
  hotspot.style.pointerEvents = 'none';
  videoBoxOverlay.style.pointerEvents = 'initial';
  videoBoxCloseBtn.style.pointerEvents = 'initial';
  videoBoxPlayBtn.style.pointerEvents = 'initial';
  videoBoxPlayBtn.style.opacity = 1;

  const player = Playable.create(config, theme);
  player.attachToElement(videoBoxContent);
  player.hideOverlay();
  videoBoxPlayBtn.addEventListener('click', e => playVideoBox(e, player));
}
