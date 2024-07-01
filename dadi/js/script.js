const btn = document.getElementById('roll')

btn.addEventListener('click', function () {
    console.log('dice rolled') 
    let human_dice = Math.floor(Math.random() * 6) + 1;
    console.log(`Human ha ottenuto il numero ${human_dice}`)
    let computer_dice = Math.floor(Math.random() * 6) + 1;
    console.log(`Computer ha ottenuto il numero ${computer_dice}`)

    if (human_dice > computer_dice) {
        console.log('Human has Won!')
    }
    else if (human_dice < computer_dice) {
        console.log('Computer has Won!')
    }
    else {
        console.log('è un pareggio!')
    }
})

