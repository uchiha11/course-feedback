
var val = {};

function get() {
    return JSON.parse(localStorage.getItem('feedback')) || {}
}

function set(key, id) {

    var obj = get();
    obj[key] = id;
    localStorage.setItem('feedback', JSON.stringify(obj))

}
function display(id, course) {

    if (course == 'sdlc') {
        set('sdlc', id);
    }

    else if (course == 'pdlc') {
        set('pdlc', id);
    }

    else if (course == 'qa') {
        set('qa', id);
    }


}

function submit() {
    var comment = document.getElementById('icon_prefix2').value;
    var page = document.getElementById('form').dataset.page;
    set('comment', comment);

    function download(text, name, type) {
        var a = document.createElement("a");
        var file = new Blob([text], { type: type });
        a.href = URL.createObjectURL(file);
        a.download = name;
        document.body.appendChild(a);
        a.click();
    }

    download(JSON.stringify(get()), 'test.txt', 'txt');
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

    set('name', name);
    set('email', email);


    if (m) {

        window.location.href = './login.html';

    }
    else
        alert("Email id must be valid")


}
