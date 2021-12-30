export const getRefs = () => {
  return {
    body: document.querySelector('body'),
    modalWindow: document.querySelector('.modal'),
    closeButton: document.querySelector('.modal__close-button'),
  };
};
