// let rows = parseInt(prompt("So dong cua tam giac "))
// let s = ""
// for (let i = 0; i < rows; i++){
//     for (let j = 1; j <= i; j++){
//         s += j
//     }
//     s += "\n"
// }
// console.log(s)


let strInp = prompt("Nhap chuoi: ")
let newStr = ""
for(let i = strInp.length - 1;i >= 0; i--){
    newStr += strInp[i]
}
console.log(newStr)