
document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "login.html"; 
});

document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menuBtn');
    var menuBox = document.querySelector('.menu-box');
    var overlay = document.getElementById('overlay');
  
    menuBtn.addEventListener('click', function () {
        menuBox.classList.toggle('show-menu');
        overlay.style.display = 'block';
    });
  
    overlay.addEventListener('click', function () {
        menuBox.classList.remove('show-menu');
        overlay.style.display = 'none';
    });
  });