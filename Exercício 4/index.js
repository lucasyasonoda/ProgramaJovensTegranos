btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const precoInput    = document.querySelector("#precoUnd");
    const qtdInput      = document.querySelector("#qtd");
    const dinheiroInput = document.querySelector("#dinheiro");

    const priceUnd = precoInput.value;
    const qtd      = qtdInput.value;
    const money    = dinheiroInput.value;

    devolveTroco(priceUnd, qtd, money);    
});

function devolveTroco(preco, qtd, money){
    const troco = money - (preco*qtd);
    console.log(`TROCO = ${troco.toFixed(2)}`);
}