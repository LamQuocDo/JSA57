// tam giac
let n = prompt();
let a = ''
for(let i = 1; i <= n; i++){
    a += String(i);
    console.log(a);
}

// dao nguoc
let s = prompt();
let dao = "";

for (let i = s.length - 2; i >= 0; i--) {
  dao += str[i];
}

let res = s + dao;

console.log(res);
