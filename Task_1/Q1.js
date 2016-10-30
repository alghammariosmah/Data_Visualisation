console.clear();


function isDiv(n) {
  while(n>=1){
  if (n % 3 ==0){
  console.log("Bingo!");
  }else if (n % 2 ==0){
  console.log("Even");
  }else{
  console.log(n);
  }
  n-=1;
  }
}
var x=6;
y = isDiv(x);
console.log(y)