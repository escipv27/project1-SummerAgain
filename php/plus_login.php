<?php
header('Content-Type: application/json');
session_start();

	$_SESSION["on"] = "out";

	$json = $_POST['json'];

  	$infoID = "plus";
	$infoSC = "minus";

	$info = json_decode($json, true);

	$response_array['status'] = 'error1';

	if($info != null) { /* sanity check */


		// get id and pw from json 
		$logID = $info['id'];
	    $logSC = $info['sc'];

	    // check ID
	    if($logID !== $infoID){
	        $response_array['status'] = 'iderror';
	        $return_array = array(
	           'statusC' => $response_array);
	        echo json_encode($return_array);
	        return;
	    }

	    // check pw
	    if($logSC !== $infoSC){
	        $response_array['status'] = 'scerror';
	        $return_array = array(
	           'statusC' => $response_array);
	        echo json_encode($return_array);
	        return;
	    }

	    $response_array['status'] = 'loginsuccess';
	    
	    $_SESSION["on"] = "homerun";
	    $return_array = array('statusC' => $response_array);
	    echo json_encode($return_array);
	    return;


	}else {
		$response_array['status'] = 'error2';
		$return_array = array('statusC' => $response_array);
	    echo json_encode($return_array);
	  return;
	}




?>