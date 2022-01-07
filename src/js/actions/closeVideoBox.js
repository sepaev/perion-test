import { getRefs } from '../refs';

export function closeVideoBox(e) {
  const { videoBox, videoBoxOverlay, hotspot, videoBoxContent } = getRefs();
  e.preventDefault();
  if (
    e.target.className === 'videoBox__overlay' ||
    e.target.className === 'videoBox__close-button' ||
    e.target.className === 'videoBox__close-svg'
  ) {
    videoBox.classList.toggle('isOpen');
    hotspot.style.opacity = 1;
    hotspot.style.pointerEvents = 'initial';
    videoBoxOverlay.style.pointerEvents = 'none';
    videoBoxContent.innerHTML = '';
  }
}
