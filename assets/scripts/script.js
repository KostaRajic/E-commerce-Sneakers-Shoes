// Funkcionalnost 1
const img1 = document.querySelector('.image1');
const img2 = document.querySelector('.image2');
const img3 = document.querySelector('.image3');
const img4 = document.querySelector('.image4');
const imgModal1 = document.querySelector('.modal1');
const imgModal2 = document.querySelector('.modal2');
const imgModal3 = document.querySelector('.modal3');
const imgModal4 = document.querySelector('.modal4');
const closeModal1 = document.querySelector('.close-modal1');
const closeModal2 = document.querySelector('.close-modal2');
const closeModal3 = document.querySelector('.close-modal3');
const closeModal4 = document.querySelector('.close-modal4');


img1.addEventListener('click', function() {
   imgModal1.style.display = 'block';
})

img2.addEventListener('click', function() {
   imgModal2.style.display = 'block';
})

img3.addEventListener('click', function() {
   imgModal3.style.display = 'block';
})

img4.addEventListener('click', function() {
   imgModal4.style.display = 'block';
})

closeModal1.addEventListener('click', function() {
   imgModal1.style.display = 'none';
})

closeModal2.addEventListener('click', function() {
   imgModal2.style.display = 'none';
})

closeModal3.addEventListener('click', function() {
   imgModal3.style.display = 'none';
})

closeModal4.addEventListener('click', function() {
   imgModal4.style.display = 'none';
})

// Funckionalnost 2
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const selection = document.querySelector('.selection');
const price = document.querySelector('.yourPrice');

let selectionPrice = 1;
let currentPrice = 125;

minus.addEventListener('click', function() {
   
   selectionPrice--;
   selection.innerText = selectionPrice;

   currentPrice -= 125;
   price.innerText = currentPrice;

   if( selectionPrice < 0) {
      alert('The number of sneakers cannot go below 0');
      selectionPrice = 0;
      selection.innerText = selectionPrice;

      currentPrice = 0;
      price.innerText = currentPrice;
   }
})
   

plus.addEventListener('click', function() {
   selectionPrice++;
   selection.innerText = selectionPrice;

   currentPrice += 125;
   price.innerText = currentPrice;
})

// Funckionalnost 3
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close-mobile-nav');

burgerMenu.addEventListener('click', function() {
   mobileNav.classList.add('open');
})

closeNav.addEventListener('click', function(e) {
   mobileNav.classList.remove('open');
})