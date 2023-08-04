const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});



window.addEventListener('load', function() {
    var splashScreen = document.getElementById('splash-screen');
    setTimeout(function() {
        splashScreen.classList.add('hide');
    }, 100);
});

function copy(contact) {
    var input = document.createElement("input");
    input.setAttribute("value", contact);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    var alert = document.getElementById('alert');
    document.getElementById("alert__text").innerHTML = contact
    alert.classList.remove('hidden');
    setTimeout(function() {
            alert.classList.add('hidden');
    }, 2000);
};

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
  });
