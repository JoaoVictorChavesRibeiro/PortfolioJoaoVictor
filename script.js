let barra = document.getElementById('scroll');
let altura = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let barraAltura = (window.scrollY / altura) * 100;
    barra.style.height = barraAltura + "%";
}

const typingText = document.querySelector('#typing');
const textArray = typingText.textContent.split('');
typingText.textContent = '';

let typingIndex = 0;

function type() {
    if (typingIndex < textArray.length) {
        typingText.textContent += textArray[typingIndex];
        typingIndex++;
        setTimeout(type, 100);
    }
}

type();

function mouseScript(event) {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', rodarMouse());
    i.style.setProperty('--y', rodarMouse());

    document.body.appendChild(i);

    setTimeout(()=> {
        document.body.removeChild(i)
    }, 2000);
}

function rodarMouse() {
    return `${Math.random() * 400 - 200}px`
}

document.addEventListener('mousemove', mouseScript)