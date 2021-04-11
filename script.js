var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var confirm = document.getElementById("confirm");

//fonction=si la valeur du password est different du confirmpassword, alors border rouge
confirm.addEventListener("click", function () {
    if (password.value !== confirmPassword.value) {
        password.style.border = '3px solid red';
        confirmPassword.style.border = '3px solid red';
        confirm.innerHTML = "Mismatch";

    // si ce n'est pas different (donc si c'est le même password) alors border vert
    } else {
        password.style.border = '3px solid green';
        confirmPassword.style.border = '3px solid green';
        confirm.innerHTML = "Matching"
    }
})
