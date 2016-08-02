<?php
    //create connection
    $conn;
    $sql;
    
    $conn = mysqli_connect("localhost", "tylerars_tyler", "wh1M5ic4l", "tylerars_business");
    
    //check connection
    /*
    if(mysqli_connect_errorno()){
        echo "Failed to connect to MySQL Database: " . mysqli_connect_errorno();
    }*/
    
    $sql = "SELECT * FROM `Employees`";
    
    // Check if there are results
    if ($result = mysqli_query($conn, $sql))
    {
        // If so, then create a results array and a temporary one
        // to hold the data
        $resultArray = array();
        $tempArray = array();
     
        // Loop through each row in the result set
        while($row = $result->fetch_object())
        {
            // Add each row into our results array
            $tempArray = $row;
            array_push($resultArray, $tempArray);
        }
     
        // Finally, encode the array to JSON and output the results
        echo json_encode($resultArray, JSON_PRETTY_PRINT);
    }
     
    // Close connections
    mysqli_close($conn);
?>