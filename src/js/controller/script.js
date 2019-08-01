import Utility from './validation';
import storage from './storage';
import download from './download';
const type = 'feedback';
function selectedOption(id, course) {
    storage.setLocalStorage(course, id, type);
}

function submit() {
    let comment = document.getElementById('icon_prefix2').value;
    storage.setLocalStorage('comment', comment, type);
    download.downloadFile(JSON.stringify(storage.getLocalStorage(type)), 'test.txt', 'txt');
}

function login() {

    let name = document.getElementById('icon_prefix').value;
    let email = document.getElementById('icon_email').value;

    if (Utility.isValidEmail(email) == true && Utility.isEmpty(name) == true) {
        storage.setLocalStorage('email', email, type);
        storage.setLocalStorage('name', email, type);
        window.location.href = '../login.html';
    }
    else 
    document.getElementById('errorname').innerHTML="Invalid login credentials";
}
module.exports = {
    login, selectedOption, submit
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