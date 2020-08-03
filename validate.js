function ValidateForm(){
   var username = document.getElementById("username");
   var phonenum = document.getElementById("phonenum");
   var password = document.getElementById("password");
   var confirm_password = document.getElementById("confirm_password");
//    Forms by default returns true so we need to create a variable true and later return it back to false
   var valid = true;  


//    The purpose of this function removeMessage() is to clear the error whwen we later input the correct value.
   removeMessage();


//    USER NAME VALIDATION
if(username.value.length==0){
    username.className = "wrong-input";
    username.nextElementSibling.innerHTML= "Username cannot be blank";
    valid = false;
}

// PHONENUMBER VALIDATION
if(phonenum.value.length<11){
    phonenum.className = "wrong-input";
    phonenum.nextElementSibling.innerHTML= "Phone Number cannot be less than 11";
    valid = false;
}

// PASSWORD VALIDATION
if(password.value.length<6){
    password.className = "wrong-input";
    password.nextElementSibling.innerHTML= "Password cannot be less than 6";
    valid = false;
}

// CONFIRM PASSWORD VALIDATION
if(password.value.length!=confirm_password.value){
    confirm_password.className = "wrong-input";
    confirm_password.nextElementSibling.innerHTML= "Password doesn't match";
    valid = false;
}
return valid;
}


// We'll use the function we want to call here to clear the error message after inputing the correct value.
function removeMessage(){
    var errorinput = document.querySelectorAll("wrong-input");
    [].forEach.call(errorinput,function(el){
        el.classList.remove("wrong-input");
    });

    var errorpara = document.querySelectorAll(".error");
    [].forEach.call(errorpara, function(el){
        el.innerHTML="";
    })
    
}