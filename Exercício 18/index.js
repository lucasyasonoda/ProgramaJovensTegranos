btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const cf = document.querySelector("#tempChar");
    const temp = document.querySelector("#temp");

    const tempChar    = cf.value;
    const temperatura = Number(temp.value);

    calcTemp(tempChar, temperatura);
});

function calcTemp(ch, temp){
    
    
    if(ch === "C"){
        const tempF = (temp*(9/5)) + 32;
        console.log(`Temperatura equivalente em Fahrenheit: ${tempF.toFixed(2)}`)
    } else if(ch === "F"){
        const tempC = (temp-32)*(5/9);
        console.log(`Temperatura equivalente em Celsius: ${tempC.toFixed(2)}`)
    }

}