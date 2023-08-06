function conte(){
let inicio = window.document.querySelector('input#inicio')
let fim = window.document.querySelector('input#fim')
let passo = window.document.querySelector('input#passo')
let contador = window.document.querySelector('div#contador')
let numero1 = Number(inicio.value)
let numero2 = Number(fim.value)
let adiciona = Number(passo.value)

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('[Erro] Faltam dados!')
    contador.innerHTML = 'Impossivel contar!'
} else {
    contador.innerHTML = 'Contando:'
    // Contagem crescente
    if(numero1 < numero2){
        for(let c = numero1; c <= numero2; c += adiciona){
        contador.innerHTML += `&#x1F449 ${c}, `
        }
        
    } else {
        // Contagem regressiva
        for(let c = numero1; c >= numero2; c -= adiciona){
        contador.innerHTML += `&#x1F449 ${c}, `
        }
    }
    contador.innerHTML += `&#127937`
} 

}