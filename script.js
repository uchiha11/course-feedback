var stored = 0;
var count = 0;
var i = 0;
function dis(value,question) {
    count++;
   
    var val = {};

    val[question] = value;
    localStorage.setItem("values", JSON.stringify(val));



    var storedValues = JSON.parse(localStorage.getItem("values"));

    storedValues[i] = parseInt(storedValues);
    stored = stored + storedValues[i];
    console.log("current rating is " + storedValues[i]);
    i++;

}

function submit() {
    var comments = document.getElementById('icon_prefix2').value;
    var page = document.getElementById('form').dataset.page;

    var rating = stored / count;
    if (rating <= 1)
        alert(`Overrall rating for course ${page} is Poor . ${rating}`);

    else if (rating > 1 && rating <= 2)
        alert(`Overrall rating for course ${page} is intermediate . ${rating}`);
    else if (rating > 2 && rating <= 3)
        alert(`Overrall rating for course ${page} is Good`);

    else alert(`Overrall rating for course is Excellent .`);

    alert(comments);

}

function regExp(x) {

    var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(x);
}


function login() {

    var name = document.getElementById('icon_prefix').value;
    var email = document.getElementById('icon_email').value;
    if(name==="")
    alert("write valid name")

    var m=regExp(email);
         if(m){

 window.location.href = './login.html';

         }
         else 
         alert("Email id must be valid")

 
}
