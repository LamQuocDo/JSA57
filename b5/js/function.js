//Định nghĩa: là khối lệnh thực thi mọt nhiệm vụ cụ thể
//công dụng: tạo và tách code để tái sử dụng + làm gọn code

function functionName(parameter){
    //khối lệnh
    console.log(parameter, "tham so");
    return "tra ve gia tri cu the";
}

functionName(15)





//hàm no name
console.log((function (a,b) {return a + b})(10,5))

//arrow function
document.body. addEventListener('click' ,() => console.log("clicked"))
const sum = (a,b) => a+b
console.log(sum(2,4))

//context

// document.querySelector("#btn").addEventListener("click", ()=>
//     console.log(this)
// )

document.querySelector("#btn").addEventListener("click", function(e){
    console.log(this)
})