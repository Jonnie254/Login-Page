// script.js

document.addEventListener("DOMContentLoaded", function () {
    let signupbtn = document.getElementById("signupbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let title = document.getElementById("title");

    signinbtn.onclick = function () {
        namefield.style.maxHeight = 0;
        title.innerHTML = "Sign in";
        signupbtn.classList.add("disable");
        signinbtn.classList.remove("disable");
    };

    signupbtn.onclick = function () {
        namefield.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupbtn.classList.remove("disable");
        signinbtn.classList.add("disable");
    };
});
