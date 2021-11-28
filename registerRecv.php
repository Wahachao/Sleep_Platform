<?php
// 获取提交的用户名+密码
$input_username = $_POST["username"];
$input_emailaddress = $_POST["emailaddress"];
$input_password = $_POST["password"];

// 查询用户是否存在
$sql_server = "localhost";
$sql_username = "root";
$sql_password = "702069";
$sql_database = "sleep_scoring_system";
$con = new mysqli($sql_server, $sql_username, $sql_password, $sql_database);
$sql = 'SELECT * FROM user_info WHERE mail="' . $input_emailaddress . '"';

$res = $con->query($sql);

// 用户不存在 正常注册
if($res==null || $res->num_rows==0) {
    $sql = "INSERT INTO user_info (name, mail, pw) VALUES ('".$input_username."', '".$input_emailaddress."' ,'".$input_password."')";

    if (mysqli_query($con, $sql)) {
        echo "register success";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }

}
// 用户存在 查询出错
else if($res->num_rows>=1) {
    echo "user existed";
}
?>
