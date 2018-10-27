<?php
  $registered_usernames = ['wallyg', 'dglutton', 'stungeye', 'mirage', 'chin', 'alan'];

  $response = [
    'success' => false
  ];

  if (isset($_GET['username']) && (strlen($_GET['username']) === 0)) {
    $response['username_available'] = ! in_array($_GET['username'], $registered_usernames);
    $response['success'] = true;
  } 

  // Set the JSON MIME content type so that it isn't sent as text/html
  header('Content-Type: application/json');
  // Encode the $response into JSON and echo.
  echo json_encode($response);
?>