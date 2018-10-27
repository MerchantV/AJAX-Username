
function checkUsername(event) {
  let username = event.target.value;

  if (username === '') {
    return;
  }

  fetch('username.php?username=' + username)
    .then(function(rawResponse) { 
      return rawResponse.json(); // Promise for parsed JSON.
    })
    .then(function(response) {
      console.log(response);
    });

};

let inputUsername = document.querySelector('#inputUsername');
inputUsername.onblur = checkUsername;