<?php
    if (!isset($_POST['join_name']) || !isset($_POST['join_id']) || !isset($_POST['join_pw'])) {
        header("Content-type: text/html; charset=UTF-8");
        echo "<script>alert('기입하지 않은 정보가 있거나 잘못된 접근입니다.')";
        echo "window.location.replace('join.php');</script>";
        exit;
    }
    $join_name = $_POST['join_name'];
    $join_id = $_POST['join_id'];
    $join_pw = $_POST['join_pw'];
    $conn= mysqli_connect('localhost', 'choco', '7173', 'study_login');
    //신규 회원정보 삽입 + ID 재정렬
    $multi = "
        INSERT INTO member(name, login_id, login_pw, created) VALUES ('{$join_name}', '{$join_id}', '{$join_pw}', now());
        SET @COUNT = 0;
        UPDATE member SET id = @COUNT:=@COUNT+1;
    ";
    $res = mysqli_multi_query($conn,$multi);
    if($res){
        echo "<script>alert('회원가입이 완료되었습니다.');";
        echo "window.location.replace('login.php');</script>";
        exit;
    }
    else{
       echo "<script>alert('저장에 문제가 생겼습니다. 관리자에게 문의해주세요.');";
       echo mysqli_error($conn);
    }
?>
<meta http-equiv="refresh" content="0;url=main.php">