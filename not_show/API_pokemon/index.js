/* PROMISES : This is API fetching through the PROMISES */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch Pokemon")
//     }
//     return response.json()
// })
// .then(data => console.log(data.weight))
// .catch(error => console.error(error));


/* Async/Await : This is API fetching through the Async/Await */

// async function fetchData(){
//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//         if(!response.ok){
//             throw new Error("Could not Locate Pokemon")
//         }else{
//             const data = await response.json()
//             console.log(data.types)

//             /* this is how to access the element in the nested object */
//             // data.types.forEach(object => {
//             //     console.log(object.type.name)
//             // });
//         }
//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData()

async function fetchData(){
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        // Fetching the Element From API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Pokemon Not Fetch")
        }else{
            const data = await response.json()

            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite")

            imgElement.src = pokemonSprite
            imgElement.style.display = "block"
        }

    } catch (error) {
        alert(error)
    }
}