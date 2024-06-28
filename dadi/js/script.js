const btn = document.getElementById('roll')

btn.addEventListener('click', function () {
    console.log('dice rolled') 
    let human_dice = Math.floor(Math.random() * 6) + 1;
    let computer_dice = Math.floor(Math.random() * 6) + 1;
})

