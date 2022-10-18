

const password = document.querySelector('.password');
const show = document.querySelector('.show');
const hide = document.querySelector('.hide');

show.onclick = function(){
    password.setAttribute("type", "text");
    show.style.display = "none";
    hide.style.display = "block";

}

hide.onclick = function(){
    password.setAttribute("type", "password");
    hide.style.display = "none";
    show.style.display = "block";
}
