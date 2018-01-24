<?php
header('Content-Type: application/json');
session_start();

   $_SESSION["userlg"] = "out";

   $json = $_POST['json'];

   $path = '../applications/';
  
   $userlginfo = json_decode($json, true);

   $response_array['status'] = 'error';

   if($userlginfo != null) { /* sanity check */




   		$emailV = $userlginfo['userloginID'];

   		$filename = $path . $emailV . ".json";

   		// email addr doesnt exist 
   		if(!file_exists($filename)){
   			$response_array['status'] = 'iderror';
            $return_array = array(
               'statusC' => $response_array);
            echo json_encode($return_array);
            return;
   		}

   		// user entered p
   		$pwV = $userlginfo['userloginPC'];

   		// open json file
   		$userfile = json_decode(file_get_contents($filename), true);
   		$key = $userfile['entryHpPasscode'];

   		// check password
   		if($pwV === $key){

            $response_array['status'] = 'loginsuccess';
            $_SESSION["userlg"] = "in";

   			// return user info except pword 
   			$userinfo = array(
               'entrycirclename' => $userfile['entryCircleName'],
               'entrycirclepasscode' => $userfile['entryCirclePasscode'],
               'entrycircleinfo' => $userfile['entryCircleInfo'],
               'entrycirclesize' => $userfile['entryCircleSize'],
               'entrycirclepicurl' => $userfile['entryCirclePicUrl'],
               'entrycircleage' => $userfile['entryCircleAge'],
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

   			$return_array = array(
            'statusC' => $response_array,
            'userA' => $userinfo
            );
            echo json_encode($return_array);
            return;


   		}else{ // password doesnt match
   			$response_array['status'] = 'scerror';
            $return_array = array(
               'statusC' => $response_array);
            echo json_encode($return_array);
            return;
   		}




   }else {
    	$response_array['status'] = 'error';
			echo json_encode($response_array);
			return;
   }
?>