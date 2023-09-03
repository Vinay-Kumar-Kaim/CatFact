const url = "https://catfact.ninja/fact";
let facts = document.querySelector(".facts");
let btn = document.querySelector("#new");

btn.addEventListener('click', () => {

    getCatFacts();
})



async function getCatFacts() {
    let response = await fetch(url);
    let result = await response.json();

    facts.innerHTML = result.fact;

}

