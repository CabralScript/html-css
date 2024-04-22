const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hora = dateToday.getHours()
    let Mi = dateToday.getMinutes()
    let Se = dateToday.getSeconds()

     if(hora < 10) hora = '0' + hora 

     if (Mi < 10) Mi = '0' + Mi

     if (Se < 10) Se = '0' + Se

    horas.textContent = hora
    minutos.textContent = Mi
    seg.textContent = Se 
})
