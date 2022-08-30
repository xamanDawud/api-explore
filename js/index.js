let posts2 = "https://jsonplaceholder.typicode.com/users";

document.getElementById("alsoPosts").addEventListener("click", function() {
    fetch(posts2)
        .then((res) => res.json())
        .then((data) => getData2(data));
});

function createAndGetValue(data) {
    let ul = document.getElementById("lists");
    let li = document.createElement("li");
    li.innerText = data;
    ul.appendChild(li);
}

function getData2(data) {
    for (const post of data) {
        createAndGetValue(post.name);
    }
}