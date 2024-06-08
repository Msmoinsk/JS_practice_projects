const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button")

const executeCodes = () => {
    // If cookie contains coding lab it will be returned and below of this code will not run
    if(document.cookie.includes("Codinglab")) return;
    cookieBox.classList.add("show")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show")

            // if button has accepbtn id
            if(button.id == "acceptBtn"){
                // set cookie for a month. { 60 = 1 min, * 60 = 1 hour, * 24 = 1 day, * 30 = 30 days  }
                document.cookie = "cookieBy = Codinglab; max-age =" + 60 * 60 * 24 * 30;
            }
        })
    })
}

// Execute Codes Funcion will be called on webpage load
window.addEventListener("load", executeCodes)