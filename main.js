let handHora = document.querySelector('#hour');
let handMinutos = document.querySelector('#minute');
let handSegundos = document.querySelector("#second");

let digitalHora = document.querySelector('#horas');
let digitalMinutos = document.querySelector('#minutos');
let digitalSegundos = document.querySelector("#segundos");
let ampm = document.querySelector('#ampm');

setInterval(() => {
    let data= new Date();
    let hour = data.getHours()*360;
    let minute = data.getMinutes()*6;
    let second = data.getSeconds()*6;

    handHora.style.transform = `rotateZ(${hour + minute/12}deg)`;
    handMinutos.style.transform = `rotateZ(${minute}deg)`;
    handSegundos.style.transform = `rotateZ(${second}deg)`;

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    let amORpm = digitalHora > 12 ? "PM" : "AM";

    if(digitalHora > 12) {
        digitalHora -= 12;
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo <10 ? "0" + segundo : segundo;

    digitalHora.innerHTML = hora;
    digitalMinutos.innerHTML = minuto;
    digitalSegundos.innerHTML = segundo;
    ampm.innerHTML= amORpm;
}, 1000);