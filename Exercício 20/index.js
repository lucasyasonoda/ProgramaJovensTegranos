btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const nInicialInput = document.querySelector("#numberInicial");
    const nFinalInput   = document.querySelector("#numberFinal");

    const nI = Number(nInicialInput.value);
    const nF = Number(nFinalInput.value);

    somaIntervalo(nI, nF);
});

function somaIntervalo(a, b){
    let soma=0;
    for(let i=a;i<=b;i++)
        soma+=i;
    
    console.log(`Resultado: ${soma}`)
}