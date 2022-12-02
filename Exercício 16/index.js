btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const d1 = document.querySelector("#distancia1");
    const d2 = document.querySelector("#distancia2");
    const d3 = document.querySelector("#distancia3");

    const dist1 = Number(d1.value);
    const dist2 = Number(d2.value);
    const dist3 = Number(d3.value);


    verificiaMaior(dist1, dist2, dist3);
});

function verificiaMaior(d1, d2, d3){
    if(d1 > d2 && d1 > d3)
        console.log(`MAIOR DISTÂNCIA = ${d1.toFixed(2)}`);
    if(d2 > d1 && d2 > d3)
        console.log(`MAIOR DISTÂNCIA = ${d2.toFixed(2)}`);
    if(d3 > d1 && d3 > d2)
        console.log(`MAIOR DISTÂNCIA = ${d3.toFixed(2)}`);
    
}