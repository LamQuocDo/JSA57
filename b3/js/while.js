// // do - while
// // vong lap vo han
// console.group("Vong lap while");

// console.log("while( dieu kien) -> lap lai den khi dieu kien sai");
// //lap den khi nguoi dung dien dung thong tin
// var account = {username : "abc", password :"123"}
// var infoInp = prompt("Nhap username, password: ").trim();
// while (infoInp){
//     try{
//         const usernameInp = infoInp.split(",")[0].trim();
//         const passwordInp = infoInp.split(",")[1].trim();
//         if (usernameInp != account.username){
//             alert("sai username");
//             infoInp = "";
//         } else if (passwordInp != account.password){
//             alert("sai password");
//             infoInp = "";
//         } else {
//             const isOk = confirm(`Login \n username : ${usernameInp} \n password: ${passwordInp}`);
//             if (isOk){
//                 console.warn("dang nhap thanh cong");
//                 break;
//             } else{
//                 alert ("nguoi dung khong chap nhan dang nhap")
//                 infoInp = "";
//             }
//         }
//     }catch(error){
//         console.error(error);
//         infoInp = "";
//     }

// }

// console.groupEnd("Vong lap while");



// do - while
// console.group("vong lap do - while");

// var input = parseInt(prompt("Nhap so nguyen duong: "));
// do {
//     input ++
//     console.log(input)
// } while (input < 0)

// console.groupEnd("vong lap do - while");

