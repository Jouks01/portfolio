let navbar = document.getElementById('navbar');
let listMenu = document.getElementById('list-menu');
let aProposText = document.getElementsByClassName('a-propos-text')[0];
let navLink = document.getElementsByClassName('nav-link');

const reduceText = function() {
    if (window.innerWidth > 1200) {
        aProposText.style.fontSize = '2rem';
    } else if (window.innerWidth > 900) {
        aProposText.style.fontSize = '1.8rem';
    } else if (window.innerWidth > 600){
        aProposText.style.fontSize = '1.5rem';
    } else if (window.innerWidth > 450){
        aProposText.style.fontSize = '1.3rem';
    } else {
        aProposText.style.fontSize = '1.1rem';
    };
};

window.onload = function() {
    document.getElementsByTagName('header')[0].style.boxShadow = '4px 4px 10px black';
    aProposText.style.width = '100%';
    aProposText.style.color = '#030324';
    reduceText();
};

listMenu.onclick = function() {
   if (navbar.style.display === 'none') {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    };
};

window.onresize = function() {
    if (window.innerWidth > 950) {
         navbar.style.display = 'flex'
    }  else {
        navbar.style.display = 'none'
    };
   reduceText();
};

for (let i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function() {
        if (window.innerWidth < 950) {
            navbar.style.display = 'none'
        } else {
            navbar.style.display = 'flex'
        };
    }
};