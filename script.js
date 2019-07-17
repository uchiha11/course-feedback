
var val = {};

function get(){
return JSON.parse(localStorage.getItem('feedback')) || {}
}

function set(key,value){

    var obj= get();
    obj[key] = value;
    localStorage.setItem('feedback',JSON.stringify(obj))

}
function dis(value, question) {

if(question=='sdlc'){
    set('sdlc',value);
}

else if(question=='pdlc'){
    set('pdlc',value);}

   else if(question=='qa'){
        set('qa',value);
    }
        

}

function submit() {
    var comment = document.getElementById('icon_prefix2').value;
    var page = document.getElementById('form').dataset.page;
  set('comment',comment);
  
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a); 
    a.click();
  }

  download(JSON.stringify(get()),'test.txt','txt');
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

   set('name',name);
   set('email',email);


    if (m) {

        window.location.href = './login.html';

    }
    else
        alert("Email id must be valid")


}
