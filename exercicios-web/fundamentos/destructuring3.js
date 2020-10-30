function random({min = 0, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 20, max: 50 }
console.log(random(obj))
console.log(random({ min: 955 }))
console.log(random({}))
console.log(random())