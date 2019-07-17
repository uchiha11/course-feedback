var stored = 0;
var count = 0;
var val = {};
function dis(value, question) {
    count++;



    val[question] = value;
    localStorage.setItem("values", JSON.stringify(val[question]));



    val[question] = JSON.parse(localStorage.getItem("values"));


    // storedValues = parseInt(storedValues);
    // stored = stored + storedValues;

    // console.log("current rating is " + storedValues);
    // val[question] = parseInt(val[question]);
    // val[question] += prev;
    // console.log(val[question]);
    // prev = val[question];

}

function submit() {


    var comments = document.getElementById('icon_prefix2').value;
    var page = document.getElementById('form').dataset.page;

    // var rating = prev1/ count;
    // console.log(rating);
    // if (rating <= 1)
    //     alert(`Overrall rating for course  is Poor .`);

    // else if (rating > 1 && rating <= 2)
    //     alert(`Overrall rating for course  is intermediate .`);
    // else if (rating > 2 && rating <= 3)
    //     alert(`Overrall rating for course } is Good`);

    // else alert(`Overrall rating for course is Excellent .`);
    alert(comments);
    console.log(val);
}

function regExp(x) {

    var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(x);
}


function login() {

    var name = document.getElementById('icon_prefix').value;
    var email = document.getElementById('icon_email').value;
    if (name === "") {
        alert("write valid name");
    }

    var m = regExp(email);

    val[name] = name;
    localStorage.setItem("name", JSON.stringify(val[name]));
    val[name] = JSON.parse(localStorage.getItem("name"));

    val[email] = email;
    localStorage.setItem("email", JSON.stringify(val[email]));
    val[email] = JSON.parse(localStorage.getItem("email"));


    if (m) {

        window.location.href = './login.html';

    }
    else
        alert("Email id must be valid")


}
