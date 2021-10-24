/*jslint browser:true*/
"use strict";

function validateForm() {
    var status = false;
    var x;

    //test for full name
    x = document.forms.myForm.name.value;
    if (x===null || x==="") {
        status=false;
        document.getElementById('fullName').className = "error";
    }
    //check for the phone number
    x = document.forms.myForm.phone.value;
    x = x.replace(/-/g, '');
    console.log(x);
    document.forms.myForm.phone.value = x;
    if (x===length < 10 || x.length > 15) {
        status=false;
        document.getElementById('phoneNumber').className = "error";

    return status;
}