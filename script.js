setTimeout(() => {
    
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


    // Maps - Modal / Pop up
    const openModalButtons = document.querySelectorAll("[data-modal-target]")
    const closeModalButtons = document.querySelectorAll("[data-modal-close]")

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)

            openModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest(".modal")

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


    // Characters - View Chara
    const mondstadtName = [
        "Jean",
        "Amber",
        "Lisa",
        "Kaeya",
        "Barbara"
    ]

    const mondstadtDescription = [
        "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
        "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
        "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
        "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
        "The Deaconess of the Church of Favonius and a shining idol adored by all. Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless."
    ]

    const mondstadtImage = [
        "Assets/Characters/Character-1.png",
        "Assets/Characters/Character-2.png",
        "Assets/Characters/Character-3.png",
        "Assets/Characters/Character-4.png",
        "Assets/Characters/Character-5.png",
    ]

    const button = document.querySelector(".switch-button")
    const characterName = document.querySelector(".characters-name p")
    const characterDescription = document.querySelector(".characters-description p")
    const characterImage = document.querySelector(".characters-detail")
    const characterList = document.querySelectorAll(".characters-card")
    
    // console.log(characterList)
    characterList.forEach((character, index) => {
        character.addEventListener('click', () => {
            const activeCharacter = document.querySelector("[data-active]")
            // console.log(index)
            characterName.innerHTML = mondstadtName[index]
            characterDescription.innerHTML = mondstadtDescription[index]
            characterImage.style.backgroundImage = "url('" + mondstadtImage[index] + "')"

            delete activeCharacter.dataset.active   
            characterList[index].dataset.active = true
        })
    })
    

    let characterIndex = 0;

    button.addEventListener('click', () => {
        characterIndex += 1;

        characterName.innerHTML = mondstadtName[characterIndex]
        characterDescription.innerHTML = mondstadtDescription[characterIndex]
        characterImage.style.backgroundImage = "url('" + mondstadtImage[characterIndex] + "')"

        if (characterIndex == 4) {
            characterIndex = -1
        }
    })
}, 100);