btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const nameInput      = document.querySelector("#name");
    const hourValueInput = document.querySelector("#hourValue");
    const workloadInput  = document.querySelector("#workload");

    const name = nameInput.value;
    const hourValue = hourValueInput.value;
    const workload = workloadInput.value;

    pagamento(name, hourValue, workload);
});

function pagamento(nome, horaValor, horasTrab){
    const pag = horaValor*horasTrab;
    console.log(`O pagamento para ${nome} deve ser ${pag.toFixed(2)}`)
}