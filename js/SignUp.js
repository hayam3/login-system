 var nameInput=document.getElementById("userName");
 var emailInput=document.getElementById("userEmail");
 var passInput=document.getElementById("userPassword");
var loginBtn=document.getElementById("loginBtn");
 var inputList=[];

 
 if(localStorage.getItem("input box") !== null){
    inputList=JSON.parse(localStorage.getItem("input box"))
  
     
  }


//   signUp
function signUp(){

    var userInput={
  
   name:nameInput.value,
   email:emailInput.value,
   pass:passInput.value,
    
    }
  
if(checkEmpty() == true){
    document.getElementById("Success").classList.add("d-none")
    document.getElementById("checkEmpty").classList.remove("d-none")

}
else{

    if(checkExists() == true){
        document.getElementById("Success").classList.add("d-none")
        document.getElementById("checkEmpty").classList.add("d-none")

        document.getElementById("checkExists").classList.remove("d-none")
    }
   else{
    if(validationInputs()== true){
        document.getElementById("checkEmpty").classList.add("d-none")
        inputList.push(userInput)
        localStorage.setItem("input box" , JSON.stringify(inputList))
        clearForm()
        document.getElementById("userName").classList.add("is-valid")
        document.getElementById("userEmail").classList.add("is-valid")
        document.getElementById("userPassword").classList.add("is-valid")
        document.getElementById("Success").classList.remove("d-none")
    }
    else{
        document.getElementById("not-valid").classList.remove("d-none")
    }
    
    
   }
}
   
   }


//    clearForm
   function clearForm(){

     nameInput.value = null;
     emailInput.value = null;
     passInput.value = null;
  
  }
  
//   checkEmpty
   function checkEmpty() {
    if (nameInput.value == "" || emailInput.value == "" || passInput.value =="") {
        return true;
    }
    else {
        return false;
    }
   }

//    checkExists
   function checkExists() {
    for (var i = 0; i < inputList.length; i++) {
        if(inputList[i].email == emailInput.value)
        return true;
    }
   }

//    validation 
   function validationName() {
    var regex=/^[a-zA-Z]{3,}$/
    if (regex.test(nameInput.value) == true ){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        return true ;
    }
    else{
    nameInput.classList.add("is-invalid")
    nameInput.classList.remove("is-valid")

    return false ;
    }
   }


   function validationEmail() {
    var regex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if (regex.test(emailInput.value) == true ){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        return true ;
    }
    else{
    emailInput.classList.add("is-invalid")
    emailInput.classList.remove("is-valid")

    return false ;
    }
   }


   function validationPass() {
    var regex=/^[a-zA-Z]{8,}$/
    if (regex.test(passInput.value) == true ){
        passInput.classList.add("is-valid")
        passInput.classList.remove("is-invalid")
        return true ;
    }
    else{
    passInput.classList.add("is-invalid")
    passInput.classList.remove("is-valid")

    return false ;
    }
   }

function validationInputs() {
    if (validationName() == true && validationEmail() ==true && validationPass()== true) {
        return true ;
    }
    else{
return false;
    }
}


function login() {
    var loginEmail=document.getElementById("loginEmail")
    var loginPass=document.getElementById("loginPass")


    //  login empty 
    if (loginEmail.value =="" || loginPass.value =="") {
        document.getElementById("checklogin").classList.remove("d-none")
    }
    else{

     for (let i = 0; i < inputList.length; i++) {
     if (inputList[i].email == loginEmail.value && inputList[i].pass == loginPass.value) {
        // document.getElementById("checkerror").classList.add("d-none")

        localStorage.setItem("userName" , inputList[i].name)

        loginBtn.setAttribute("href","home.html")
        return true ;
     }
     else{
        document.getElementById("checkerror").classList.remove("d-none")
     }
    
}
    }

    
}

var userName =localStorage.getItem("userName");
function displayUsername() {
    document.getElementById("welcomeMassage").innerHTML= "welcome" + "  "+userName
}


