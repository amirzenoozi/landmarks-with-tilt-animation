import UniversalTilt from 'universal-tilt.js';
import "./scss/style.scss";

function init() {
    const elems = document.querySelectorAll('.stamp');
    const universalTilt = new UniversalTilt(elems);

    console.log(universalTilt);
}

init();