import { getRefs } from '../refs';
export function writeTaglines() {
  const { tagLines } = getRefs();
  tagLines.forEach((text, index) => {
    window.setTimeout(() => (text.style.opacity = 1), 600 * (index + 1));
  });
}
