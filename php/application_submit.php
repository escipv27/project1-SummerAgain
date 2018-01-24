<?php
	header('Content-Type: application/json');
	session_start();

	$json = $_POST['json'];
	$entry = json_decode($json, true);

	$ts = time();
   	$time = date("Y-m-d H:i:s", $ts);

	$response_array['status'] = '1error';

	$path = '../applications/';

	if($entry["chk"] == 'entrysubmit'){
		


		/*
		$entrycirclename = $entry['entryCircleName'];
        $entrycirclepasscode = $entry['entryCirclePasscode'];
        $entrycircleinfo = $entry['entryCircleInfo'];
        $entrycirclesize = $entry['entryCircleSize'];
        $entrycirclepicurl = $entry['entryCirclePicUrl'];
		
        $entryrepname = $entry['entryRepName'];
        $entryreprealname = $entry['entryRepRealName'];
        $entryemailid = $entry['entryEmailId'];
        $entryhppasscode = $entry['entryHpPasscode'];
        $entrynamesandyear = $entry['entryNamesAndYear'];

        $entryoneurl = $entry['entryOneUrl'];
        $entyronebanner = $entry['entryOneBanner'];
        $entrytwourl = $entry['entryTwoUrl'];
        $entrytwobanner = $entry['entryTwoBanner'];
		*/


        $entrycirclesize = $entry['entryCircleSize'];

        $entryemailid = $entry['entryEmailId'];


        $filename = $path . $entryemailid . '.json';



        // this is for timestamp
   		$ra = file_put_contents("z_registerOrderList.txt", $entryemailid . " " . $entrycirclesize . " " . $time . PHP_EOL, FILE_APPEND|LOCK_EX);
		if(!$ra){
			$response_array['status'] = 'errorat1';
			echo json_encode($response_array);
			return;
		}


		// this is for email list
    	$rb = file_put_contents("z_emailList.txt", $entryemailid . PHP_EOL, FILE_APPEND|LOCK_EX);
    	if(!$rb){
			$response_array['status'] = 'errorat2';
			echo json_encode($response_array);
			return;
		}



		// save the application file
		$rc = file_put_contents($filename, $json);
		if(!$rc){
			$response_array['status'] = 'errorat3';
			echo json_encode($response_array);
			return;
		}


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