document.getElementById('submit-btn').addEventListener('click', function(){
    let inputField = document.getElementById('input-field')
    let input = inputField.value;
    let passwordField = document.getElementById('password-field')
    let password = passwordField.value;
    if(input === "shohidul@gmail.com" && password==="secret"){
        window.location.href = "bank.html";
    }
    else{
        console.log('invalid user')
    }
    
})
