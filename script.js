let leftNav = document.querySelector('.left-nav');
let navgo = document.querySelector('.nav-go');
let hamb = document.querySelector('.hamb');
let cross = document.querySelector('.cross');

cross.style.display = 'none';
hamb.addEventListener('click', ()=>{
    leftNav.classList.add('nav-go');
    hamb.style.display = 'none';
    cross.style.display = 'block';
})

cross.addEventListener('click', ()=>{
    leftNav.classList.remove('nav-go');
    hamb.style.display = 'block';
    cross.style.display = 'none';
})