console.clear();



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

var x = ['a', 'e', 1, 'a', 'e', 'a', 'b', 3, 'c', 'a', 'c', 5, 'd', 'e', 'b', 7, 'e', 'c', 'e'];
console.log(hist(x));

//document.write(reverseString("eye"));