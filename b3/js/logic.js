console.group("Toan tu Logic");

console.error("khi xu ly logic, chuyen tat ca ve boll de xu ly sau do chuyen ve kieu du lieu ban dau")
const v1 = "";
const v2 = 0;
const v3 = null;
const v4 = NaN;
const v5 = [];
const v6 = {};
const v7 = undefined;
const v8 = false;

//and : &&
console.warn("And: lay gia tri false gan nhat -> neu khong co -> tra ve gia tri ve thu 2")
console.log(v1 && v2 && "ABC");
console.log("a" && "b" && "c");

//or : ||
console.warn("And: lay gia tri true gan nhat -> neu khong co -> tra ve gia tri ve thu 2")
console.log(v1 || v2 || "ABC"); //"ABC" ep bool -> true -> tra ve ABC
console.log(v3 || v8 || v4); //khong co false -> tra ve xa nhat

// ap dung or
// const fullName = prompt("Nhap ten: ").trim();
console.log(fullName || "Khong co ten");

//not : !
console.warn("Not: phu dinh gia tri");
console.log(!v8)

console.groupEnd("Toan tu Logic");