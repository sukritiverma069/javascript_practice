//question-1

function timeFormat()
{   

  var input =document.getElementById("seconds").value
    // Hours, minutes and seconds
    var hours = Math.floor(input / 3600);
    console.log(hours)
    var mins = Math.floor(input % 3600/ 60);
    console.log(mins)
    var secs = Math.floor(input % 3600 % 60);
    console.log(secs)

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hours > 0) {
        ret += "" + hours + "hours " + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + "minutes " + (secs < 10 ? "0" : "");
    ret += "" + secs + "seconds ";
    
    return document.getElementById("time").innerHTML = ret
    
     
    
}


// function stringSort(){
//     var arr2 = []
//     var inputStr =  document.getElementById("strings").value;
//      var arr = inputStr.split(",")
//      for(var i =0; i<=arr.length-1; i++){
        
//         arr2.push(arr[i])
        
//      }
//      for(var j=0; j<=arr2.length-1; j++){
//         for(var k=0; k<arr2.length-j;k++){
//          var n = arr2[k].localeCompare(arr2[k+1])
//          if(n == 1){
//            var temp = arr2[k]
//            arr2[k] = arr2[k+1]
//            arr2[k+1] = temp
           
//          }
      
//          }

//          document.getElementById("sort").innerHTML = arr2
//      }
     
    
// }

//question -3

function stringSort2(){
    var arr2 = []
    var inputStr =  document.getElementById("strings").value;
     var arr = inputStr.split(",")
     arr2 = arr.sort((a,b) => a.localeCompare(b))

         document.getElementById("sort").innerHTML = arr2
     
     
    
}

// question-2

var arr = [];
var number = 0

var readInput = function(event){
    console.log("inside read input")
    console.log(event.target.value);
   
    var inp = event.target.value.split(" ")
    if(inp.length == 2) {
        arr.push(inp[0])
        arr.push(inp[1])
    }

    if(arr.length == number*2){
        xor(arr)
    }
    
    console.log("the input is = " + arr)
}

function addinputFields(){
    number = document.getElementById("member").value;  
console.log("addinputfield was called")
    for (i=0;i<number;i++){
        var input = document.createElement("input");
        //input.setAttribute("id", i.toString())
        input.addEventListener("blur", readInput)
        input.type = "text";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        
    }  
}



function xor(k){
    var xorArray = []
    for(var s=0; s<=k.length-1; s=s+2){
        var xor = k[s]^k[s+1]
        if (xor % 2==0){
            xorArray.push("even")
        }else{
            xorArray.push("odd")
        }

        
    }

    xorArray.forEach(function(item) {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById("xorOutput").appendChild(li);
      });
      


}