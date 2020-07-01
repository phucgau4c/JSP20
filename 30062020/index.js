function click3() {
    var name = document.getElementById("name").value;
    var pas = document.getElementById("pws").value;

    if(name === "admin" && pas === "1234"){
        alert("Login success");
    } else{
        alert("Login Fail");
    }
}

    
