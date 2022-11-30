const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const name1Input = document.querySelector("#Nome1");
    const idade1Input  = document.querySelector("#Idade1");
    const name2Input = document.querySelector("#Nome2");
    const idade2Input  = document.querySelector("#Idade2");

    const nome1  = name1Input.value;
    const idade1 = idade1Input.value;
    const nome2  = name2Input.value;
    const idade2 = idade2Input.value;

    idadeMedia(idade1, idade2);    
});

function idadeMedia(idade1, idade2){
    const media = (idade1/2)+(idade2/2);
    console.log(`A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos`)
}