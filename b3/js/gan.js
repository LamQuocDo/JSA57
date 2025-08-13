console.group("Toan tu gan")

//= : dau gan
const a = 10;  //const bat buoc gan gia tri khi khai bao

//relative: +=; -=; *=; /=; %=; **=
let b = 5;
console.log(b += 2);
console.log(b -= 2);
console.log(b *= 2);
console.log(b /= 4);
console.log(b %= 2);
console.log(b **= 3);

//prefix: ++; --
let c = 10;
console.warn(++c); //c = c + 1
console.warn(c);

//postfix : ++; --
let d = 10;
console.warn(d++);
console.warn(d);

console.groupEnd("Toan tu gan")