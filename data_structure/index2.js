//  if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

function CodelandUsernameValidation(str) { 

  // code goes here  

 if(str.length<4 || str.length>25){
   return false
 }
 if(!str[0].match(/[a-z]/i)){
   return false
 }
 if(!str.match(/^[0-9a-zA-Z_]+$/)){
   return false
 }
 if(str[str.length-1] === "_"){
   return false
 }
 return true

}
   


//string reverse with two pointer approach

function FirstReverse(str) { 
let arr = str.split('')
let left = 0;
let right = str.length-1
while(left<right){
  let temp  = arr[left]
  arr[left] =str[right]
  arr[right] = temp
  left++
  right--
}
return arr.join('');

}

