<?php  
    include("connection.php");
    error_reporting(0);

    if(isset($_POST['login'])) {
      $un=$_POST['username'];
      $pass=$_POST['password'];
      
      $query = "SELECT * FROM users WHERE username='$un' AND password='$pass'"; 
      $data = mysqli_query($conn,$query);
      $total = mysqli_num_rows($data);
      if($total != 0) {
        session_start();
        $_SESSION['auth'] = true;
        $_SESSION['start'] = time();
        $_SESSION['expire'] = $_SESSION['start'] + (1* 60);
        header('location:dashboard.php.php');
        echo "run";
      } else {
?>
    <script>
            alert("user name or password is invalid");
        </script>
        <?php
      }
    }