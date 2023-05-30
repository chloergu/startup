//login if username and password match storage
function login()
{
    //get set stored data
    var userStored = localStorage.getItem('user1');
    var passStored = localStorage.getItem('pass');

    //data entered from login-form
    var userName = document.getElementById('userName');
    var userPass = document.getElementById('userPass');

    if (userStored == userName.value && passStored == userPass.value) {
        window.location.href = "home.html";
    }
    else {
        alert('Please enter a valid username and password.');
    }

}