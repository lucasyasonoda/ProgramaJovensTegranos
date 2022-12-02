btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const grade1 = document.querySelector("#nota1");
    const grade2 = document.querySelector("#nota2");

    const nota1 = Number(grade1.value);
    const nota2 = Number(grade2.value);

    verificaStts(nota1,nota2);
});

function verificaStts(n1, n2){
    console.log(`NOTA FINAL = ${n1+n2}`);
    if((n1+n2) < 60.00)
        console.log("REPROVADO");  
}