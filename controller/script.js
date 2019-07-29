const type = 'feedback';
let val = {};
function getLocalStorage() {
    return JSON.parse(localStorage.getItem(type)) || {}
}

function setLocalStorage(key, id) {

    let obj = getLocalStorage(type);
    obj[key] = id;
    localStorage.setItem(type, JSON.stringify(obj))
}

function selectedOption(id, course) {
    setLocalStorage(course, id, type);
}

function downloadFile(text, name) {
    let a = document.createElement("a"); 
    let file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
}

function submit() {
    let comment = document.getElementById('icon_prefix2').value;
    setLocalStorage('comment', comment, type);
    downloadFile(JSON.stringify(getLocalStorage()), 'test.txt', 'txt');
}

function regExp(x) {
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(x);
}

function isValidateEmail(email) {
    let m = regExp(email);
    if (m) {
        setLocalStorage('email', email);
        return true;
    } else {
        alert("Email id must be valid");
    }
}

function isEmptyString(string) {
    if (!string || !string.trim()) {
        alert("enter valid name ");
        return false
    } else {
        setLocalStorage('name', string);
        return true;
    }
}

function login() {
    let name = document.getElementById('icon_prefix').value;
    let email = document.getElementById('icon_email').value;
    if (isValidateEmail(email) == true && isEmptyString(name) == true) {
        window.location.href = '../view/login.html';
    }
}


/*****************
 *
 * 1) Naming
2) Folder formats
3) util/Util.js, Email validation - HTML 5
4) storage/local.js - save /get
4)
5) Enum
6) Display function
7) Error handling
*

*
********************/