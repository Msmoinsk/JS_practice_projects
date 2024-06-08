const wrapper = document.querySelector(".wrapper"),
form = document.querySelector("form"),
fileInp = form.querySelector("input"),
infoText = form.querySelector("p"),
closeBtn = document.querySelector(".close"),
copyBtn = document.querySelector(".copy");


function fetchRequest(formData, file){
    infoText.innerText = "Scanning QR Code...."
    // Sending post request to the qr server api with passing 
    // form data as the body and getting response from it
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data
        
        infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
        if(!result) return;
        document.querySelector("textarea").innerText = result
        
        form.querySelector("img").src = URL.createObjectURL(file)
        wrapper.classList.add("active")
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code"
    })
}

fileInp.addEventListener("change", async(e) => {
    let file = e.target.files[0]   // getting user selected file 
    if(!file) return
    let formData = new FormData()  //  creating a new FormData object
    formData.append("file", file)  // adding selected file to formData
    fetchRequest(formData, file)
})

copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent
    navigator.clipboard.writeText(text)
    copyBtn.innerHTML = "Copied"
    setTimeout(() => {copyBtn.innerText = "Copy Text"},1000)
})

closeBtn.addEventListener("click", () => wrapper.classList.remove("active"))

form.addEventListener("click", () => fileInp.click())
