const registerEmail1 = document.getElementById('registerEmail1');
const registerPassword1 = document.getElementById('registerPassword1');
const registerAlert = document.getElementById('registerAlert');
const buttonRegister = document.getElementById('buttonRegister');


buttonRegister.addEventListener('click', function(){
    const message = `User ${registerEmail1.value} added successfully.`
    registerAlert.innerHTML += '<div class="alert alert-success alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

});