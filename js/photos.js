// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => res.json())
//     .then((data) => getPhoto(data));

// function getPhoto(data) {
//     document.getElementById("btn").addEventListener("click", function() {
//         let section = document.getElementById("photo-section");
//         for (let photo of data) {
//             let div = document.createElement("div");
//             div.innerHTML = `
//                 <p>Id is : ${photo.id}</p>
//                 <p>Phot Title is  : ${photo.title}</p>
//                 <img src='${photo.thumbnailUrl}'/>
//                 <p>${photo.url}</p>
//             `;
//             section.appendChild(div);
//         }
//     });
// }

fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => getPhoto(data));

function getPhoto(data) {
    document.getElementById("btn").addEventListener("click", function() {
        let section = document.getElementById("photo-section");
        for (let i = 0; i < 20 && i < data.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = `
                <p>Id is : ${data[i].id}</p>
                <p>Phot Title is  : ${data[i].title}</p>
                <img src='${data[i].thumbnailUrl}'/>
                <p>${data[i].url}</p>
            `;
            section.appendChild(div);
        }
    });
}