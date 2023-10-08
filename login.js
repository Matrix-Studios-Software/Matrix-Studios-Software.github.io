// var jwt = localStorage.getItem("jwt");
// if (jwt != null) {
//   window.location.href = './index.html'
// }

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.matrixstudios.ltd/user/login");
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.setRequestHeader("Authorize-API-Key", "AuthorizeKey12345");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      console.log(objects['status']);
      console.log(objects['message']);
      if (objects['status'] == 'ok') {
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = './index.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.matrixstudios.ltd/user/register");
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.setRequestHeader("Authorize-API-Key", "AuthorizeKey12345");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      console.log(objects['status']);
      console.log(objects['message']);

      if (objects['status'] == 'ok') {
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = './index.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}