const login = document.querySelector('#login');
const superUser = document.getElementById('superuser');

function logIn() {
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('Password').value;

    if (name == '1' && password == '1234'){
        login.classList.add('d-none');
        superUser.classList.remove('d-none');
    }
        
    else {
        const loginForm = document.getElementById('loginForm');
        loginForm.innerHTML += '<hr/> <div class="alert alert-danger"><div class="header">Try Again...</div></div>';
    }
}