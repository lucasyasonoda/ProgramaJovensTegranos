btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const cnpjInput = document.querySelector("#cnpj");

    let _cnpj = cnpjInput.value;
    let cnpj  = _cnpj.split("-")[0].replace(/[.|\/]/g, "");
    let dig   = _cnpj.split("-")[1]; 

    validaCnpj(_cnpj);
    primeiroVerDig(cnpj);
    segundoVerDig(cnpj);
});

function primeiroVerDig(cnpj){
    let peso = 2;
    let resultado = 0;
    for(let i=cnpj.length - 1;i > 0; i--){
        resultado += cnpj[i] * peso;        
        peso = (peso > 9 ? 2: peso++)
    }
    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);
    return resultado;
}

function segundoVerDig(cnpj){
    let peso = 2;
    let resultado = 0;
    for(let i=cnpj.length-1;i > 0; i--){
        resultado += cnpj[i] * peso;        
        peso = (peso > 9 ? 2: peso++)
    }
    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);
    return resultado;
}

function validaCnpj(_cnpj, cnpj, dig){
    if(primeiroVerDig(cnpj) != dig[0])
        return "Saída: Inválido";
    if(segundoVerDig(cnpj+""+dig[1]) != dig[0])
        return "Saída: Inválido";
    else
        return "Saída: Válido";

}