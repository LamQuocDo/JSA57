let n;

do {
  n = Number(prompt("Nhập số nguyên dương n:"));
} while (!Number.isInteger(n) || n <= 0);
let tongChan = 0;
let tongLe = 0;
for (let i = 1; i <= n; i++){
    if (i % 2 == 0) tongChan += i;
    else tongLe += i;
}

console.log("Tong cac so chan tu 1 den n la: ", tongChan);
console.log("Tong cac so le tu 1 den n la: ", tongLe);