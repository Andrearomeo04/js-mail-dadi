const mail_list = ["andrea.romeo@gmail.com", "giancarlo.toscano@gmail.com", "sergio.trentini@gmail.com","vincenzo.baresi@gmail.com", "patrizio.cattaneo@gmail.com"];

let btn = document.getElementById('check')

btn.addEventListener('click', function () {
    let mail = document.getElementById('list').ariaValueMax.toLowerCase();

    let list_check = false

    for(i = 0; i < mail_list.length; i++)
        if (mail_list[i].toLowerCase() === mail) {
            list_check = true;
        }
})