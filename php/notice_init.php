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


	if($entree["chk"] == 'initialize'){
		$path = '../test/notices/';


		$number = 0;
		$number_next = 1;
		// notice values
	   	$noticeID = 'notice_' . $number;
	   	$noticeTitle = 'TEST NOTICE 00';
	   	$noticeImg = 'http://rsquared.i01.naya.kr/summeragainweb1/img/notice/00_comingsoon.png';
	   	$noticeCtx = 'TEST';

	   	


	   	// 1. create notice numbering keep file

	   	$file_notice_number = $path . 'notice_id_number.json';

	   	$arr_number = array('last' => $number, 'next' => $number_next);
	   	$na = file_put_contents($file_notice_number, json_encode($arr_number));
		if(!$na){
			$response_array['status'] = 'errorat1';
			echo json_encode($response_array);
			return;
		}


		// 2. create notice_list file

		$file_notice_list = $path . 'notice_list.json';

		$arr_list = array(
						array('ntcID' => $noticeID, 'imgLink' => $noticeImg)
					);
		$nb = file_put_contents($file_notice_list, json_encode($arr_list));
		if(!$nb){
			$response_array['status'] = 'errorat2';
			echo json_encode($response_array);
			return;
		}




		// 3. create notice_0 file
	   	//set file path
	   	$noticeFileName = $path . $noticeID . ".json";

	   	$arr_notice = array("ntcID" => $noticeID, "imgLink" => $noticeImg, "ntcTitle" => $noticeTitle, "ntcContext" => $noticeCtx );
	   	$nc = file_put_contents($noticeFileName, json_encode($arr_notice));
	   	if(!$nc){
			$response_array['status'] = 'errorat3';
			echo json_encode($response_array);
			return;
		}


		
		$response_array['status'] = 'success';
		echo json_encode($response_array);
		return;

	}else{
		$response_array['status'] = 'wrong file executed';
		echo json_encode($response_array);
		return;

	}



?>