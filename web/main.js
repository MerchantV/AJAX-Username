function usernameMessage(usernameAvailable) {
  let usernameAvailableMsg = document.querySelector('.username-available-msg');
  let usernameTakenMsg = document.querySelector('.username-taken-msg');

  if (usernameAvailable) {
    usernameAvailableMsg.style.display = 'block';
    usernameTakenMsg.style.display = 'none';
  } else {
    usernameAvailableMsg.style.display = 'none';
    usernameTakenMsg.style.display = 'block';
  }
}

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
      if (response['success']) {
        usernameMessage(response['usernameAvailable'])
        event.target.focus();
      }
    });
};

let inputUsername = document.querySelector('#inputUsername');
inputUsername.onblur = checkUsername;