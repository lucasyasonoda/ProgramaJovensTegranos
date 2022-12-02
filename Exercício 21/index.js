btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const xInput = document.querySelector("#xValue");

    const x = Number(xInput.value);

    somaPares(x);
});

function somaPares(x){
    for(let i=1;i<=x;i++)
        if(i%2 == 0)
            console.log(`${i}`)
    
}