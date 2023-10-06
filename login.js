var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './login.html'
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://158.69.120.109:4223/user/login");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Authorize-API-Key", "AuthorizeKey12345")
  xhttp.send(JSON.stringify({
    "email": email,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", "test123");
        Swal.fire({
          text: objects[message],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = './login.html';
          }
        });
      } else {
        Swal.fire({
          text: objects[message],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}