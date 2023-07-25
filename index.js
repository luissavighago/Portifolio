//menu responsivo
const mobileMenu = () => {
  let menu = document.querySelector(".nav-mobile-menu")
  if(menu.classList.contains("open")){
    menu.classList.remove("open");
  }else{
    menu.classList.add("open");
  }
}

//animações onScroll
window.sr = ScrollReveal({reset:true});
sr.reveal('#home-info-itens-1',{origin: 'top',distance: '50px',duration: 1000,delay:300});
sr.reveal('#home-info-itens-2',{origin: 'top',distance: '50px',duration: 1000,delay:400});
sr.reveal('#home-info-itens-3',{origin: 'top',distance: '50px',duration: 1000,delay:600});
sr.reveal('#home-info-itens-4',{origin: 'top',distance: '50px',duration: 1000,delay:700});

sr.reveal('#about',{duration: 1000});

sr.reveal('#skills',{duration: 1000});
sr.reveal('.skill-img',{origin: 'bottom',distance: '100px',rotate: {x:80, y:80,z:0},duration:1000,delay:500});

sr.reveal('#projects',{duration: 1000});
sr.reveal('.project-animation-right',{origin: 'right',distance: '100px',duration: 1000,delay:500});
sr.reveal('.project-animation-left',{origin: 'left',distance: '100px',duration: 1000,delay:500});

sr.reveal('#contact',{duration: 1000});
sr.reveal('.form-contact',{origin: 'right',distance: '100px',duration: 1000,delay:500});