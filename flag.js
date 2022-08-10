// Execute a function when the user presses a key on the keyboard
document.getElementById("searchbtn").addEventListener("click", function() {
    search();
    if (input.value == "") {
        alert("Please input a country name");
    }
});

let input = document.getElementById("search-field");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
});

function search() {
    const inputId = document.getElementById("search-field");
    const searchText = inputId.value;
    const url = `https://restcountries.com/v3.1/name/${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data));
}
//document.querySelector("body").style.background = "info";
document.querySelector("body").style.textAlign = "center";
document.getElementById("card-full").style.margin = "auto";

function displayData(data) {
    for (const i of data) {
        // console.log(i.name.common);
        const cardTitleid = document.getElementById("card-title");
        cardTitleid.innerText = i.name.common;
        const imgId = document.getElementById("img-id");
        imgId.src = i.flags.png;
        const capital = document.getElementById("card-text");
        capital.innerText = i.capital;
    }
    input.value = ""; //clear input field
}