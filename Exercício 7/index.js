btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const distInput = document.querySelector("#dist");
    const combInput = document.querySelector("#comb");

    const dist = distInput.value;
    const comb = combInput.value;

    consumoMedio(dist, comb);
});

function consumoMedio(dist, comb){
    const cMedio = dist/comb;
    console.log(`Consumo médio = ${cMedio.toFixed(3)}`);
}