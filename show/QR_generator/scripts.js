const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value
    if(!qrValue) return  // If the input is empty return from here
    generateBtn.innerHTML = "Generating QR Code..."
    //getting a Qr code of the user entered alue using the qrserver
    // api and passinf the api return img src to qrimg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load", () => {  // Once QR code img loaded
        wrapper.classList.add("active")
        generateBtn.innerHTML = "Generate QR code"
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active")
    }
})