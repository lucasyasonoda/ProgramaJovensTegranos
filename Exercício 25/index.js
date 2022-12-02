btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const dataInput = document.querySelector("#data");

    const data = dataInput.value;
    const data_array = data.split("/");
    
    comparaData(data_array);
});

function comparaData(array){
    let dia = parseInt(array[0]);
    let mes = parseInt(array[1]);
    let signo="";

    if((dia >= 21 && dia <=31 && mes == 1) || (dia >= 1 && dia <= 18 && mes == 2)){
        signo = "Aquário";
    }else if((dia >= 19 && dia <= 28 && mes == 2) || (dia >= 1 && dia <= 20 && mes == 3)){
        signo = "Peixes";
    }else if((dia >= 21 && dia <= 31 && mes == 3) || (dia >= 1 && dia <= 20 && mes == 4)){
        signo = "Áries";
    }else if((dia >= 21 && dia <= 30 && mes == 4) || (dia >= 1 && dia <= 20 && mes == 5)){
        signo = "Touro";
    }else if((dia >= 21 && dia <= 31 && mes == 5) || (dia >= 1 && dia <= 20 && mes == 6)){
        signo = "Gêmeos";
    }else if((dia >= 21 && dia <= 30 && mes == 6) || (dia >= 1 && dia <= 22 && mes == 7)){
        signo = "Cancer";
    }else if((dia >= 23 && dia <= 31 && mes == 7) || (dia >= 1 && dia <= 22 && mes == 8)){
        signo = "Leão";
    }else if((dia >= 23 && dia <= 30 && mes == 8) || (dia >= 1 && dia <= 22 && mes == 9)){
        signo = "Virgem";
    }else if((dia >= 23 && dia <= 31 && mes == 9) || (dia >= 1 && dia <= 22 && mes == 10)){
        signo = "Libra";
    }else if((dia >= 23 && dia <= 30 && mes == 10) || (dia >= 1 && dia <= 21 && mes == 11)){
        signo = "Escorpião";
    }else if((dia >= 22 && dia <= 31 && mes == 11) || (dia >= 1 && dia <= 21 && mes == 12)){
        signo = "Sargitário";
    }else if((dia >= 22 && dia <= 30 && mes == 12) || (dia >= 1 && dia <= 20 && mes == 1)){
        signo = "Capricórnio";
    }

    console.log(`Signo: ${signo}`);
}