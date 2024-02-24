const input = document.querySelector("#input");
const counter = document.querySelector(".contador");
const toggleButton = document.querySelector("#toggle");

let mode = "characters"

input.addEventListener("input", () => {

    let count = 0;

    if(mode === "characters") {
        count = input.value.length

        counter.textContent = `${count} caractere(s)`
        
    }else {

    }

})