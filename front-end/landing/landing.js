function navigateToSingupPage(){
    window.location.href='login.html';
}

document.getElementsByClassName('btn').addEventListener('click',navigateToSingupPage);
document.getElementById('myLink').addEventListener('click',function(event){
    event.preventDefault();
    navigateToSingupPage();
});
