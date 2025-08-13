console.group("Lenh dieu kien if - else")

const arr = [];
const obj = {};
const obji = {name : "a" , age : 14545345};

// {} chua nhieu hon 1 cau lenh
//arr rong tra ve true -> khong the kiem tra bang if(arr) -> arr.length()
if (arr.length){
    console.log(arr);
}else console.log("khong co gia tri")

//toan tu ? + HTML DOM
const tag = document.querySelector("#tag")
if (tag) {
    tag.addEventListener("click",() =>console.log("clicked"));
}else console.log("khong co gia tri")

tag?.addEventListener("click",() =>console.log("clicked"));

console.groupEnd("Lenh dieu kien if - else")