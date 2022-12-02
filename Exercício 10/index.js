btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const v1 = document.querySelector("#value1");
    const v2 = document.querySelector("#value2");
    const v3 = document.querySelector("#value3");

    const valor1 = v1.value;
    const valor2 = v2.value;
    const valor3 = v3.value;

    achaMenor(valor1, valor2, valor3);
});

function achaMenor(a, b, c){
    if(a <= b && a <= c)
        console.log(`MENOR = ${a}`);
    if(b <= a && b <= c)
        console.log(`MENOR = ${b}`);
    if(c <= a && c <= b)
        console.log(`MENOR = ${c}`);
}