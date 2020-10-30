const escola = "Cod3r"

console.log(escola.charAt(4)) // A função charAt() recebe como parametro o index da string, 
console.log(escola.charAt(5)) // retornando o conteúdo referente ao index passado como parametro.
console.log(escola.charCodeAt(3)) // A função charCodeAt() retorna a posição do caracter passado como parametro dentro tabela unicode
console.log(escola.indexOf('o')) // A função indeexOf() retorna  posição do caracter passado como parametro, dentro da string

console.log(escola.substring(1)) // A função substring() printa a strind a partir da posição informmada
console.log(escola.substring(0, 3)) // Ou partindo da posição informada e parando na posição informada.

console.log('Escola '.concat(escola).concat('!')) // A função concat() concatena duas ou mais strings
console.log(escola.replace(3, 'e')) // A função replace() substitui caracteres

console.log('Ana,Maria,Pedro'.split(',')) // A função split() cria um array dividindo um string, recebendo
                                          // como parametro o caracter que deve tomar como referencia para dividir.
