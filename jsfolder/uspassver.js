document.getElementsByClassName("usname")[0].addEventListener("blur", () => {
    let usval = document.getElementsByClassName("usname")[0].value;
    let reg = /^[a-zA-Z]([a-zA-Z\s\_]){2,100}$/;

    if (reg.test(usval)) {

        document.getElementsByClassName("uscaution")[0].style.display = "none";

    } else {
        document.getElementsByClassName("uscaution")[0].style.display = "block";
    }





});


document.getElementsByClassName("pass")[0].addEventListener("blur", () => {
    let pass = document.getElementsByClassName("pass")[0].value;
    let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if (reg.test(pass)) {

        document.getElementsByClassName("pscaution")[0].style.display = "none";

    } else {
        document.getElementsByClassName("pscaution")[0].style.display = "block";
    }





});


var state = false;
document.getElementsByClassName("passeye")[0].addEventListener("click", () => {
    if (!state) {
        document.getElementsByClassName("pass")[0].setAttribute("type", "password");
        state = true;
    } else {
        document.getElementsByClassName("pass")[0].setAttribute("type", "text");
        state = false;
    }

});