function isValidEmail(email) {
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(email);
}
 function isEmpty(string) {
    if (!string || !string.trim()) {
        return false
    }
    else {
        return true;
    }
}
export default {
    isValidEmail,
    isEmpty
}
