/*jslint browser:true*/
//"use strict";

function validateForm() {
    var status = false;
    var x;

    //test for full name
    x = document.forms.myForm.name.value;
    console.log(x);
    if (x===null || x==="") {
        status=false;
        document.getElementById('name').className = "error";
    }
    //check for the phone number
    x = document.getElementById('phone').className = "error";;
    x = x.replace(/-/g, '');
    console.log(x);
    document.getElementById("phone").value = x;
    if (x===length < 10 || x.length > 15) {
        status=false;
        document.getElementById('phone').className = "error";
    }
    document.getElementById("formResponse").innerHTML=document.getElementById("email").value;
    console.log(document.getElementById("name").value);
}



