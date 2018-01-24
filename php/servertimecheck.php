<?php
	header('Content-Type: application/json');
	session_start();

	$json = $_POST['json'];
	$entree = json_decode($json, true);

	$ts = time();
   	$time = date("Y-m-d H:i:s", $ts);

	$response_array['status'] = '1error';


	if($entree["chk"] == 'timecheck'){
		
		
		$response_array['status'] = 'success';
		$response_array['stime'] = $time;
		echo json_encode($response_array);
		return;

	}else{
		$response_array['status'] = 'wrong file executed';
		echo json_encode($response_array);
		return;

	}



?>