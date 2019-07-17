var stored = 0;
var count = 0;

function dis(value) {
    count++;

    var val = [];

    val[0] = value;
    localStorage.setItem("values", JSON.stringify(val));


    var storedValues = JSON.parse(localStorage.getItem("values"));

    storedValues = parseInt(storedValues);
    stored = stored + storedValues;
    console.log("current rating is " + storedValues);

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

    else alert(`Overrall rating for course ${page} is Excellent . ${rating}`);

   alert(comments);

      }

      function login() {
        window.location.href = './login.html';
        var name=document.getElementById('icon_prefix').value;
        var email=document.getElementById('icon_email').value;
        console.log(` My name is ${name} and my email ${email}`);
      }
