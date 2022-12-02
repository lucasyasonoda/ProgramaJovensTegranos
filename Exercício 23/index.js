btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const n1Input = document.querySelector("#number1");
    const n2Input = document.querySelector("#number2");

    const n1 = Number(n1Input.value);
    const n2 = Number(n2Input.value);

    somaImpares(n1, n2);
});

function somaImpares(a, b){
    soma=0;
    for(let i=a;i<b;i++)
        if(i%2 != 0)
            soma+=i;

    console.log(`SOMA DOS ÍMPARES = ${soma}`);
}