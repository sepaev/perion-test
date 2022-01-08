import { getRefs } from '../refs';

export function closeVideoBox(e) {
  const { videoBox, videoBoxOverlay, hotspot, videoBoxContent, videoBoxCloseBtn } = getRefs();
  e.preventDefault();
  console.dir(e.target);
  if (
    e.target.className === 'videoBox__overlay' ||
    e.target.className === 'videoBox__close-button' ||
    e.target.className === 'videoBox__close-svg'
  ) {
    videoBox.classList.toggle('isOpen');
    hotspot.style.opacity = 1;
    hotspot.style.pointerEvents = 'initial';
    videoBoxOverlay.style.pointerEvents = 'none';
    videoBoxCloseBtn.style.pointerEvents = 'none';
    videoBoxContent.innerHTML = '';
  }
}
