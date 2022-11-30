const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    const widthInput  = document.querySelector("#width")
    const lengthInput = document.querySelector("#length")
    const valueMetter = document.querySelector("#valueM")

    const width  = widthInput.value
    const length = lengthInput.value
    const valueMet = valueMetter.value

    
    const area = areaTerreno(width, length)
    const valor= precoTerreo(area, valueMet)
    console.log(`Area do terreno = ${area.toFixed(2)}\nPreço do terreno = ${valor.toFixed(2)}`)

});

function areaTerreno(width, length){
    const area = width*length
    return area
}

function precoTerreo(area, value){
    const valueTer = area*value
    return valueTer
}   




