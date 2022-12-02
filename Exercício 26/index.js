btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const palavraInput = document.querySelector("#palavra");

    let palavra = palavraInput.value;

    let pArray  = palavra.toUpperCase().split("");

    separaVogalConsoante(pArray);
});

function separaVogalConsoante(word_array){
    let countV=0, countC=0;
    for(let i=0; i<word_array.length;i++){        
        if(word_array[i] == 'A' || word_array[i] == 'E' || word_array[i] == 'I' 
        || word_array[i] == 'O' || word_array[i] == 'U'){
            countV++;
        }else{
            countC++;
        }
    }

    console.log(`Vogais: ${countV}`);
    console.log(`Consoantes: ${countC}`);
}