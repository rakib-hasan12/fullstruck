document.getElementById("btn-submit").addEventListener('click',function(){
    const emailFeild=document.getElementById('user-email');
    const email=emailFeild.value;
    const passwordFeild=document.getElementById('user-password');
    const password=passwordFeild.value;

if(email==='sonarbank@gmail.com'&& password==='secret'){
    window.location.href='bank.html'
}
else{
    alert('password vullllllll')
}
});