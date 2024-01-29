// login ka code hai

function login() {
    var get_email = document.querySelector('#get_email');
    console.log(get_email);
    var get_password = document.querySelector('#get_password');
    console.log(get_password);
    localStorage.setItem('email', get_email.value);
    localStorage.setItem('password', get_password.value);
    location.href = './signup.html';

}


function signup() {
    var get_email = document.querySelector('#get_email').value;
    console.log(get_email);
    var get_password = document.querySelector('#get_password').value;
    console.log(get_password);
    if (localStorage.getItem('email') === get_email && localStorage.getItem('password') === get_password) {
        alert('signUp success')
        location.href = './dashborad.html';

    }
    else {
        alert('signUp fail')
        location.href = './signup.html';


    }


}

