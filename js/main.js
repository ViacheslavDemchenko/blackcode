const lamp = document.querySelector('.lamp');
const lampLightBig = document.querySelector('.lamp-light');
const lampLightSmall = document.querySelector('.lamp-light-small');
const lampLightMain = document.querySelector('.lamp-light-main');


lamp.addEventListener('mouseover', () => {
    console.log(lamp);

    lampLightMain.classList.remove('lamp-light-main--off');
    lampLightBig.classList.remove('lamp-light--off');
    lampLightSmall.classList.remove('lamp-light-small--off');

    lampLightMain.classList.add('lamp-light-main--on');
    lampLightBig.classList.add('lamp-light--on');
    lampLightSmall.classList.add('lamp-light-small--on');
});

lamp.addEventListener('mouseleave', () => {
    console.log(lamp);

    lampLightMain.classList.remove('lamp-light-main--on');
    lampLightBig.classList.remove('lamp-light--on');
    lampLightSmall.classList.remove('lamp-light-small--on');

    lampLightMain.classList.add('lamp-light-main--off');
    lampLightBig.classList.add('lamp-light--off');
    lampLightSmall.classList.add('lamp-light-small--off');
});
