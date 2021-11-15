function signup(e) {
  event.preventDefault();
  console.log('working')
  var email = document.getElementById('email').value;
  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var user = {
    email: email,
    username: username,
    password: pass,
  };
  var json = JSON.stringify(user);
  localStorage.setItem("user", json);
  console.log("user added");

  result.innerHTML = "User Register, Please Log In";
}

function loginFunc(e) {
  event.preventDefault();
  var em = document.getElementById("email1").value;
  var pa = document.getElementById("password1").value;
  var result = document.getElementById('result');
  var user = localStorage.getItem(email);
  var data = JSON.parse(localStorage.getItem('user')) || []
  console.log(em);
  console.log(pa);


  console.log(data.email);
  console.log(data.password);

  if (em == data.email && pa == data.password) {

    console.log("details correct")
    result.innerHTML = "Logging In";
    window.location.href = "home.html";

  } else {
    result.innerHTML = "Wrong Email or Password, Try Again."


  }
}