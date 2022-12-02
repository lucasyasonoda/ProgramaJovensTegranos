btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const palavraInput = document.querySelector("#palavra");
    let palavra = palavraInput.value;
    let pArray  = palavra.toUpperCase().split("");

    verificaPalindroma(palavra.toUpperCase(), reverseString(pArray))
    console.log(`${reverseString(pArray)}`)
});

function verificaPalindroma(word, wordI){
    if(word != wordI){
        console.log("Saída: Não é palíndroma");
    }else {        
        console.log("Saída: É palíndroma");
    }
}

function reverseString(word) {
    let aux = "";
    for (let i = word.length - 1; i >= 0; i--) {
        aux += word[i];
    }
    return aux.toUpperCase();
}
