function getLoginStatus(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var anchor_tag = document.getElementById("btn");
    if(username == "Sukriti" && password == "abcd123"){
        anchor_tag.href = "http://www.99acres.com";
    }else {
        anchor_tag.href = "../error.html";
    }


function validateEmail(){
    var email = document.getElementById("email").value;
}
     
     

}
