window.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector(".menu");
    let items = document.querySelectorAll(".menu__item");
    let sections = document.querySelectorAll(".section");
  
    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu__link")) {
        e.preventDefault();
  
        let position = document.querySelector(e.target.hash).offsetTop - 80;
  
        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
      }
    });
    navInit(sections, items, "menu__item_active");

    window.addEventListener("scroll", () => {
      navInit(sections, items, "menu__item_active");
    })
    window.addEventListener('resize', () => {
      navInit(sections, items, "menu__item_active");
    });
});

function navInit(sections, items, activeClass) {
  sections.forEach(section => {
    if (window.pageYOffset >= section.offsetTop - 100)  {
      items.forEach(item => {
        item.classList.remove(activeClass);
        if (item.dataset.section == section.id) {
          item.classList.add(activeClass);
        }
      });
    }
  });
}