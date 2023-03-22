// Homepage - Carousel
setInterval(() => {
    const slides = document.querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    
    console.log("halo")
    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    
    if (newIndex >= 4) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}, 5000)