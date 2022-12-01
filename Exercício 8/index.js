btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    
    e.preventDefault();

    const aInput = document.querySelector("#medA");
    const bInput = document.querySelector("#medB");
    const cInput = document.querySelector("#medC");

    const a = aInput.value;
    const b = bInput.value;
    const c = cInput.value;

    areaQ(a);
    areaTri(a, b);
    areaTra(a, b, c);
});

function areaQ(lado){
    const areaQ = Math.pow(lado, 2);
    console.log(`ÁREA DO QUADRADO = ${areaQ.toFixed(4)}`);
}
    
function areaTri(base, altura){
    const areaTri = ((base*altura)/2);
    console.log(`ÁREA DO TRIÂNGULO = ${areaTri.toFixed(4)}`);
}

function areaTra(base1, base2, altura){
    const areaTra = (((base1+base2)*altura)/2);
    console.log(`ÁREA DO TRAPÉZIO = ${areaTra.toFixed(4)}`);
}
