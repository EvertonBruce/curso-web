const bird = document.querySelector('.bird')

bird.style.position = 'absolute'

document.addEventListener('keydown', (e) => {
    bird.style.bottom = `${bird.clientHeight + 20}px`;
    console.log(bird.style.bottom)
})

setTimeout(()=> {
    bird
}, 500)