const username = document.getElementById('username');
const password = document.getElementById("password");
const check = document.getElementById("check");
const spinner = document.getElementById("spinner");
const button = document.getElementById("connect");
const form = document.getElementById("form-login");
const a=12345;
const b=54321;
const c="a1728@";

console.log("script cargado");
console.log(username.value);
var username_valid=false;
var password_valid=false;

username.oninput=function(){
    if(this.value==a){
        username_valid=true;
        form.action="./HTML/informacion.html";
    }else if(this.value==b){
        form.action="./HTML/registro.html";
        }else{username_valid=false;
    }
form_valid(username_valid,password_valid);
}

password.oninput=function(){
    if(this.value==c){
        password_valid=true;
    }else{
        password_valid=false;
    }
    form_valid(username_valid,password_valid);
}

function form_valid(username_valid, password_valid){
    if(username_valid && password_valid){
        spinner.style.display='none';
        check.style.display='block';
        button.classList.add('valid');
        check.classList.add('up');
    }else{
        spinner.style.display='block';
        check.style.display='none';
        button.classList.remove('valid');
        check.classList.remove('up');
    }
}