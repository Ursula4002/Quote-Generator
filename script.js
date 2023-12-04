const button = document.getElementById("button");
const displayQuote = document.getElementById("displayQuote");
const btnAdd = document.getElementById("ownQuote");
const ownQuoteDisplay = document.getElementById("ownQuoteDisplay");
const writeAQuote = document.getElementById("writeAQuote");

let motivationalQuote = [
    "Keep smilling because life's a beautiful thing and there's so much to smile 'bout",
    "Life is either a daring adventure or nothing at all",
    "When things go wrong don't go with them",
    "Happiness never decreases by being shared",
    "No one can make you feel inferior without your consent",
    "Like is like riding a bike , to keep your balance you must moving moving"
]

function generateQuote() {
    length = motivationalQuote.length
    let index = Math.floor(Math.random() * length);
    displayQuote.textContent = motivationalQuote[index];
}

function addQuote(value) {
    if (value.trim() != "") {
        motivationalQuote.push(value);
    }
    else {
        alert('Sorry, you can not enter this !')
    }
}

button.addEventListener("click", generateQuote);
btnAdd.addEventListener("click", () => {
    addQuote(writeAQuote.value)
    writeAQuote.value = "";
});