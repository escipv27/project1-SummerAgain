<?php
	header('Content-Type: application/json');
	session_start();

	$json = $_POST['json'];
	$entry = json_decode($json, true);

	$response_array['status'] = '1error';

	
	if($_SESSION["on"] == 'out'){
		$response_array['status'] = 'please log in first';
		echo json_encode($response_array);
		return;
	}


	if($entry["chk"] == 'loadcirclelist'){

		$path = '../applications/';

		$userlist = array();



		$emaillist = fopen("z_registerOrderList.txt","r");

		while(! feof($emaillist)){

			$fline = fgets($emaillist);

			$token = strtok($fline, " ");

			$email = $token;

			$token = strtok(" ");

			$stime = $token;

			$token = strtok(" ");

			$stime = $stime . " " . $token;

			$email = str_replace("\n", "", $email);

			if($email == ""){
				break;
			}

			$filepath = $path . $email . ".json";
			$userfile = json_decode(file_get_contents($filepath), true);
			$user = array(
				'entryemaileamil' => $email,
				'entrystime' => $stime,
				'entrycirclename' => $userfile['entryCircleName'],
                'entrycirclepasscode' => $userfile['entryCirclePasscode'],
                'entrycircleinfo' => $userfile['entryCircleInfo'],
                'entrycirclesize' => $userfile['entryCircleSize'],
                'entrycircleage' => $userfile['entryCircleAge'],
                'entrycirclepicurl' => $userfile['entryCirclePicUrl'],
                'entryrepname' => $userfile['entryRepName'],
                'entryreprealname' => $userfile['entryRepRealName'],
                'entryemailid' => $userfile['entryEmailId'],
                'entryhppasscode' => $userfile['entryHpPasscode'],
                'entrynamesandyear' => $userfile['entryNamesAndYear'],
                'entryoneurl' => $userfile['entryOneUrl'],
                'entryonebanner' => $userfile['entryOneBanner'],
                'entrytwourl' => $userfile['entryTwoUrl'],
                'entrytwobanner' => $userfile['entryTwoBanner'],
                'applicationstatus' => $userfile['applicationStatus']
			);
            array_push($userlist, $user);
		}

		fclose($emaillist);

		$response_array['status'] = 'success';
		$return_array = array(
            'statusC' => $response_array,
            'users' => $userlist
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