var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = '/login/login.html'
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://158.69.120.109/user/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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
          text: "Success!",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/login/login.html';
          }
        });
      } else {
        Swal.fire({
          text: "Unable to login!",
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}