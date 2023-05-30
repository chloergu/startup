function copyInviteLink() 
{
    var groupName = localStorage.getItem('groupName')
    // Copy the text inside the text field
    navigator.clipboard.writeText("https://startup.tripsplit.click/budget.html");

    // Alert that text is copied
    alert("Copied \"" + localStorage.getItem('groupName') + "\" invite link.");
}