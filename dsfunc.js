function runmycode(){
    document.getElementById('change').innerHTML = 3;  

}

function arrreverse(){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var arr2 = new Array; 
    var j = 0;
    for (var i = arr.length -1; i>= 0; i--){
      arr2[j] = arr[i];
        j++;
    }
    document.getElementById('change').innerHTML = arr2;
    
}