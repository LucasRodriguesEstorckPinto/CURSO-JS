let vetores = [8,1,7,4,2,9]
vetores.sort()
/*
for (var c = 0; c<vetores.length; c++) { // percurso tradicional 
    console.log(`A posição ${c} tem o valor ${vetores[c]}`)
}
*/
for (var c in vetores){ // função mais recente para fazer o percurso de array
    console.log(`A posição ${c} tem o valor ${vetores[c]}`)
}