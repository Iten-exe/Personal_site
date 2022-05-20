const active = document.querySelector('.qwe');
const qwe1 = document.querySelector('.qwe1');
const qwe2 = document.querySelector('.qwe2');
const qwe3 = document.querySelector('.qwe3');
const qwe4 = document.querySelector('.qwe4');
const qwe5 = document.querySelector('.qwe5');

qwe1.addEventListener('click', () => {
   active.src = "img/product_img_start.png"
});

qwe2.addEventListener('click', () => {
   active.src = "img/product_img_passive_2.png"
});

qwe3.addEventListener('click', () => {
   active.src = "img/product_img_passive_3.png"
});

qwe4.addEventListener('click', () => {
   active.src = "img/product_img_passive_4.png"
});

qwe5.addEventListener('click', () => {
   active.src = "img/product_img_passive_5.png"
});