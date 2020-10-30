function comparaAltura(altCrianca1, altCrianca2, taxaCresCrianca1, taxaCresCrianca2){
    let anos = 0
    let criancaMaior = 0
    let taxaCresCriancaMaior = 0
    let taxaCresCriancaMenor = 0
    let criancaMenor = 0
    
    if(altCrianca1 !== altCrianca2) {
        if (altCrianca1 > altCrianca2){
            criancaMenor = altCrianca2
            taxaCresCriancaMenor = taxaCresCrianca2
            criancaMaior = altCrianca1
            taxaCresCriancaMaior = taxaCresCrianca1
        } else {
            criancaMenor = altCrianca1
            taxaCresCriancaMenor = taxaCresCrianca1
            criancaMaior = altCrianca2
            taxaCresCriancaMaior = taxaCresCrianca2
        }

        while (criancaMaior > criancaMenor) {
            criancaMenor += taxaCresCriancaMenor
            criancaMaior += taxaCresCriancaMaior

            anos++
        }
        return `A criança menor passará a autura da maior em ${anos} anos.`
    } else {
        if (taxaCresCrianca1 > taxaCresCrianca2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxaCresCrianca1 < taxaCresCrianca2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    }
}

console.log(comparaAltura(1000, 1050, 10, 5))
console.log(comparaAltura(1000, 1000, 5, 15))