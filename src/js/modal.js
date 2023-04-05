openModal(".modal-btn-five", ".modal[data-modal='five']");
openModal(".modal-btn-one", ".modal[data-modal='one']");
openModal(".modal-btn-two", ".modal[data-modal='two']");
openModal(".modal-btn-three", ".modal[data-modal='three']");
openModal(".modal-btn-four", ".modal[data-modal='four']");
openModal(".modal-btn-six", ".modal[data-modal='six']");
closeModal();
function openModal(triggerSelector, modalDataSelector) {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalDataSelector);

    if (!trigger || !modal) return;
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal_active");
    });
}


function closeModal() {
    const modals = document.querySelectorAll(".modal");
    if (!modals) return;
    modals.forEach(el => {
        el.addEventListener("click", e => {
            if (e.target.closest(".modal__close")) {
                el.classList.remove("modal_active");
            }
            if (!e.target.closest(".modal__body")) {
                el.classList.remove("modal_active");
            }
        });
    });
}
