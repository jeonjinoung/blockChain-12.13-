<?php
    $user_id = $_POST['user_id'];
    $user_pw = $_POST['user_pw'];
    $conn = mysqli_connect('localhost', 'choco', '7173', 'study_login');
    $sql = "SELECT * FROM member where login_id='$user_id' and login_pw='$user_pw'";
    $res = mysqli_fetch_array(mysqli_query($conn,$sql));
    if($res){
        session_start();
        $_SESSION['user_id'] = $res['login_id'];
        $_SESSION['user_name'] = $res['name'];
        echo "<script>alert('로그인에 성공했습니다!');";
        echo "window.location.replace('main.php');</script>";
        exit;
    }
    else{
       echo "<script>alert('아이디 혹은 비밀번호가 잘못되었습니다.');";
       echo "window.location.replace('login.php');</script>";
    }
?>
<meta http-equiv="refresh" content="0;url=main.php">