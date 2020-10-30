function calcFatorial(num) {
    let res = num
    for (let i = num; i > 2; i--){
        res = res * (i - 1)
        console.log(res)
    }
    
}

calcFatorial(7)