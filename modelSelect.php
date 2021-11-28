<?php
// 获取提交的模型
$model = $_POST["model"];
$uid = 1;

// 查询用户是否存在
$sql_server = "localhost";
$sql_username = "root";
$sql_password = "702069";
$sql_database = "sleep_scoring_system";
$con = new mysqli($sql_server, $sql_username, $sql_password, $sql_database);

$sql = "INSERT INTO task_info (uid, task_model) VALUES ('".$uid."' ,'".$model."')";

if (mysqli_query($con, $sql)) {
    echo "submit success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

?>
