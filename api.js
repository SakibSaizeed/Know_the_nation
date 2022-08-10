function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => console.log(data));
    //console.log("click");
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => displayFunction(data));
    //console.log("click");
}

function displayFunction(data) {
    //console.log(data);

    for (iterator of data) {
        //console.log(iterator.id);
        let ul = document.getElementById("ul-id");
        let creatli = document.createElement("li");
        let child = ul.appendChild(creatli);
        child.innerText = iterator.id;
    }
}