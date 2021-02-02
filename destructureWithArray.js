// const friends = ["Arfin", "Chowdhury", "Arif", "AmirKhan", "ShahRukh khan"];
// // const [first, secondName, ...lastName] = friends;
// // console.log(first, secondName, lastName);

// const [...lastName] = friends;
// console.log(lastName);
const complexObject = {
    info: {
        Name: "Arfin Chowdhury Arif",
        Roll: 34
    }
}
const { Name } = complexObject.info;
console.log(Name);