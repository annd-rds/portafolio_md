const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_lifmtsb';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

const btnDivEfecto = document.querySelector('.divEfecto'),
    btnDivEfecto2 = document.querySelector('.parent');
    console.log(btnDivEfecto);
    console.log(btnDivEfecto2);

btnDivEfecto.addEventListener('click', function (e) {

    if (btnDivEfecto2.classList.contains("show")) {
        btnDivEfecto2.classList.remove("show");
    } else {
        btnDivEfecto2.classList.add("show");
    }
});