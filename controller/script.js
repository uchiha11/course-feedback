import num from './storage';
console.log(` imported the number again ${num}`);
let val = {};
const type = 'feedback';
function getFromLocalStorage(type) {
    return JSON.parse(localStorage.getItem(type)) || {}
}

function setInLocalStorage(key, id, type) {

    let obj = getFromLocalStorage(type);
    obj[key] = id;
    localStorage.setItem(type, JSON.stringify(obj))

}


function selectedOption(id, course) {
    console.log(id,course);
    
    setInLocalStorage(course, id, type);

}
function downloadFile(text, name, type) {
    let a = document.createElement("a"); //creates HTML element by tag name "a"
    let file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
}

function submit() {
    let comment = document.getElementById('icon_prefix2').value;
    //let page = document.getElementById('form').dataset.page;
    setInLocalStorage('comment', comment,type);

    downloadFile(JSON.stringify(getFromLocalStorage(type)), 'test.txt', 'txt');
}

function regExp(x) {

    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(x);
}

function isValidateEmail(email) {
    let m = regExp(email);

    if (m) {

        // diff btwn ==  // === ==> is used when comparing of the same datatype  

        setInLocalStorage('email', email, type);
        return true;
    }
    else {
        alert("Email id must be valid");


    }
}
function isEmptyString(string) { //trim
    //isEmptyString

    if (!string || !string.trim()) {
        alert("enter valid name ");
        return false
    }
    else {
        setInLocalStorage('name', string, type);
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
3) Util.js, save remote
4) Email validation - HTML 5
5) Enum
6) Display function
7) Error handling
*

*
********************/