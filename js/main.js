function validateForm(){
    preventDefault();
    // window.location.href = "http://127.0.0.1:5500/logIn.html";
    localStorage.setItem("username",username.value);
    localStorage.setItem("password", password.value);
}