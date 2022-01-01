import { confettiPosipion } from '../../options/confettiPosition';

export function actionA(cupHoist, confettiBox) {
  cupHoist.style.bottom = '-15px';
  confettiPosipion.map(({ left = null, right = null, bottom, rotate }, index) => {
    const bottomStartPosition = bottom - window.screen.height * 2.1;
    const confetti = document.createElement('li');
    confetti.id = index;
    confetti.className = 'modal__confetti-piece';
    if (left) confetti.style.left = `${left}px`;
    if (right) confetti.style.right = `${right}px`;
    // confetti.style.transform = `rotate(${rotate}deg)`;
    confetti.style.bottom = bottomStartPosition + 'px';
    confettiBox.insertAdjacentElement('beforebegin', confetti);
  });
}
//1 конфетишка 553*632
//1 ряд
// кусок 1 (выше низа на 15px  лево 15px поворот 0 )
// кусок 2 (ниже низа на 85px  лево 510px поворот 0 )
// кусок 3 (выше низа на 15px  право 458px поворот 0 )
// кусок 4 (ниже низа на 160px право 0px поворот 0 )

//2 ряд
// кусок 1 (выше низа на 470px за лево 18px поворот 180 )
// кусок 2 (выше низа на 420px лево 504px поворот -90 )
// кусок 3 (выше низа на 555px право 435px поворот -30 )
// кусок 4 (выше низа на 419px за право 57px поворот -90 )

//3 ряд
// кусок 1 (выше низа на 1006px лево 15px поворот 0 )
// кусок 2 (выше низа на 933px лево 510px поворот 0 )
// кусок 3 (выше низа на 1009px право 458px поворот 0 )
// кусок 4 (выше низа на 834px право 0px поворот 0 )

//4 ряд
// кусок 1 (выше низа на 1464px за лево 16px поворот 180 )
// кусок 2 (выше низа на 1414px лево 504px поворот -90 )
// кусок 3 (выше низа на 1542px право 425px поворот -30 )
// кусок 4 (выше низа на 1412px за право 90px поворот -90 )

// outerHeight: 1010
// outerWidth: 1680
// innerHeight: 541
// innerWidth: 2100
// screen: Screen
// availHeight: 1010
// availLeft: 0
// availTop: 0
// availWidth: 1680
// colorDepth: 24
// height: 1050
// pixelDepth: 24
// width: 1680
