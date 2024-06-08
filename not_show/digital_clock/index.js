function updtaeClock(){
    const now = new Date()
    let hours = now.getHours()
    const merideim = hours >= 12 ? "PM" : "AM"
    hours = hours % 12  || 12
    hours = hours.toString().padStart(2,0)
    const minutes  = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0)
    const timestrings = `${hours}:${minutes}:${seconds} ${merideim}`
    document.getElementById("clock").textContent = timestrings
}
updtaeClock()
setInterval(updtaeClock, 1000)