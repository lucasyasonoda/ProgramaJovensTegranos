btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const cnpjInput = document.querySelector("#cnpj");

    let _cnpj = cnpjInput.value;

    verificaCNPJ(_cnpj);
});

function verificaCNPJ(_cnpj){
    let numeros   = _cnpj.split("-")[0].replace(/[.|\/]/g, "");
    let digitos   = _cnpj.split("-")[1];
    let dig1 = verificacaoDig1(numeros);
    let dig2 = verificacaoDig2(numeros + digitos[0]);   
    let d1, d2;
    let vDig1, vDig2;
    if(dig1 == 0 || dig1 == 1) 
        if(digitos[0] == 0){
            d1=true;
        }
    if(dig1 >= 2 && dig1 <=10){
        vDig1 = 11 - dig1;
        if(digitos[0] == vDig1){
            d1=true;
        }
    }else
        d1 = false;
    if(dig2 == 0 || dig2 == 1) 
        if(digitos[1] == 0){
            d2=true;
        }
    if(dig2 >= 2 && dig2 <=10){
        vDig2 = 11 - dig2;
        if(digitos[1] == vDig1){
            d2=true;
        }
    }else
        d2 = false;
    
    if(d1 == true && d2 == true)
        console.log("Saída: Válida");
    else    
    console.log("Saída: Inválida");
}


function verificacaoDig1(numeros){
    let soma=0;
    let multi=5;
    for(let i = 0;i < numeros.length;i++){
        soma += (numeros[i]*multi);
        if(multi == 2)
            multi = 9;
        else    
            multi--;
    }
    let mod = soma % 11;
    return mod;
}

function verificacaoDig2(numeros){
    let soma=0;
    let multi=6;
    for(let i = 0;i < numeros.length;i++){
        soma += (numeros[i]*multi);
        if(multi == 2)
            multi = 9;
        else
            multi--;
    }
    let mod = soma%11;
    return mod;
}


