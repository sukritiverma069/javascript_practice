function getArray(){
    var arr2 = []
    var inputStr =  document.getElementById("arr").value;
     var arr = inputStr.split(",")
     for(var i =0; i<=arr.length-1; i++){
        
        arr2.push(parseInt(arr[i]))
     }
     
     
     return arr2;
      
   }


 const sumofTwoelements = (arr) => {
    let count = 0;
    let sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
      sum = arr[i] + arr[i + 1];
      count = count + 1;
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
    return newString;
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
