
const sibling = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        sibling(card).forEach(el => {
            el.classList.add("card_sibling");
        })
    });
    card.addEventListener("mouseleave", () => {
        sibling(card).forEach(el => {
            el.classList.remove("card_sibling");
        })
    });
})