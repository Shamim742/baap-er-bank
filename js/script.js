// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 1.set id on the html element 
    // 2.get the element
    // 3. get the value of the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger:do not verify email password on the client side
    // step-4: verify email and password check valid user or not
    if (email == 'shamimislam2742@gmail.com' && password == 'shamim2742'){
        console.log('valid user');
    }
    else{
        console.log('Invalid user')
    }
})