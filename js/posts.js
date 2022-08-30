document.getElementById("btn").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => getPosts(data));
});

function getPosts(data) {
    let div = document.getElementById("posts");
    for (const post of data) {
        let newRes = document.createElement("article");
        newRes.innerHTML = `<h4>The user id is : ${post.id}</h4>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        newRes.classList.add("post-style");
        div.appendChild(newRes);
        console.log(newRes);
    }
}