export function actionD(tags) {
  tags.forEach((text, index) => {
    window.setTimeout(() => (text.style.opacity = 1), 600 * (index + 1));
  });
}
