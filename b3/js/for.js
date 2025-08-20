console.group("vong lap for");
// for i
// console.group("for i")
// // dem nguoc 10 giay
// for (let i = 10; i > 0; i--){
//     setTimeout(function (){
//         console.log(i);
//     }, (10-i) * 1000);
// }
// setTimeout(() => console.log("Happy New Year!"),10000);
// console.groupEnd("for i")

//set interval
console.group("Set interval");
console.log(
  "Interval: ham lap lai sau ... ms -> muon dung thi -> clear interva; dung id"
);
const str = "Happy New Year!";
const charList = str.split("");
var count = 0;
const id = setInterval(() => {
  document.writeln(charList[count]);
  count++;
  if (count >= charList.length) {
    clearInterval(id);
  }
}, 1000);

console.groupEnd("Set interval");

// for each

//for of

//for in
console.groupEnd("vong lap for");
