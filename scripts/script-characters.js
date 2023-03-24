// Characters - View Character (Mondstadt)
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
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Mondstadt/Character-1.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Mondstadt/Character-2.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Mondstadt/Character-3.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Mondstadt/Character-4.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Mondstadt/Character-5.png?raw=true",
]



const mondstadtNextButton = document.querySelector(".mondstadt-next-button")
const mondstadtPrevButton = document.querySelector(".mondstadt-previous-button")
const mondstadtNextResponsiveButton = document.querySelector(".mondstadt-next-responsive-button")
const mondstadtPrevResponsiveButton = document.querySelector(".mondstadt-previous-responsive-button")
const mondstadtCharacterName = document.querySelector(".mondstadt-characters-name p")
const mondstadtCharacterDescription = document.querySelector(".mondstadt-characters-description p")
const mondstadtCharacterImage = document.querySelector(".mondstadt-characters-detail")
const mondstadtCharacterList = document.querySelectorAll(".mondstadt-characters-card")

mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[0] + "')"

let mondstadtCharacterIndex = 0;

mondstadtCharacterList.forEach((character, index) => {
    character.addEventListener('click', () => {
        const activeCharacter = document.querySelector(".mondstadt-characters-list [data-active]")
        // console.log(index)
        mondstadtCharacterName.innerHTML = mondstadtName[index]
        mondstadtCharacterDescription.innerHTML = mondstadtDescription[index]
        mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[index] + "')"

        console.log(activeCharacter.dataset)
        delete activeCharacter.dataset.active
        mondstadtCharacterList[index].dataset.active = true

        mondstadtCharacterIndex = index
    })
})

mondstadtNextButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".mondstadt-characters-list [data-active]")

    mondstadtCharacterIndex += 1;

    if (mondstadtCharacterIndex == 5) {
        mondstadtCharacterIndex = 0
    }
    
    mondstadtCharacterName.innerHTML = mondstadtName[mondstadtCharacterIndex]
    mondstadtCharacterDescription.innerHTML = mondstadtDescription[mondstadtCharacterIndex]
    mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[mondstadtCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    mondstadtCharacterList[mondstadtCharacterIndex].dataset.active = true


})

mondstadtPrevButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".mondstadt-characters-list [data-active]")

    mondstadtCharacterIndex -= 1;

    if (mondstadtCharacterIndex < 0) {
        mondstadtCharacterIndex = 4
    }

    mondstadtCharacterName.innerHTML = mondstadtName[mondstadtCharacterIndex]
    mondstadtCharacterDescription.innerHTML = mondstadtDescription[mondstadtCharacterIndex]
    mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[mondstadtCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    mondstadtCharacterList[mondstadtCharacterIndex].dataset.active = true
})

// For responsive one
mondstadtNextResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".mondstadt-characters-list [data-active]")

    mondstadtCharacterIndex += 1;

    if (mondstadtCharacterIndex == 5) {
        mondstadtCharacterIndex = 0
    }
    
    mondstadtCharacterName.innerHTML = mondstadtName[mondstadtCharacterIndex]
    mondstadtCharacterDescription.innerHTML = mondstadtDescription[mondstadtCharacterIndex]
    mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[mondstadtCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    mondstadtCharacterList[mondstadtCharacterIndex].dataset.active = true
})

mondstadtPrevResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".mondstadt-characters-list [data-active]")

    mondstadtCharacterIndex -= 1;

    if (mondstadtCharacterIndex < 0) {
        mondstadtCharacterIndex = 4
    }

    mondstadtCharacterName.innerHTML = mondstadtName[mondstadtCharacterIndex]
    mondstadtCharacterDescription.innerHTML = mondstadtDescription[mondstadtCharacterIndex]
    mondstadtCharacterImage.style.backgroundImage = "url('" + mondstadtImage[mondstadtCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    mondstadtCharacterList[mondstadtCharacterIndex].dataset.active = true
})


// Liyue
const liyueName = [
    "Xiao",
    "Chongyun",
    "Keqing",
    "Zhongli",
    "Hu Tao"
]

const liyueDescription = [
    "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
    "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
    "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
    "The Deaconess of the Church of Favonius and a shining idol adored by all. Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless."
]

const liyueImage = [
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Liyue/Character-1.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Liyue/Character-2.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Liyue/Character-3.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Liyue/Character-4.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Liyue/Character-5.png?raw=true",
]

const liyueNextButton = document.querySelector(".liyue-next-button")
const liyuePrevButton = document.querySelector(".liyue-previous-button")
const liyueNextResponsiveButton = document.querySelector(".liyue-next-responsive-button")
const liyuePrevResponsiveButton = document.querySelector(".liyue-previous-responsive-button")
const liyueCharacterName = document.querySelector(".liyue-characters-name p")
const liyueCharacterDescription = document.querySelector(".liyue-characters-description p")
const liyueCharacterImage = document.querySelector(".liyue-characters-detail")
const liyueCharacterList = document.querySelectorAll(".liyue-characters-card")

liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[0] + "')"

liyueCharacterList.forEach((character, index) => {
    character.addEventListener('click', () => {
        const activeCharacter = document.querySelector(".liyue-characters-list [data-active]")
        // console.log(index)
        liyueCharacterName.innerHTML = liyueName[index]
        liyueCharacterDescription.innerHTML = liyueDescription[index]
        liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[index] + "')"

        console.log(activeCharacter.dataset)
        delete activeCharacter.dataset.active
        liyueCharacterList[index].dataset.active = true
    })
})

let liyueCharacterIndex = 0;

liyueNextButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".liyue-characters-list [data-active]")

    liyueCharacterIndex += 1;

    if (liyueCharacterIndex == 5) {
        liyueCharacterIndex = 0
    }
    
    liyueCharacterName.innerHTML = liyueName[liyueCharacterIndex]
    liyueCharacterDescription.innerHTML = liyueDescription[liyueCharacterIndex]
    liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[liyueCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    liyueCharacterList[liyueCharacterIndex].dataset.active = true
})

liyuePrevButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".liyue-characters-list [data-active]")

    liyueCharacterIndex -= 1;

    if (liyueCharacterIndex < 0) {
        liyueCharacterIndex = 4
    }

    liyueCharacterName.innerHTML = liyueName[liyueCharacterIndex]
    liyueCharacterDescription.innerHTML = liyueDescription[liyueCharacterIndex]
    liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[liyueCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    liyueCharacterList[liyueCharacterIndex].dataset.active = true
})

// For responsive one
liyueNextResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".liyue-characters-list [data-active]")

    liyueCharacterIndex += 1;

    if (liyueCharacterIndex == 5) {
        liyueCharacterIndex = 0
    }
    
    liyueCharacterName.innerHTML = liyueName[liyueCharacterIndex]
    liyueCharacterDescription.innerHTML = liyueDescription[liyueCharacterIndex]
    liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[liyueCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    liyueCharacterList[liyueCharacterIndex].dataset.active = true
})

liyuePrevResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".liyue-characters-list [data-active]")

    liyueCharacterIndex -= 1;

    if (liyueCharacterIndex < 0) {
        liyueCharacterIndex = 4
    }

    liyueCharacterName.innerHTML = liyueName[liyueCharacterIndex]
    liyueCharacterDescription.innerHTML = liyueDescription[liyueCharacterIndex]
    liyueCharacterImage.style.backgroundImage = "url('" + liyueImage[liyueCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    liyueCharacterList[liyueCharacterIndex].dataset.active = true
})


// Inazuma
const inazumaName = [
    "Kazuha",
    "Yoimiya",
    "Kokomi",
    "Yae Miko",
    "Shinobu"
]

const inazumaDescription = [
    "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
    "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
    "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
    "The Deaconess of the Church of Favonius and a shining idol adored by all. Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless."
]

const inazumaImage = [
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Inazuma/Character-1.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Inazuma/Character-2.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Inazuma/Character-3.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Inazuma/Character-4.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Inazuma/Character-5.png?raw=true",
]

const inazumaNextButton = document.querySelector(".inazuma-next-button")
const inazumaPrevButton = document.querySelector(".inazuma-previous-button")
const inazumaNextResponsiveButton = document.querySelector(".inazuma-next-responsive-button")
const inazumaPrevResponsiveButton = document.querySelector(".inazuma-previous-responsive-button")
const inazumaCharacterName = document.querySelector(".inazuma-characters-name p")
const inazumaCharacterDescription = document.querySelector(".inazuma-characters-description p")
const inazumaCharacterImage = document.querySelector(".inazuma-characters-detail")
const inazumaCharacterList = document.querySelectorAll(".inazuma-characters-card")

inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[0] + "')"

inazumaCharacterList.forEach((character, index) => {
    character.addEventListener('click', () => {
        const activeCharacter = document.querySelector(".inazuma-characters-list [data-active]")
        // console.log(index)
        inazumaCharacterName.innerHTML = inazumaName[index]
        inazumaCharacterDescription.innerHTML = inazumaDescription[index]
        inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[index] + "')"

        console.log(activeCharacter.dataset)
        delete activeCharacter.dataset.active
        inazumaCharacterList[index].dataset.active = true
    })
})

let inazumaCharacterIndex = 0;

inazumaNextButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".inazuma-characters-list [data-active]")

    inazumaCharacterIndex += 1;

    if (inazumaCharacterIndex == 5) {
        inazumaCharacterIndex = 0
    }
    
    inazumaCharacterName.innerHTML = inazumaName[inazumaCharacterIndex]
    inazumaCharacterDescription.innerHTML = inazumaDescription[inazumaCharacterIndex]
    inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[inazumaCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    inazumaCharacterList[inazumaCharacterIndex].dataset.active = true
})

inazumaPrevButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".inazuma-characters-list [data-active]")

    inazumaCharacterIndex -= 1;

    if (inazumaCharacterIndex < 0) {
        inazumaCharacterIndex = 4
    }

    inazumaCharacterName.innerHTML = inazumaName[inazumaCharacterIndex]
    inazumaCharacterDescription.innerHTML = inazumaDescription[inazumaCharacterIndex]
    inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[inazumaCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    inazumaCharacterList[inazumaCharacterIndex].dataset.active = true
})

// For responsive one
inazumaNextResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".inazuma-characters-list [data-active]")

    inazumaCharacterIndex += 1;

    if (inazumaCharacterIndex == 5) {
        inazumaCharacterIndex = 0
    }
    
    inazumaCharacterName.innerHTML = inazumaName[inazumaCharacterIndex]
    inazumaCharacterDescription.innerHTML = inazumaDescription[inazumaCharacterIndex]
    inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[inazumaCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    inazumaCharacterList[inazumaCharacterIndex].dataset.active = true
})

inazumaPrevResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".inazuma-characters-list [data-active]")

    inazumaCharacterIndex -= 1;

    if (inazumaCharacterIndex < 0) {
        inazumaCharacterIndex = 4
    }

    inazumaCharacterName.innerHTML = inazumaName[inazumaCharacterIndex]
    inazumaCharacterDescription.innerHTML = inazumaDescription[inazumaCharacterIndex]
    inazumaCharacterImage.style.backgroundImage = "url('" + inazumaImage[inazumaCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    inazumaCharacterList[inazumaCharacterIndex].dataset.active = true
})


// Sumeru
const sumeruName = [
    "Cyno",
    "Nahida",
    "Layla",
    "Alhaitham",
    "Dehya"
]

const sumeruDescription = [
    "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
    "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
    "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
    "The Deaconess of the Church of Favonius and a shining idol adored by all. Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless."
]

const sumeruImage = [
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Sumeru/Character-1.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Sumeru/Character-2.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Sumeru/Character-3.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Sumeru/Character-4.png?raw=true",
    "https://github.com/Evotianus/Jenshin-Impekz/blob/master/Assets/Characters/Sumeru/Character-5.png?raw=true",
]

const sumeruNextButton = document.querySelector(".sumeru-next-button")
const sumeruPrevButton = document.querySelector(".sumeru-previous-button")
const sumeruNextResponsiveButton = document.querySelector(".sumeru-next-responsive-button")
const sumeruPrevResponsiveButton = document.querySelector(".sumeru-previous-responsive-button")
const sumeruCharacterName = document.querySelector(".sumeru-characters-name p")
const sumeruCharacterDescription = document.querySelector(".sumeru-characters-description p")
const sumeruCharacterImage = document.querySelector(".sumeru-characters-detail")
const sumeruCharacterList = document.querySelectorAll(".sumeru-characters-card")

sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[0] + "')"

sumeruCharacterList.forEach((character, index) => {
    character.addEventListener('click', () => {
        const activeCharacter = document.querySelector(".sumeru-characters-list [data-active]")
        // console.log(index)
        sumeruCharacterName.innerHTML = sumeruName[index]
        sumeruCharacterDescription.innerHTML = sumeruDescription[index]
        sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[index] + "')"

        console.log(activeCharacter.dataset)
        delete activeCharacter.dataset.active
        sumeruCharacterList[index].dataset.active = true
    })
})

let sumeruCharacterIndex = 0;

sumeruNextButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".sumeru-characters-list [data-active]")

    sumeruCharacterIndex += 1;

    if (sumeruCharacterIndex == 5) {
        sumeruCharacterIndex = 0
    }
    
    sumeruCharacterName.innerHTML = sumeruName[sumeruCharacterIndex]
    sumeruCharacterDescription.innerHTML = sumeruDescription[sumeruCharacterIndex]
    sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[sumeruCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    sumeruCharacterList[sumeruCharacterIndex].dataset.active = true
})

sumeruPrevButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".sumeru-characters-list [data-active]")

    sumeruCharacterIndex -= 1;

    if (sumeruCharacterIndex < 0) {
        sumeruCharacterIndex = 4
    }

    sumeruCharacterName.innerHTML = sumeruName[sumeruCharacterIndex]
    sumeruCharacterDescription.innerHTML = sumeruDescription[sumeruCharacterIndex]
    sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[sumeruCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    sumeruCharacterList[sumeruCharacterIndex].dataset.active = true
})

// For responsive one
sumeruNextResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".sumeru-characters-list [data-active]")

    sumeruCharacterIndex += 1;

    if (sumeruCharacterIndex == 5) {
        sumeruCharacterIndex = 0
    }
    
    sumeruCharacterName.innerHTML = sumeruName[sumeruCharacterIndex]
    sumeruCharacterDescription.innerHTML = sumeruDescription[sumeruCharacterIndex]
    sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[sumeruCharacterIndex] + "')"

    delete activeCharacter.dataset.active
    sumeruCharacterList[sumeruCharacterIndex].dataset.active = true
})

sumeruPrevResponsiveButton.addEventListener('click', () => {
    const activeCharacter = document.querySelector(".sumeru-characters-list [data-active]")

    sumeruCharacterIndex -= 1;

    if (sumeruCharacterIndex < 0) {
        sumeruCharacterIndex = 4
    }

    sumeruCharacterName.innerHTML = sumeruName[sumeruCharacterIndex]
    sumeruCharacterDescription.innerHTML = sumeruDescription[sumeruCharacterIndex]
    sumeruCharacterImage.style.backgroundImage = "url('" + sumeruImage[sumeruCharacterIndex] + "')"
    
    delete activeCharacter.dataset.active
    sumeruCharacterList[sumeruCharacterIndex].dataset.active = true
})