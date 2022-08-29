// let client = { id: 23, name: "client-1", ip: 1245235, job: "Manager" };
// let objToJsongStringify = JSON.stringify(client);
// console.log(client);
// console.log(objToJsongStringify);

let student = {
    name: "Isra Choudhury",
    id: 23,
    address: {
        homeTown: "Faridpur",
        ps: "Unknown",
        zip: 344523,
        bangladeshi: true,
        isReligionHinu: false,
    },
    subject: ["Math", "English", "History", "psychology"],
};
console.log(student);

// Object to JSON convert
let studentJson = JSON.stringify(student);
console.log(studentJson);

// Json To Object Convert
let objJson = JSON.parse(studentJson);
console.log(objJson);