const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
var intervalID;
let tempo = new Date();

function inicializar() {
    tempo.setHours(0, 0, 0);
    relogio.textContent = formatarTempo(tempo);
}

function formatarTempo(date) {
    let formatado = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
    return formatado;
}

function addSeconds(date, seconds) {
    date.setSeconds(date.getSeconds() + seconds)
    return formatarTempo(date);
}

iniciar.addEventListener('click', function (event) {
    relogio.style.color = '#000'
    intervalID = setInterval(function () {
        relogio.textContent = addSeconds(tempo, 1)
    }, 1000)

})

pausar.addEventListener('click', function (event) {
    clearInterval(intervalID)
    relogio.style.color = '#f00'
})

zerar.addEventListener('click', function (event) {
    relogio.style.color = '#000'
    clearInterval(intervalID);
    tempo.setHours(0, 0, 0);
    relogio.textContent = formatarTempo(tempo)
})

inicializar();
