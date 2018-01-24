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



	if($entree != null) { /* sanity check */	


		$path = '../test/notices/';

		// get notice ID

		$file_notice_number = $path . 'notice_id_number.json';

		// file must exist. should have run init first
		$file_number_decode = json_decode(file_get_contents($file_notice_number), true);
		$next_num = $file_number_decode['next'];


		// notice values
		$noticeID = 'notice_' . $next_num;
		$noticeTitle = $entree['ntcTitle'];
		$noticeImg = $entree['ntcImg'];
		$noticeCtx = $entree['ntcCtx'];


		//set noitce entry file path
		$file_new_notice_path = $path . $noticeID . ".json";


		// register notice

		$notice_ent_arr = array("ntcID" => $noticeID, "ntcTitle" => $noticeTitle, "imgLink" => $noticeImg, "ntcContext" => $noticeCtx );
		$notice_ent = json_encode($notice_ent_arr);

		$na = file_put_contents($file_new_notice_path, $notice_ent);
		if(!$na){
			$response_array['status'] = 'errorat1';
			echo json_encode($response_array);
			return;
		}



		// register to notice list
		// notice ID and img link
		$new_list_ent = array("ntcID" => $noticeID, "imgLink" => $noticeImg);

		// get list from file
		$list_file_path = $path . 'notice_list.json';
		$list_file = file_get_contents($list_file_path);
		$list_temp_arr = json_decode($list_file);

		// append to end
		array_push($list_temp_arr, $new_list_ent);

		// store to json file again
		$listJsonData = json_encode($list_temp_arr);
		$nb = file_put_contents($list_file_path, $listJsonData);
		if(!$nb){
			$response_array['status'] = 'errorat2';
			echo json_encode($response_array);
			return;
		}



		//increment notice id number
		$new_num = $next_num + 1;
		$new_num_arr = array('last' => $next_num, 'next' => $new_num);
		$new_num_json = json_encode($new_num_arr);
		$nc = file_put_contents($file_notice_number, $new_num_json);
		if(!$nc){
			$response_array['status'] = 'errorat3';
			echo json_encode($response_array);
			return;
		}




		$response_array['status'] = 'success';
		echo json_encode($response_array);
		return;




	   


	}else {
		$response_array['status'] = '2error';
		echo json_encode($response_array);
		return;
	}
?>