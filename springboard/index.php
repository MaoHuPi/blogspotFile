<?php
/* basic */
function sendPost($url, $postdata = '', $cookie = ''){
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); 
    curl_setopt($ch, CURLOPT_TIMEOUT, 60); 
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_REFERER, $url); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata); 
    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    $result = curl_exec($ch); 
    curl_close($ch);
    return($result);
}

/* main */
$url = @$_GET['url'] ? $_GET['url'] : '';
$index = @$_GET['url'] ? sendPost($_GET['url']) : '';

if($index != ''){
    /* 檔案不存在 */
    if(strpos($index, '檔案不存在') === 0){
        header('Content-Type: text/html; charset=UTF-8');
    }
    /* pdf */
    else if(strpos($index, '%PDF-') === 0){
        header('Content-Type: application/pdf; charset=UTF-8');
    }
    /* jpg */
    else if(strpos($index, 'JFIF') > -1){
        header('Content-Type: image/jpeg; charset=UTF-8');
    }
    /* doc */
    // else if(strlen($index) - strripos($index, 'Microsoft Office Word') == 480){
    //     header('Content-Type: application/msword; charset=UTF-8');
    // }
    /* download */
    else{
        $index = '無法預覽檔案(<a href="'.$url.'" download="download">下載</a>)';
    }
}

/* debug */
// $debug = '檔案不存在';
// if($debug != ''){
//     print_r([
//         strpos($index, $debug), 
//         strripos($index, $debug), 
//         strlen($index)
//     ]);
// }
?>
<?=$index?>