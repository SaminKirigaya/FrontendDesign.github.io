document.getElementsByClassName("usreg")[0].addEventListener("blur", () => {
    let usreg = document.getElementsByClassName("usreg")[0].value;
    let regx = /^[a-zA-Z]([a-zA-Z\s\_]){2,100}$/;

    if (regx.test(usreg)) {

        document.getElementsByClassName("reguscaution")[0].style.display = "none";

    } else {
        document.getElementsByClassName("reguscaution")[0].style.display = "block";
    }





});

document.getElementsByClassName("passreg")[0].addEventListener("blur", () => {
    let passval = document.getElementsByClassName("passreg")[0].value;
    let regx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if (regx.test(passval)) {

        document.getElementsByClassName("regpscaution")[0].style.display = "none";

    } else {
        document.getElementsByClassName("regpscaution")[0].style.display = "block";
    }





});