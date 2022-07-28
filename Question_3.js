function reverseANum(num) 
{
const reverse = (num) => parseInt(String(num).split("").reverse().join(""), 10);
console.log(reverse(num));
}
