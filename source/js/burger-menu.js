let burgerBtn = document.querySelector('.nav__burger');
let navList = document.querySelector('.nav__list');
let pageBody = document.querySelector('.page-body');
let navLink = document.querySelectorAll('.nav__link');

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('nav__burger--active');
  navList.classList.toggle('nav__list--show');
  pageBody.classList.toggle('page-body--lock');
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    burgerBtn.classList.remove('nav__burger--active');
    navList.classList.remove('nav__list--show');
    pageBody.classList.remove('page-body--lock');
  })
}
