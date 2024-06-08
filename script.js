let border_color_email = document.querySelector('#email')
let border_color_fistName = document.querySelector('#fistName')
let border_color_lastName = document.querySelector('#lastName')
let border_color_message = document.querySelector('#message')
let borde_color_radio = document.querySelectorAll('.config_radio')

document.getElementById('form').addEventListener('submit', function (event) {

    let border_color_email = document.querySelector('#email')
    let fistName = document.querySelector('#fistName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let message = document.querySelector('#message').value
    let general = document.getElementById('general')
    let suport = document.getElementById('suport')



    if (email == '') {
        event.preventDefault();

        border_color_email.style.borderColor = 'red';
    } if (fistName == '') {
        event.preventDefault();
        border_color_fistName.style.borderColor = 'red';
    } if (lastName == '') {
        event.preventDefault();
        border_color_lastName.style.borderColor = 'red';
    } if (message == '') {
        event.preventDefault();
        border_color_message.style.borderColor = 'red';
    } if (!general.checked && !suport.checked || general.checked && suport.checked) {
        event.preventDefault();
        radio_red()
    }
    else {
        alert('Formulario enviado com sucesso')
    }
})

function radio_red() {
    borde_color_radio.forEach(div => {
        div.style.borderColor = "red";
    });
}