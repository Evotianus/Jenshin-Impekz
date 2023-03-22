// Maps - Modal / Pop up
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-modal-close]")
const mapDetail = document.querySelector(".map-detail")

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        // mapDetail.style.visibility = "visible"
        
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        // mapDetail.style.visibility = "hidden"

        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    
    modal.dataset.active = true
}

function closeModal(modal) {
    if (modal == null) return
    
    delete modal.dataset.active
}