import { getRefs } from './refs';
import { openVideoBox, closeVideoBox, closeModalWindow } from './actions';
import { openModal } from './openModal';
const { closeButton, hotspot, videoBoxOverlay } = getRefs();
const startDelay = 1000;

closeButton.addEventListener('click', closeModalWindow);
hotspot.addEventListener('click', openVideoBox);
videoBoxOverlay.addEventListener('click', closeVideoBox);

window.setTimeout(openModal, startDelay);
