console.clear();

function upperfirst(string){
	var splitstring = string.toLowerCase().split(' ');// split to make each word seperated in a list.
  
  for (var i=0; i < splitstring.length; i++){
  splitstring[i] = splitstring[i].charAt(0).toUpperCase() + splitstring[i].substring(1);
  // frist we take the first letter from each word in the array, capitalize it, then we write the rest substring. 
  }
  return splitstring.join(' ');// change from a list into a normal string
}


//var x = upperfirst("I'm a little funk pot");
//console.log(x)
//document.write(upperfirst("I'm a little tea pot"));