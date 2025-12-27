let a = [4, 8, 7, 13, 12]
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
sum = Math.floor(sum / a.length)
console.log(sum)