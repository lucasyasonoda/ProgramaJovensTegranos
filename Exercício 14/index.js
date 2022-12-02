btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const priceUnd = document.querySelector("#priceUnd");
    const amount   = document.querySelector("#amount");
    const money    = document.querySelector("#money");

    const preco    = Number(priceUnd.value);
    const qtd      = Number(amount.value);
    const dinheiro = Number(money.value);

    verificaTroco(preco, qtd, dinheiro);
}); 

function verificaTroco(preco, qtd, dinheiro){
    troco = dinheiro-(preco*qtd)
    if(dinheiro < (preco*qtd)){
        console.log(`DINHEIRO INSUFICIENTE. FALTAM ${(troco*-1).toFixed(2)} REAIS`)
    } else if (dinheiro >= (preco*qtd)){
        console.log(`TROCO = ${troco.toFixed(2)}`)
    }
}