btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const salarioInput = document.querySelector("#salario");

    const salario = Number(salarioInput.value);


    verificaSalario(salario);
});

function verificaSalario(s){  
    aumentoPercent=0;
    if(s <= 999.00){
        aumentoPercent = 0.20;    
    }else if(s >= 1000.00 && s <= 2999.00){
        aumentoPercent = 0.15;
    }else if(s >= 3000.00 && s <= 7999.00){
        aumentoPercent = 0.10;
    }else if(s >= 8000.00){
        aumentoPercent = 0.05;
    }
    const novoSalario = s*(aumentoPercent+1);
    const aumento = novoSalario-s;
    console.log(`Novo salário = R$ ${novoSalario.toFixed(2)}`);
    console.log(`Aumento = R$ ${aumento.toFixed(2)}`);
    console.log(`Porcentagem = ${aumentoPercent*100} %`);

}