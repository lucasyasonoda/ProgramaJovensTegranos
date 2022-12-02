btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const gli = document.querySelector("#glicose");

    const gliMed = Number(gli.value);

    verificaGlicose(gliMed);
});

function verificaGlicose(glicose){
    if(glicose <= 100){
        console.log("Classificação: Normal");
    }else if (glicose > 100 && glicose <= 140){
        console.log("Classificação: Elevado");
    }else if (glicose > 140){
        console.log("Classificação: Diabetes");
    }
}