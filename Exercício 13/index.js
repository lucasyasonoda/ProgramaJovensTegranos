btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const qtdMin = document.querySelector("#minutes");

    const minutos = Number(qtdMin.value);
    
    valorPlano(minutos);
});

function valorPlano(min){
    let valorDefault = 50.00;
    
    if(min <= 100)
        console.log(`Valor a pagar: R$ ${valorDefault.toFixed(2)}`)
    else
        console.log(`Valor a pagar: R$ ${(valorDefault+((min-100)*2)).toFixed(2)}`)
}
