// const age1 = [34, 54, 90, 44, 45, 30, 66];
// const age2 = [43, 13, 45, 75, 46, 78, 90];
// const allages = age1.concat([50]).concat(age2);
// const allages2 = [...age1, 50, ...age2];
// console.log(allages);

const businessman = 456;
const googler = 340;
const priminister = 850;
const takapoisa = [456, 340, 850];
// const maxiMum = Math.max(businessman, googler, priminister);
const maxiMum = Math.max(...takapoisa);
console.log(maxiMum);