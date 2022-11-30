const btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const baseInput   = document.querySelector("#base")
    const heightInput = document.querySelector("#height")

    const base   = baseInput.value;
    const height = heightInput.value;

    const area      = retArea(base, height)
    const perimeter = retPerimeter(base, height)
    const diagonal  = retDiagonal(base, height)

    alert(`ÁREA = ${area.toFixed(4)}\nPERÍMETRO = ${Number(perimeter).toFixed(4)}\nDIAGONAL = ${diagonal.toFixed(4)}`)
})

function retArea(base, height){
    const area = base*height
    return area
}

function retPerimeter(base, height){
    const peri = (2 * base) + (2 * height)
    return peri
}

function retDiagonal(base, height){
    const diagonal = Math.sqrt((Math.pow(base,2)+Math.pow(height, 2)),2)
    return diagonal
}