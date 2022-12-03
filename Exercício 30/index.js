btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const numberInput = document.querySelector("#number");

    let number = numberInput.value;
    let array = number.split("");
    
    numberString(parseInt(array[0]), parseInt(array[1]));
    
});

function numberString(arrayN, arrayN2){
    let str="";
    let v = "Vinte e ", t = "Trinta e ", q = "Quarenta e ", c = "Cinquenta e ", ses = "Sessenta e ", set = "Setenta e ", o = "Oitenta e ", n = "Noventa e ";
    
    if(arrayN == 0){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 1){
        switch(arrayN2){
            case 0:
                str = "Dez."
                break;
            case 1:
                str = "Onze.";
                break;
            case 2:
                str = "Doze.";
                break;
            case 3:
                str = "Treze";
                break;
            case 4:
                str = "Catorze.";
                break;
            case 5:
                str = "Quinze.";
                break;
            case 6:
                str = "Dezesseis.";
                break;
            case 7:
                str = "Dezesete.";
                break;
            case 8:
                str = "Dezoito.";
                break;
            case 9:
                str = "Dezenove.";
                break;
        }
    }
    if(arrayN == 2){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 3){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 4){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 5){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 6){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 7){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 8){
        switch(arrayN2){
            case 1:
                str = "Um.";
                break;
            case 2:
                str = "Dois.";
                break;
            case 3:
                str = "Tres.";
                break;
            case 4:
                str = "Quatro.";
                break;
            case 5:
                str = "Cinco.";
                break;
            case 6:
                str = "Seis.";
                break;
            case 7:
                str = "Sete.";
                break;
            case 8:
                str = "Oito.";
                break;
            case 9:
                str = "Nove.";
                break;
        }
    }
    if(arrayN == 9){
        switch(arrayN2){
        case 1:
            str = "Um.";
            break;
        case 2:
            str = "Dois.";
            break;
        case 3:
            str = "Tres.";
            break;
        case 4:
            str = "Quatro.";
            break;
        case 5:
            str = "Cinco.";
            break;
        case 6:
            str = "Seis.";
            break;
        case 7:
            str = "Sete.";
            break;
        case 8:
            str = "Oito.";
            break;
        case 9:
            str = "Nove.";
            break;
        }
    }

    switch(arrayN){
        case 1:
            console.log(`Saída: ${str}`);
            break;
        case 2:
            console.log(`Saída: ${v + str}`);
            break;
        case 3:
            console.log(`Saída: ${t + str}`);
            break;
        case 4:
            console.log(`Saída: ${q + str}`);
            break;
        case 5:
            console.log(`Saída: ${c + str}`);
            break;
        case 6:
            console.log(`Saída: ${ses + str}`);
            break;
        case 7:
            console.log(`Saída: ${set + str}`);
            break;
        case 8:
            console.log(`Saída: ${o + str}`);
            break;
        case 9:
            console.log(`Saída: ${n + str}`);
            break;
    }
}

