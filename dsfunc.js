function runmycode(){
    document.getElementById('change').innerHTML = 3;  

}

function getArray(){
    var inputText = document.getElementById("arraybox").value;
    var arr = inputText.split(',');
    return arr;
}

function arrreverse(){
    //var arr = [1,2,3,4,5,6,7,8,9,10];()
     var arr = getArray();
    
    
    var arr2 = new Array; 
    var j = 0;
    for (var i = arr.length -1; i>= 0; i--){
      arr2[j] = arr[i];
        j++;
        
    }
    document.getElementById('change').innerHTML = "reversed array is" + arr2;
    
}

function sort(){
 var arr = getArray();

 
 for (var outer = 0; outer < arr.length-1; outer++){
     for (var inner = 0; inner < arr.length-1 ; inner++){

        if ( parseInt(arr[inner]) > parseInt(arr[inner + 1] ) ) {
            var temp = arr[inner];
            arr[inner] = arr[inner + 1];
            arr[inner + 1] = temp;
        }
     }
 }
 document.getElementById('sort_display').innerHTML = arr;
}