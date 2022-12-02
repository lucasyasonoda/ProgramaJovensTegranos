btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    
    e.preventDefault();

    const aInput = document.querySelector("#medA");
    const bInput = document.querySelector("#medB");
    const cInput = document.querySelector("#medC");

    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const c = Number(cInput.value);

    areaQ(a);
    areaTri(a, b);
    areaTra((a+b), c);
    
});

function areaQ(lado){
    const area= Math.pow(lado, 2);
    console.log(`ÁREA DO QUADRADO = ${area.toFixed(4)}`);
}
    
function areaTri(base, altura){
    const area = ((base*altura)/2);
    console.log(`ÁREA DO TRIÂNGULO = ${area.toFixed(4)}`);
}

function areaTra(somaBase, altura){
    var area = (somaBase*altura)/2;
    console.log(`ÁREA DO TRAPÉZIO = ${area.toFixed(4)}`);
}
