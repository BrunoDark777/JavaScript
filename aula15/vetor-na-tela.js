let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores[0])

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}*/

for(let pos in num){
    console.log(`A posoção ${pos} tem o valor ${valores[pos]}`)
}

let pos = num.indexOf(8)

console.log(`O valor 8 esta na posição ${pos}`)