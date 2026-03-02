// run the code when condition is true and keep running until condition becomes false
// you are given a number num . tell me how many time u can divide it by 5
let num = 25;
let count = 0;
while(num%5==0){
    count++;
    num=num/5;
}
console.log("count",count)