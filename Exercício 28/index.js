btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const valoresInput = document.querySelector("#valores");

    let valores = valoresInput.value;
    let vArray = valores.split(", ");

    verificaMaiorMenor(transformaInt(vArray));
});

function verificaMaiorMenor(array){
    //Para evitar conflitos de quando o menor número da array seja maior que 0 e para que quando a array seja negativa também funcione, foi inicializado com o valor de 1 Milhão
    let auxMaior=-1000000, auxMenor=1000000; 
    for(let i=0;i<array.length;i++)
        if(array[i] > auxMaior)
            auxMaior = array[i];
    for(let i=0;i<array.length;i++)
        if(array[i] < auxMenor)
            auxMenor = array[i];

    console.log(`Saída: ${auxMenor} e ${auxMaior}`);   
}

function transformaInt(array){
    for(let i=0;i<array.length;i++){
        array[i] = Number(array[i]);
    }
    return array;
}