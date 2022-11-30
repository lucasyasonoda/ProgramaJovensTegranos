btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const radiusInput = document.querySelector("#raioCirc");

    const radius = radiusInput.value;

    areaCirc(radius);
});

function areaCirc(radius, pi = 3.14159){
    const area = pi * (Math.pow(radius, 2));
    console.log(`ÁREA = ${area.toFixed(3)}`);
}