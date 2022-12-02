btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const n1 = document.querySelector("#number1");
    const n2 = document.querySelector("#number2");

    const numero1 = Number(n1.value);
    const numero2 = Number(n2.value);

    verificaMultiplos(numero1, numero2);
});

function verificaMultiplos(a, b){
    if(a % b == 0 || b % a == 0)
        console.log(`São múltiplos.`)    
}