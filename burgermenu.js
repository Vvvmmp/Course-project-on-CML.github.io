document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var menuItems = document.querySelector('.group2 ul');
  
    burgerMenu.addEventListener('click', function() {
      menuItems.classList.toggle('show');
      burgerMenu.classList.toggle('menu-open');
    });
  });