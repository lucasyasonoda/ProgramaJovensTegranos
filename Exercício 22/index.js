btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const valorInput = document.querySelector("#tabValue");

    const valorTabuada = Number(valorInput.value);

    tabuada(valorTabuada);
});

function tabuada(x){
    for(let i=1;i<=10;i++)
        console.log(`${x} x ${i} = ${(x*i)}`)  
}