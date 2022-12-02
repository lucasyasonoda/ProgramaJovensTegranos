btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const timeInput = document.querySelector("#sec");

    const tempo = timeInput.value;

    data(tempo);
});

function data(temp){
    dataObj = new Date(temp*1000);
    horas    = dataObj.getUTCHours();
    minutos  = dataObj.getUTCMinutes();
    segundos = dataObj.getUTCSeconds();

    timeString = horas.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');
    console.log(timeString);
}