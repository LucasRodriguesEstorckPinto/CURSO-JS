// conferir
let num = [5,8,4]
num[3] = 6 // cria a posição 3 e coloca o número 6
num.push(7) // automaticamente coloca o valor 7 na ultima posição
console.log(`Nosso vetor é o ${num}`)
console.log(num.length) // sem parênteses 
console.log(num.sort()) // coloca o vetor em ordem crescente
let pos = num.indexOf(8)// procura a posição do numero
console.log(`O valor 8 ta na posição ${pos}`)
 