console.log("Welcome to Cyber Tech");
console.log("Develop by Raj Desai");


let msgbox = document.getElementById("messege");
let errormsg = document.getElementById("errormsg");
let formcont = document.getElementById("form");
let nav = document.getElementById("nav");
let smallNavbar = document.getElementById("small-navbar");

function Check() {
    let fnm = document.getElementById("fnm").value;
    let lnm = document.getElementById("lnm").value;
    let email = document.getElementById("email").value;
    let ffnm = document.getElementById("ffnm").value;
    let flnm = document.getElementById("flnm").value;
    let mfnm = document.getElementById("mfnm").value;
    let mlnm = document.getElementById("mlnm").value;
    let add = document.getElementById("add").value;
    let homeNum = document.getElementById("homeNum").value;

    if(fnm=="" || lnm=="" || email=="" || ffnm=="" || flnm=="" || mfnm=="" || mlnm=="" || add=="" || homeNum=="")
    {
        errormsg.style.display = "block";
        formcont.style.filter = "blur(4px)";
        nav.style.filter = "blur(4px)";
        smallNavbar.style.filter = "blur(4px)";
    }
    else {
        msgbox.style.display = "block";
        document.getElementById("yourname").innerHTML="Thanks " + fnm + " For Submitting Report";
        formcont.style.filter = "blur(4px)";
        nav.style.filter = "blur(4px)";
        smallNavbar.style.filter = "blur(4px)";
        document.getElementById("dataset").reset();
    }

}

function HideMessege() {
    errormsg.style.display = "none";
    msgbox.style.display = "none";
    formcont.style.filter = "blur(0)";
    nav.style.filter = "blur(0)";
    smallNavbar.style.filter = "blur(0px)";
}