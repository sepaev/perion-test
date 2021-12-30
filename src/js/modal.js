import { getRefs } from './refs';
const { body, modalWindow, closeButton } = getRefs();

function closeModalWindow(e) {
  e.preventDefault();
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.removeEventListener('click', closeModalWindow);
  console.log('closed');
}

function openModal() {
  console.log('opened');
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.addEventListener('click', closeModalWindow);
}

window.setTimeout(openModal, 1000);
