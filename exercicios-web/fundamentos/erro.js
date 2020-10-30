
function tratarErroLanca(){
    throw 10
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLanca(e)
    } finally {
        console.log('final')
    }
}
const obj = { name: 'Camila' }
imprimirNomeGritado(obj)

