function time(){
    var horas = document.getElementById('horas')
    var minutos = document.getElementById('minutos')
    var seg = document.getElementById('segundos')
    
    var data = new Date()
    var hr = data.getHours()
    var mi = data.getMinutes()
    var gun = data.getSeconds()

    if(hr < 10) hr = '0' + hr 

     if (mi < 10) mi = '0' + mi

     if (gun < 10) gun = '0' + gun

    horas.textContent = hr
    minutos.textContent = mi
    seg.textContent = gun
}
setInterval(time, 1000)