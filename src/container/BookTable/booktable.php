<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "restaurant";

// Create connection
$conn = mysqli_connect($host, $user, $password, $dbname, 3307);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$day = $_POST["days"];
$hour = $_POST["hours"];
$name = $_POST["name"];
$phone = $_POST["phone"];
$num = $_POST["num"];

$sql = "SELECT day, hour FROM booktable WHERE day = '$day' and hour = '$hour'";
$result = $conn->query($sql);
$ctr = $result->num_rows;
if ($result->num_rows > 0) {
    $sql2 = "SELECT table_no FROM booktable";
    $result2 = $conn->query($sql2);
    while($row = $result2->fetch_assoc()) {
        $ctr -= 1;
        if($ctr == 0) {
            $tno = $row['table_no'] + 1;
            if($tno > 10) {
                echo "ERROR";
            }
            else{
                $sql = "INSERT INTO booktable (day, hour, name, phone, people, table_no)
                VALUES ('$day', '$hour', '$name', '$phone', '$num', '$tno')";

                if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
                } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
                }
            }
            break;
        }
    }
}
else {
  $tno = 1;
  $sql = "INSERT INTO booktable (day, hour, name, phone, people, table_no)
    VALUES ('$day', '$hour', '$name', '$phone', '$num', '$tno')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }
}



mysqli_close($conn);
?>