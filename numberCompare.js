var num = [5,89,9,6,19,98,3,75,6,12,58,30,27];
var num2 = [67,4,9,26,70,49,53,3,8,4,25,61,42];

function compareNums(firstN, secondN) {
  if (firstN < secondN) {
    alert(firstN + " is less than " + secondN);
  }
  else if (firstN > secondN) {
    alert(firstN + " is greater than " + secondN);
  }
  else{
    alert(firstN + " equals to " + secondN);
  }
}

console.log(compareNums(num[Math.floor(Math.random() * num.length)], num2[Math.floor( Math.random() * num2.length)]));
