import { getRefs } from '../refs';

export function closeModalWindow(e) {
  const { modalWindow, body, closeButton } = getRefs();
  e.preventDefault();
  modalWindow.classList.toggle('isOpen');
  body.classList.toggle('modalIsOpen');
  closeButton.removeEventListener('click', closeModalWindow);
}
