btn = document.querySelector("#send");

btn.addEventListener("click", function(e) { 
    e.preventDefault();

    const numbersInput = document.querySelector("#numbers");

    let numbers = numbersInput.value;
    let numbers_array = numbers.split(", ");
    
    selectSort(numbers_array);    
});

function selectSort(array){
    for(let i=0;i<array.length-1;i++){
        let min = i;
        for(let j = i+1;j<array.length;j++)
            if(array[min] > array[j])
                min = j;

        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }

    console.log(`Ordenados: ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`);
}