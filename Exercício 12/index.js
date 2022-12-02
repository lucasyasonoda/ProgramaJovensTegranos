btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const nA = document.querySelector("#numberA");
    const nB = document.querySelector("#numberB");
    const nC = document.querySelector("#numberC");

    const a = Number(nA.value);
    const b = Number(nB.value);
    const c = Number(nC.value);

    bhaskara(a, b, c);
});

function bhaskara(a, b, c){
    const delt = Math.sqrt(delta(a, b, c));
    const x1 = (-b + delt)/(2*a);
    const x2 = (-b - delt)/(2*a);

    console.log(`X1 = ${x1.toFixed(4)}`);
    console.log(`X2 = ${x2.toFixed(4)}`);
}

function delta(a, b, c){
    const delt = Math.pow(b, 2) - 4*a*c;
    return delt;
}