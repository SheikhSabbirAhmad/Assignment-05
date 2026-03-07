// console.log("Connected");

document.getElementById("login-btn")
.addEventListener("click" , function(){
    const userName = document.getElementById("user-name");
    const name = userName.value;
    // console.log(name);

    const userPass = document.getElementById("user-pass");
    const password = userPass.value;
    // console.log(password);

    if(name == "admin" && password == "admin123"){
        alert("Login Successfully");
        window.location.assign("/main.html");
    }
    else{
        alert("Wrong Username & Password");
    }
})