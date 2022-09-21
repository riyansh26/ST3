const submitBtn = document.querySelector('.btn');
const sun = document.getElementById('sun')
const earth = document.getElementById('earth')
const moon = document.getElementById('moon')
const mercury = document.getElementById('mercury')
const venus = document.getElementById('venus')
const mars = document.getElementById('mars')
const jupiter = document.getElementById('jupiter')
const saturn = document.getElementById('saturn')
const urnaus = document.getElementById('uranus')
const neptune = document.getElementById('neptune')
const pluto = document.getElementById('pluto')


const calcW8 = () => {
    const wght = document.querySelector('.input').value;
    sun.innerHTML = `${(wght*27.01).toFixed(2)}Kg`;
    moon.innerHTML = `${(wght/6).toFixed(2)}Kg`;
    mercury.innerHTML = `${(wght*.38).toFixed(2)}Kg`;
    earth.innerHTML = `${wght}Kg`;
    venus.innerHTML = `${(wght*.91).toFixed(2)}Kg`;
    mars.innerHTML = `${(wght*.38).toFixed(2)}Kg`;
    jupiter.innerHTML = `${(wght*2.34).toFixed(2)}Kg`;
    saturn.innerHTML = `${(wght*1.06).toFixed(2)}Kg`;
    urnaus.innerHTML = `${(wght*.92).toFixed(2)}Kg`;
    neptune.innerHTML = `${(wght*1.19).toFixed(2)}Kg`;
    pluto.innerHTML = `${(wght*.06).toFixed(2)}Kg`;
}

submitBtn.addEventListener('click', calcW8);