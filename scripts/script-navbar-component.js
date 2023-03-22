// Navbar - Menu Button
const menuIcon = document.querySelector(".navbar .menu-icon");
const menuIconList = document.querySelector(".menu-icon-list")

menuIcon.addEventListener('click', () => {
    if (menuIcon.dataset.active) {
        console.log("ada")
        menuIconList.style.top = "-1000px"
        delete menuIcon.dataset.active
    }
    else {
        console.log("ga ada")
        menuIconList.style.top = "0"
        menuIcon.dataset.active = true
    }
})