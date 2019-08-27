<?php
/* Open connection to "99acresdb1
" MySQL database. */
$mysqli = new mysqli("localhost", "root", "", "99acresdb1");
/* Check the connection. */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* Fetch result set from t_test table */
$data=mysqli_query($mysqli,"select ProjectName from project_details where LocalityId = 7502");


?>

<script>
    /* o make the data compatible with our chart, we must create JavaScript objects from the data. To do this, we will use PHP while loops to loop through our data to create JavaScript arrays from our result set. */
var myData=[<?php
while($info=mysqli_fetch_array($data))
    echo $info['f_data'].','; /* We use the concatenation operator '.' to add comma delimiters after each data value. */
?>];
<?php
$data=mysqli_query($mysqli,"SELECT * FROM t_test");
?>
var myLabels=[<?php
while($info=mysqli_fetch_array($data))
    echo '"'.$info['f_name'].'",'; /* The concatenation operator '.' is used here to create string values from our database names. */
?>];
*Now that we have our database data in our JavaScript array objects, we can close the database connection.



</script>


/