<?php
	header('Content-Type: application/json');
	session_start();

	$json = $_POST['json'];
	$entree = json_decode($json, true);

	$response_array['status'] = '1error';


	if($_SESSION["on"] == 'out'){
		$response_array['status'] = 'please log in first';
		echo json_encode($response_array);
		return;
	}


	if($entree["chk"] == 'loadnoticeItem'){
		$path = '../test/notices/';


		$file_notice_item = $path . $entree["nID"] . '.json';

		$file_notice_arr = json_decode(file_get_contents($file_notice_item), true);


		$response_array['status'] = 'success';

		$return_array = array(
            'statusC' => $response_array,
            'item' => $file_notice_arr
         );

		echo json_encode($return_array);

		return;


	}else{
		$response_array['status'] = '2error';
		$return_array = array(
               'statusC' => $response_array);
            echo json_encode($return_array);
      return;
	}



?>