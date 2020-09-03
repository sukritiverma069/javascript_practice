function getArray(){
    var arr2 = []
    var inputStr =  document.getElementById("arr").value;
     var arr = inputStr.split(",")
     for(var i =0; i<=arr.length-1; i++){
        
        arr2.push(parseInt(arr[i]))
     }
     
     
     return arr2;
      
   }

//"acc?7??sss?3rr1??????5"

 function QuestionsMarks(str) {
    var result = false;

    for (var i = 0; i < str.length; i++) {
      if (isNaN(str[i]) === false) {
        for (var j = i + 4; j < str.length; j++) {
          if (parseInt(str[i]) + parseInt(str[j]) === 10) {
            var counter = 0;
            for (var k = i + 1; k < j; k++) {
              if (str[k] === "?") {
                counter++;
              }
            }
            console.log(counter);
          }
          if (counter === 3) {
            result = true;
          }
        }
      }
    }
    console.log(result);
  }

//sliding window question find the maximum sum of the subarray whose sum is equal to 0 having length=3

 const subarrayLength = () => {
    let arr = [2,1,5,1,3,2];
    let k = 3;
    let start = 0;
    let end = k - 1;
    let currentSum = 0;
    for (let i = 0; i <= end; i++) {
      currentSum += arr[i];
    }
    let maxsum = currentSum;
    while (end < arr.length) {
      currentSum = currentSum - arr[start++] + arr[++end];
      if (currentSum > maxsum) maxsum = currentSum;
    }
    console.log(maxsum);
  };



     *
    * *
   *   *
  *     *
 *       *
* * * * * * 

 function hollowTriangle(n) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str = str + " ";
    }
    str = str + "*";
    console.log(str);
    var spacesCount = n - 1;
    var spaceBetween = 1;
    str = "";

    for (var j = 0; j < n - 1; j++) {
      for (var k = 0; k < spacesCount; k++) {
        str = str + " ";
      }

      str = str + "*";
      for (var m = 0; m < spaceBetween; m++) {
        str = str + " ";
      }
      str = str + "*";
      console.log(str);
      spacesCount--;
      spaceBetween += 2;
      str = "";
    }
    for (var o = 0; o <= n; o++) {
      str = str + "* ";
    }
    console.log(str);
  }

  


const arrayIntersection = (atrArr)=>{
	  var arr1 = strArr[0];
    var arr2 = strArr[1];

    var a2 = Array.from(arr1.split(", "), Number);
    var b2 = Array.from(arr2.split(", "), Number);
    console.log(a2);
    console.log(b2);

    var set = new Set(a2);
    console.log(set);
    let intersectionArr = [];
    for (var i = 0; i <= b2.length; i++) {
      if (set.has(b2[i])) {
        console.log("printinf found elememnts " + b2[i]);
        intersectionArr.push(b2[i]);
      }
	    return true
    }
	return false
}

// perfect number

function perfectNumber(n) {
    let arr = [];
    let sum = 0;
    for (var i = 1; i < n; i++) {
      if (n % i == 0) {
        arr.push(i);
      }
    }
    for (var j = 0; j < arr.length; j++) {
      sum = sum + arr[j];
    }
    console.log(sum);
    if (sum === n) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }

  // *****
  // ****
  // ***
  // **
  // *

  const dummyFunc = (n) => {
    for (var i = 1; i <= 5; i++) {
      var str = "*";
      for (var j = i; j < 5; j++) {
        str = str + "*";
      }
      console.log(str);
    }
  };

  //
  //   *****
  // ---*-
  // --*--
  // -*---
  // *****



  const printPattern = (n) => {
    var str = "";
    for (var i = 0; i < n; i++) {
      str = str + "*";
    }
    console.log(str);
    str = "";
    var j = n - 2;
    for (var l = 0; l < n - 2; l++) {
      var k = "-";
      for (var p = 0; p < n; p++) {
        if (p === j) {
          k = "*";
        } else {
          k = "-";
        }
        str = str + k;
      }
      console.log(str);
      str = "";
      j--;
    }

    for (var i = 0; i < n; i++) {
      str = str + "*";
    }
    console.log(str);
  };


   //                    *
  //                    ***
  //                   *****
  //                  *******
  //                 *********
  //                ***********
  //               *************

  const dummyFunc = (n) => {
    let str = "";
    let star = "";
    let space = "";
    let starcounter = 1;
    let spacecounter = n - 1;
    //loop fir each line
    for (var i = 0; i < n; i++) {
      //loop to add all spaces
      for (var j = 0; j < spacecounter; j++) {
        space = space + " ";
      }
      //loop to add all stars
      for (var k = 0; k < starcounter; k++) {
        star = star + "*";
      }
      //concatenate the spaces and stars
      str = space + star;
      console.log(str);
      //refresh the initial strings
      space = "";
      star = "";
      //manipulate the counters as required
      spacecounter--;
      starcounter = starcounter + 2;
    }
  };


//    check if there are two numbers whose sum = given number
  
  const dummyFunc = (arr) => {
    var found = false;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 25) {
          found = true;
          console.log("found");
          break;
        }
      }
      //this break to break the outer loop also when the sum has laready been found
      if ((found = true)) {
        break;
      }
    }
    console.log("not found in any iteration");
  };


 const sumofTwoelements = (arr) => {
   
    let sum = 0;
    for (var i = 0; i <arr.length - 1; i++) {
      sum = arr[i] + arr[i + 1];
    
      console.log(sum);
    }
  };
  const largestNumber = (arr) => {
    
    let largest = 0;
    arr.map((k) => {
      if (k > largest) {
        largest = k;
      }
    });
    console.log(largest);
  };


function checkFactors(factors, num) {
	for (let i = 0; i < factors.length; i++) {
		if (num % factors[i] !== 0) {
			return false;
		}
	}
	return true;
}

const factorial = (num) => {
    var result = num;
    if (num === 0 || num === 1) return 1;
    while (num > 1) {
      num--;
      result *= num;
    }
    console.log(result);
    return result;
  };

  const stringReverse = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
   
	  if(newString === str){
		  console.log("it is a palindrome")
	  }
  };
   
   function linearSearch(){
     var searchedEle = parseInt(document.getElementById("find").value);
     var arr = getArray()
     console.log("the array is =" + typeof arr[0])
      console.log("element to be searched is =" +  searchedEle)
     var index = -1
     for(var i =0; i<= arr.length-1; i++){
       if(arr[i] == searchedEle){
         index = i 
         break;
       }
     }
     console.log("search elemt found at index =" + index)
     document.getElementById("index").innerHTML = index;
     
   }

   function binarySearch(){
    var searchedEle = parseInt(document.getElementById("find").value);
    var arr = getArray()
    var firstIndex = 0;
    var lastIndex = arr.length-1;
    var middleIndex = Math.floor((lastIndex+firstIndex)/2)

    while(firstIndex <= lastIndex) {
        if(searchedEle == arr[middleIndex]){
            return console.log("the target was found at =" + middleIndex)
        }
        else if (searchedEle > arr[middleIndex]){
            firstIndex= middleIndex+1
            console.log("searching the right side of array")
            return console.log("the target was found at =" + firstIndex)
        }
        else if (searchedEle < arr[middleIndex]){
            lastIndex= middleIndex-1
            console.log("looking to the left side of the array")
            return console.log("the target was found at =" + lastIndex)
        }
        else {
            console.log("not found in the loop iteration starting anothger")
        }
    }
    console.log("element not found")
   }


   function search_animal() {
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('animals'); 
    console.log("the value of x = " + x)
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 

   }

   function bubbleSort(){
     var arr = getArray();
     var temp;
     for(var i=0; i<arr.length; i++){
       for(var j=0; j<arr.length-i;j++){
          if(arr[j]> arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
       }
     }
     console.log("the sorted array is = " + arr)
     document.getElementById("bubble").innerHTML = arr
   }
     
   
   function frequency(){
    
     var arr = getArray();
     var count = 0;
     var searchedEle = parseInt(document.getElementById("frequency").value);
     for(var i=0; i<=arr.length-1; i++){
       if(arr[i] == searchedEle){
        count =count+1
       }
       
     }
  
     document.getElementById("freq").innerHTML = count


   }


   //remove duplicate optimised
function removeDuplicates(data){
	return [...new Set(data)]
}


   function removeDuplicates(){
     var arr = getArray()
     var arr2 = []
   
  
     for(var i=0;i<=arr.length-1;i++){
      var found = false
       for(var j=0;j<=arr2.length-1;j++){
         if(arr[i] == arr2[j]){
         found =true;
         break;
         }
       }
       if(!found){
         arr2.push(arr[i])
       }
     }
     console.log("the value of the array is = " + arr2)
     document.getElementById("remove").innerHTML = arr2;
     
     
   }

   function shuffleArray(){
     var arr = getArray()
     var temp;
     var randomIndex;

     for(var i=0;i<=arr.length-1;i++){
      randomIndex = Math.floor(Math.random() * arr.length)
      console.log("the random index is =" + randomIndex)
 
       temp = arr[i]
       arr[i] = arr[randomIndex]
       arr[randomIndex] = temp
     }
     console.log("the randomised array is =" + arr)
     document.getElementById("shuffle").innerHTML = arr
   }

   function lastElements(){
     var arr =getArray()
    
     var n = document.getElementById("number").value
     
     for(var i= arr.length-n; i<arr.length; i++){
      console.log("the last n number from the array are=" + arr)
     }

    
}

function fancyTimeFormat()
{   

  var input =document.getElementById("seconds").value
    // Hours, minutes and seconds
    var hrs = Math.floor(input / 3600);
    console.log(hrs)
    var mins = Math.floor(input / 60);
    console.log(mins)
    var secs = Math.floor(input % 60);
    console.log(secs)

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    
    return ret;

    
}

var input

function displayData(){
 
  input = document.getElementById("enterData").value.split(",");
  

  input.forEach(function(item,i) {
    console.log("the items are =" + i)
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    var button = document.createElement("button");
    button.innerHTML = "Edit";
    button.addEventListener("click", (item) => {
      edit(item)
    })
    li.appendChild(button);
    button.setAttribute("id",i);
    li.appendChild(text);
    li.setAttribute("id","li"+ "_"+ i);
    
    document.getElementById("enteredData").appendChild(li);


  });

}

function edit(item){
  var text=document.getElementById("li"+ "_"+ event.target.id).childNodes[1].textContent
     
     document.getElementById("enterData").value = text
     
     
     //document.getElementById("submit").innerHTML = "update"

     var item = document.getElementById("submit")
     //while (item.hasChildNodes()) {
      item.removeChild(item.firstChild);
      var button = document.createElement("button");

      button.innerHTML = "update";
      item.appendChild(button)
 
}

function update(){
  
  console.log("the index of the element is = " + event.target.id)
  var changedData = document.getElementById("enterData").value
  input[event.target.id] = changedData
  
}


function union(){
  

  var input1 = document.getElementById("input1").value.split(",")
  var input2 = document.getElementById("input2").value.split(",")

  var map = new Map()
  
  

  input1.forEach((k) => map.set(k,'p'))
  input2.forEach((m) => map.set(m,'k'))
  console.log(map.size)
  console.log(map)
  

  
  for (let i of map.keys()){
    console.log("the items are ="+ map.get(i))
  }

}


function nthLargest(){
  var input = document.getElementById("n").value;
  var arr = document.getElementById("arrr").value.split(",");
  var res = arr.map(Number)
  res.sort( (a,b) => b-a);
  console.log(res)
  console.log("the nth larget number is = " + res[input-1])



}

function arrReverse(){
  var arr = document.getElementById("reverse").value.split(",")
  for(let i=0, j = arr.length; i < j; i++, j--){
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  console.log(arr)
}

function sumFunc(){
  var n = parseInt(document.getElementById("input").value);
  console.log(n)
  var arr = document.getElementById("sum").value.split(",");
  var ar = arr.map(Number)
  var found = false;


  for(var i=0; i<ar.length; i++){
    if (found){
      break;
    }
    for(j=i+1; j<ar.length; j++){
      if(ar[i]+ar[j] == n){
        console.log("found")
        console.log("the found indexes are =" + i,j)
        found = true;
        break;
        
      }
      
    }
    
     
  }
  
    if(!found){
      console.log("not found")
    }
  
}

function someFunc2(){
  var n = parseInt(document.getElementById("input").value);
  console.log(n)
  var arr = document.getElementById("sum").value.split(",");
  var ar = arr.map(Number)
  var myMap = new Map()
  var found = false

  for(var i=0;i<ar.length;i++){
    var picked = ar[i]
    var req = n-picked;
    
  
  
    var inMap = myMap.get(req)

    if(null!= inMap){
      found = true
      console.log("found")
      break;
    }else{
        myMap.set(ar[i],ar[i])
        console.log(myMap)
    }
  }
  if(!found){
    console.log("not found")
  }
  
}

function printAlphabet(){
  var n = parseInt(document.getElementById("input").value);

  for (i = 0; i < 26; i=i+n) {

    var li = document.createElement("li");
    li.innerHTML = (i+10).toString(36)
    li.style.listStyle = "none";
    li.style.display = "block";
    document.getElementById("letter-main").appendChild(li);
  
  }
}
