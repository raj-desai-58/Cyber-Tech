console.log("Welcome to Cyber Teche");
console.log("Develop by Raj Desai");

let msgbox = document.getElementById("messege");
var yourname = document.getElementById("yourname").value;
let errormsg = document.getElementById("errormsg");
let formsec = document.getElementById("formsec");
let navbar = document.getElementById("nav");


function ShowMessege() {
    var nm = document.getElementById("nm").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("sub").value;
    var rep = document.getElementById("rep").value;

    document.getElementById("yourname").innerHTML="Thanks " + nm + " For Submitting Report";


    if(nm=="" || email=="" || sub=="" || rep==""){
        errormsg.style.display = "block";
        formsec.style.filter = "blur(4px)";
        navbar.style.filter = "blur(4px)";
    }
    else{
        msgbox.style.display = "block";
        formsec.style.filter = "blur(4px)";
        navbar.style.filter = "blur(4px)";
        document.getElementById("dataset").reset();
    }
}

function HideMessege() {
    errormsg.style.display = "none";
    msgbox.style.display = "none";
    formsec.style.filter = "blur(0)";
    navbar.style.filter = "blur(0)";
}