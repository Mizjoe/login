const button = document.querySelector("#show-password") 
const password = document.querySelector("#password")


button.addEventListener("click",showPassword)

function showPassword(){
    if (password.type != "text"){
        password.type = "text"
  }else{
    password.type = "password"
  }
}

