// // khai bao
// const arr1 = [];

// const arr2 = [null, 1, "s", 1.2, false, undefined]

// const arr3 = Array(10); // mang chua phan tu trong (empty)

// // truy xuat phan tu
// console.log(arr1[1]) // out of range -> undefined
// console.log(arr2[arr2.lenght - 1]) // phan tu cuoi cung trong danh sach
// console.log(arr3[9]) // truy cap phan tu empty

// // duyet phan tu
// // for i -> hien thi ca phan tu undefined (khong co gia tri/ empty)
// for (let i = 0; i < arr3.lenght; i++){
//     console.log(arr3[i]);
// }
// //for each -> loc khong hien thi undefined
// arr3.forEach(function (value, index, arr){ // dang day du -> khong can bien nao thi xoa di -> KHONG DUOC NHAM THU TU
//     console.log(`${index}.${value}`)
//     console.log(arr)
// })


// // them phan tu
// // them vao cuoi (push)
// console.log(arr1.push(123)) //tra ve do dai sau khi them phan tu
// console.log(arr1)
// //them tai vi tri chi dinh
// console.log(arr3.splice(3,1,"new")) //splice(bat dau cat tu dau, sluong phtu bi cat, gia tri phan tu moi)
// console.log(arr3)

// //sua phan tu + clone danh sach


// // toan tu spraed operator
// const arr5 = [...arr1]
// arr1[0] = 1001
// console.log(arr5, arr1)

// //ham splice
// arr6 = arr1.splice()
// arr1[2] = 50
// console.log(arr6,arr1)

// //class Array
// const arr7 = Array.from(arr1)
// arr7[2] = 0
// console.log(arr7, arr1)

// //xoa phan tu
// arr1.splice(2,1)
// console.log(arr1)