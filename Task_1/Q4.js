console.clear();

function reverseString(string){
		
    s1 = string.toLowerCase().split(" ").join("");
    s2 = s1.split("").join('');
    s3 = s1.split("").reverse().join('');
    return s2 == s3;
    
}


//var x = reverseString("Was it a r a cat I saw");
//console.log(x);
//document.write(reverseString("eye"));