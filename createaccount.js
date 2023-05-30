//Store user's username and password
function store()
{
    var user1 = document.getElementById('user1');
    var pass = document.getElementById('pass');
    localStorage.setItem('user1', user1.value);
    localStorage.setItem('pass', pass.value);

    window.location.href = "home.html";
}