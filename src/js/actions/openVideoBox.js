import Playable from 'playable';
import { getRefs } from '../refs';
import videoFile from '../../video/video.mp4';
const { clientWidth, clientHeight } = document.documentElement;

const videoWidthHor = clientWidth * 0.595;
const videoHeightHor = videoWidthHor * 0.56;
const videoHeightVer = clientHeight * 0.668;
const videoWidthVer = videoHeightVer * 1.781;

let videoWidth, videoHeight;
if (videoHeightHor <= clientHeight) {
  videoWidth = videoWidthHor;
  videoHeight = videoHeightHor;
} else {
  videoWidth = videoWidthVer;
  videoHeight = videoHeightVer;
}
console.log('videoWidth', videoWidth);
console.log('videoHeight', videoHeight);
const config = {
  width: videoWidth,
  height: videoHeight,
  src: videoFile,
  preload: 'metadata',
};
console.log(document);
export function openVideoBox(e) {
  const { videoBox, videoBoxOverlay, hotspot, videoBoxContent } = getRefs();
  e.preventDefault();
  videoBox.classList.toggle('isOpen');
  hotspot.style.opacity = 0;
  hotspot.style.pointerEvents = 'none';
  videoBoxOverlay.style.pointerEvents = 'initial';

  const player = Playable.create(config);
  player.attachToElement(videoBoxContent);
}
