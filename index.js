const mobileMenu = () => {
  let menu = document.querySelector(".nav-mobile-menu")
  if(menu.classList.contains("open")){
    menu.classList.remove("open");
  }else{
    menu.classList.add("open");
  }
}