function fat(num) { // cód igo para fatorial 
    let fat = 1 
    for (let c = num; c>1; c--) {
        fat *= c
    }
    return fat
}

console.log(fat(5))