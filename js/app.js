let posts = "https://jsonplaceholder.typicode.com/users";

document.getElementById("posts").addEventListener("click", function() {
    fetch(posts)
        .then((res) => res.json())
        .then((data) => getData(data));
});

function getData(data) {
    console.log(data[0]);
}