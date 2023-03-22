// Register - Validation
const registerForm = document.querySelector(".register-form")
const inputButton = document.querySelector(".register-form .register-input .input-button")

let inputName = document.querySelector(".input-name")
let inputEmail = document.querySelector(".input-email")
let inputPassword = document.querySelector(".input-password")
let inputAge = document.querySelector(".input-age")
let inputAgreement = document.querySelector(".input-agreement")

let inputNameError = document.querySelector(".input-name ~ p")
let inputEmailError = document.querySelector(".input-email ~ p")
let inputPasswordError = document.querySelector(".input-password ~ p")
let inputAgeError = document.querySelector(".input-age ~ p")
let inputAgreementError = document.querySelector(".agreement-container ~ p")

const successElement = document.querySelector(".success-container")
const errorElement = document.querySelector(".error-container")
const errorNotification = document.querySelector(".error-container p")


// console.log(registerForm)

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let isValid = true
    let isNameValid = true
    let isEmailValid = true
    let isPasswordValid = true
    let isAgeValid = true
    let isAgreementChecked = true
    let errorText = ""

    if (inputName.value.length < 8) {
        console.log("Error Nama")
        errorText += "- Name must be at least 8 letter!<br>"
        inputNameError.innerHTML = "Name must be at least 8 letter!"
        inputName.classList.add("error-input")
        isValid = false
        isNameValid = false
    }
    
    if (!inputEmail.value.includes("@gmail.com")) {
        console.log("Error Email")
        errorText += "- Email must be valid! (@gmail.com)<br>"
        inputEmailError.innerHTML = "Email must be valid! (@gmail.com)!"
        inputEmail.classList.add("error-input")
        isValid = false
        isEmailValid = false
    }
    
    if (inputPassword.value.length < 8) {
        console.log("Error Password")
        errorText += "- Password must be at least 8 letter!<br>"
        inputPasswordError.innerHTML = "Password must be at least 8 letter!"
        inputPassword.classList.add("error-input")
        isValid = false
        isPasswordValid = false
    }
    
    if (inputAge.value < 12) {
        console.log("Error Age")
        errorText += "- Age must be minimum of 12 y/o!<br>"
        inputAgeError.innerHTML = "Age must be minimum of 12 y/o!"
        inputAge.classList.add("error-input")
        isValid = false
        isAgeValid = false
    }
    
    if (!inputAgreement.checked) {
        console.log("Error Agreement")
        errorText += "- Agreement must be checked!<br>"
        inputAgreementError.innerHTML = "Agreement must be checked!"
        inputAgreement.classList.add("error-input")
        isValid = false
        isAgreementChecked = false
    }


    if (isNameValid) {
        (inputName.classList.contains("error-input")) ? inputName.classList.remove("error-input") : 0
        inputNameError.innerHTML = ""
    }
    
    if (isEmailValid) {
        (inputEmail.classList.contains("error-input")) ? inputEmail.classList.remove("error-input") : 0
        inputEmailError.innerHTML = ""
    }
    
    if (isPasswordValid) {
        (inputPassword.classList.contains("error-input")) ? inputPassword.classList.remove("error-input") : 0
        inputPasswordError.innerHTML = ""
    }
    
    if (isAgeValid) {
        (inputAge.classList.contains("error-input")) ? inputAge.classList.remove("error-input") : 0
        inputAgeError.innerHTML = ""
    }
    
    if (isAgreementChecked) {
        (inputAgreement.classList.contains("error-input")) ? inputAgreement.classList.remove("error-input") : 0
        inputAgreementError.innerHTML = ""
    }


    if (!isValid) {
        console.log("hi")
        errorNotification.innerHTML = errorText
        errorElement.style.right = "3vh"

        setTimeout(() => {
            errorElement.style.right = "-100%"
        }, 4000);
    } else {
        successElement.style.right = "3vh"
        
        setTimeout(() => {
            successElement.style.right = "-100%"
        }, 4000);
    }
})