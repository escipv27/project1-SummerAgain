<?php
	header('Content-Type: application/json');
	session_start();

	$json = $_POST['json'];
	$entry = json_decode($json, true);

	$ts = time();
   	$time = date("Y-m-d H:i:s", $ts);

	$response_array['status'] = '1error';

	$path = '../applications/';

	if($entry["chk"] == 'applicationmodify'){
		


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




        $entryemailid = $entry['entryEmailId'];


        $filename = $path . $entryemailid . '.json';



		// overwrite application file
		$rc = file_put_contents($filename, $json);
		if(!$rc){
			$response_array['status'] = 'errorat1';
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