// const teaType = 1;
// const answear = [1, 2, 3, 2, 1]

// const contestantAAnswer = answear[0]
// const contestantBAnswer = answear[1]
// const contestantCAnswer = answear[2]
// const contestantDAnswer = answear[3]
// const contestantEAnswer = answear[4]

// let i=teaType;

// for(i=0;i===contestantAAnswer;i++){
//     i+1
// }

// console.log(i)

// let resto = 6 % 50;
// console.log(resto)

// const lines =[5.0, 6.0, 7.0]

// const A = lines[0]*2; //10
// const B = lines[1]*3; //18
// const C = lines[2]*5; //35

// const media = (A+B+C)/10;

// console.log(`MEDIA = ${media.toFixed(1)}`);

// const lines = "140153";

// let value = parseInt(lines); //556s

// const horas = Math.floor(value/3600);
// value = value%3600;
// const minutos = Math.floor(value/60);
// value = value%60;

// console.log(`${horas}:${minutos}:${value}`)

// const lines = "400"

// let value = parseInt(lines); //400d

// const years = Math.floor(value/365); //1
// value = value%365; //35
// const months = Math.floor(value/30); //1
// const days = value%30; //5

// console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`)

var value = 576.73;

let notes = [100, 50, 20, 10, 5, 2];
let coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")

for(note of notes){
    let quantity = Math.floor(value/note); // 576.73/100
    console.log(`${quantity} nota(s) de R$ ${note}.00`);
    value = value%note; //76.73
}

console.log("MOEDAS:");