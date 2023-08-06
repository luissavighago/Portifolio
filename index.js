const getMobileMenu = () => {
  return document.querySelector(".nav-mobile-menu")
}

const mobileMenuIsActive = (menu) => {
  return menu.classList.contains("open")
}

const disableMobileMenu = (menu) => {
  menu.classList.remove("open");
}

const enableMobileMenu = (menu) => {
  menu.classList.add("open");
}

//menu responsivo
const mobileMenu = () => {
  let menu = getMobileMenu();
  mobileMenuIsActive(menu) ? disableMobileMenu(menu) : enableMobileMenu(menu)
}

const scrollToElement = (elementId) => {
  disableMobileMenu(getMobileMenu())
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
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
sr.reveal('.project-animation-right',{origin: 'bottom',distance: '100px',duration: 1000,delay:500});
sr.reveal('.project-animation-left',{origin: 'bottom',distance: '100px',duration: 1000,delay:500});

sr.reveal('#contact',{duration: 1000});
sr.reveal('.form-contact',{origin: 'bottom',distance: '100px',duration: 1000,delay:500});