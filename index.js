

document.addEventListener("DOMContentLoaded", () => {
    let aniButton = document.querySelector("#animalButton");

    aniButton.addEventListener("click", async (event) =>{
        event.preventDefault();

        let animalInput = document.querySelector("#aniSearch");
        let animalp = document.createElement("p");
        
        let res = await axios.get(`http://localhost:3000/animals/${animalInput.value}`);
        console.log(animalInput.value)
        console.log(res.data)
        animalp.innerHTML = `${res.data.status} ${res.data.message}`;
        let body = document.querySelector("body")
        body.appendChild(animalp)
        animalInput.value = "";

    })
})