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
  arr[left] =arr[right]
  arr[right] = temp
  left++
  right--
}
return arr.join('');

}


//convert obj to an array

function toArray(obj) {
	
	let arr = []
	for(let [key, value] of Object.entries(obj)){
	arr.push([key,value])
}
	return arr
}


//sort an array of strings on the basis of length of each of the string
//let a = ["a", "ccc", "dddd", "bb"]
function sortByLength(arr) {
	return arr.sort((a,b)=> { a.length-b.length})
}

//A boomerang is a V-shaped sequence that is either upright or upside down.
// Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Create a function that returns the total number of boomerangs in an array.
//[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]


function countBoomerangs(arr) {
	let start = 0
	let end = 2
	let count=0
	
	while(end <= arr.length-1){
		
		if(arr[start]===arr[end] && arr[start+1]!== arr[start]){
			count++
		}
		start++
		end++
	}
	
	return count
}





