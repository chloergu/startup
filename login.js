//Store user's username and password
function store()
{
    var user = document.getElementById('username');
    var pass = document.getElementById('password');
    localStorage.setItem('username', user.value)
    localStorage.setItem('password', pass.value)

    window.location.href = "home.html";
}

//login if username and password match storage
function checkLogin()
{
    //get set stored data
    var userStored = localStorage.getItem('user')
    var passStored = localStorage.getItem('pass')

    //data entered from login-form
    var userName = document.getElementById('userName');
    var userPass = document.getElementById('userPass');

    if (userStored == userName && passStored == userPass) {
        window.location.href = "home.html";
    }
    else {
        alert("Please enter a valid username and password.");
    }

}