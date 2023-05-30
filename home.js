//create a group name and store in localStorage
function hostGroup() 
{
    var groupName = document.getElementById('groupName');
    localStorage.setItem('groupName', groupName.value);

    window.location.href = "budget.html";
}

//check if a group exists for the name given
function joinGroup() 
{
    //get group name stored data
    var groupStored = localStorage.getItem('groupName');

    //data entered from hostGroup()
    var group = document.getElementById('group');

    if (groupStored == group.value) {
        window.location.href = "budget.html";
    }
    else {
        alert('This group doesn\'t exist.');
    }
}

function clearFunction() {
    var element = document.getElementById("formID");
    element.reset()
}