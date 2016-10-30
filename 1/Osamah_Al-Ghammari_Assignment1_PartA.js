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
//y = isDiv(6);
//console.log(y);

function upperfirst(string){
	var splitstring = string.toLowerCase().split(' ');// split to make each word seperated in a list.
  
  for (var i=0; i < splitstring.length; i++){
  splitstring[i] = splitstring[i].charAt(0).toUpperCase() + splitstring[i].substring(1);
  // frist we take the first letter from each word in the array, capitalize it, then we write the rest substring. 
  }
  return splitstring.join(' ');// change from a list into a normal string
}

//var x = upperfirst("he is running so fast");
//console.log(x)

function reverseString(string){
    return string.split("").reverse().join("");
}

//var x = reverseString("he is running so fast");
//console.log(x);

function reverseString(string){
		
    s1 = string.toLowerCase().split(" ").join("");
    s2 = s1.split("").join('');
    s3 = s1.split("").reverse().join('');
    return s2 == s3;
    
}
//var x = reverseString("Was it a car or a cat I saw");
//console.log(x);


function hist(array){
	counter = 1;
  var dict = {};
  var sorted = [];
  max = '';
  //maxindex = array[0];
  //console.log(maxindex);
  for (var i = 0; i < array.length ; i++){
  var indexes = array[i];
  if (dict[indexes]==null ){
  dict[indexes]=1;
  }else{
  dict[indexes]+=1;
  }
  if (max == '' || dict[indexes] > dict[max]){
  max = indexes;
  }
  }
  for (var key in dict){
  sorted.push([key, dict[key]]);
  }
  sorted.sort(function(a,b){return a[1] - b[1]});
  while (sorted.length > 3){
  sorted.shift();
  if ( sorted.length ==3){
  return sorted;
  }
  }
  
}
// note: the output will be put as an array...
//var x = ['a', 'e', 1, 'a', 'e', 'a', 'b', 3, 'c', 'a', 'c', 5, 'd', 'e', 'b', 7, 'e', 'c', 'e'];
//console.log(hist(x));
