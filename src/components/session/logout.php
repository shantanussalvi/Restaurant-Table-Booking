<?php
    session_start();
    if(isset($_SESSION["username"]))
    {
        if(time()-$_SESSION["login_time_stamp"] >60) 
        {
            unset($_SESSION["usename"]);
            unset($_SESSION["password"]);
            session_destroy();
            header("Location:login.php");
        }
    }
    else
    {
        header("Location:login.php");
    }
?>