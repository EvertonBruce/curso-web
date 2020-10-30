function resolveBaskara(ax2, bx, c) {
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0){
        return 'Delta é negativo!'
    } else {
        let x1 = (- (bx) + Math.sqrt(delta)) / 2
        let x2 = (- (bx) - Math.sqrt(delta)) / 2
        return [x1, x2]
    }
}

console.log(resolveBaskara(1, 8, -9))