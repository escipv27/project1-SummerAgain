
var entrycirclename, entrycirclepasscode, entrycircleinfo, entrycirclesize,
entrycirclepicurl, entrycircleage;
var entryrepname, entryreprealname, entryemailid, entryhppasscode, entrynamesandyear,
entrynamesonly, entryoneurl, entryonebanner, entrytwourl, entrytwobanner;
















$(document).ready(function(){
















	$(document.body).on('click', '#user_login_btn' ,function(){

        var loginID, loginPC;

        loginID = $("#lgnEmailId").val();
        loginPC = $("#lgnHpPasscode").val();




        var emReg = new RegExp("[\w\d]*@[\w\d]*");

        if (!emReg.test(loginID)){
            alert("이메일을 적어주세요.");
            return false;
        }

        if(loginPC.length != 4 ){
            alert("비밀번호를 입력해주세요.");
            return false;
        }


        var chk = 'userlogin';
        var jsonObject ={
            "userloginID" : loginID, 
            "userloginPC" : loginPC, 
            "chk" : chk};


  
        $.ajax({
            url: "./php/user_page_login.php",
            type: "POST",
            data: {json : JSON.stringify(jsonObject)},
            dataType: "json",
            success: function(data) {
                if(data.statusC['status'] == 'loginsuccess'){



                    $("#one_page").load("pages_user.html #page_user_main", function(){



                    	entrycirclename = data.userA['entrycirclename'];
				        entrycirclepasscode = data.userA['entrycirclepasscode'];
				        entrycircleinfo = data.userA['entrycircleinfo'];
				        entrycirclesize = data.userA['entrycirclesize'];
				        entrycirclepicurl = data.userA['entrycirclepicurl'];
                        entrycircleage = data.userA['entrycircleage'];

				        entryrepname = data.userA['entryrepname'];
				        entryreprealname = data.userA['entryreprealname'];
				        entryemailid = data.userA['entryemailid'];
				        entryhppasscode = data.userA['entryhppasscode'];
				        entrynamesandyear = data.userA['entrynamesandyear'];

				        entryoneurl = data.userA['entryoneurl'];
				        entryonebanner = data.userA['entryonebanner'];
				        entrytwourl = data.userA['entrytwourl'];
				        entrytwobanner = data.userA['entrytwobanner'];




                    	$("#entryCirclePicUrl").attr("src", data.userA['entrycirclepicurl']);

                        $("#entryCircleName").html(data.userA['entrycirclename']);
                        $("#entryCirclePasscode").html(data.userA['entrycirclepasscode']);
                        $("#entryCircleInfo").html(data.userA['entrycircleinfo']);
                        $("#entryCircleSize").html(data.userA['entrycirclesize']);
                        $("#entryCircleAge").html(data.userA['entrycircleage']);

                        $("#entryRepName").html(data.userA['entryrepname']);
                        $("#entryRepRealName").html(data.userA['entryreprealname']);
                        $("#entryEmailId").html(data.userA['entryemailid']);
                        $("#entryHpPasscode").html(data.userA['entryhppasscode']);
                        $("#entryNamesAndYear").html(data.userA['entrynamesandyear']);

                        $("#entryOneUrl").html(data.userA['entryoneurl']);
                        $("#entryOneBanner").html(data.userA['entryonebanner']);
                        $("#entryTwoUrl").html(data.userA['entrytwourl']);
                        $("#entryTwoBanner").html(data.userA['entrytwobanner']);







                    });
                }else if(data.statusC['status'] == 'iderror'){
	        		alert("아이디 틀렸어!");
	        	}else if(data.statusC['status'] == 'scerror'){
	        		alert("비번 틀렸어!");
	        	}else{
	        		alert(data.statusC['status']);
	        	}	
            }
        });

        return false;
        
    });




	$(document.body).on('click', '#circle_application_modify_load' ,function(){

        $("#userp_contents").load("pages_user.html #userp_contents_modify_application", function(){
    		$("#entryCircleName").val(entrycirclename);
            $("#entryCirclePasscode").val(entrycirclepasscode);
            $("#entryCircleInfo").val(entrycircleinfo);
            $("#entryCircleSize").html(entrycirclesize);
            $("#entryCirclePicUrl").val(entrycirclepicurl);

            if(parseInt(entrycircleage) == '19'){                       
                $("#over19").prop("checked", true);
            }else{
                $("#under19").prop("checked", true);
            }


            $("#entryRepName").val(entryrepname);
            $("#entryRepRealName").val(entryreprealname);
            $("#entryEmailId").html(entryemailid);
            $("#entryHpPasscode").val(entryhppasscode);
            $("#entryNamesAndYear").val(entrynamesandyear);

            $("#entryOneUrl").val(entryoneurl);
            $("#entryOneBanner").val(entryonebanner);
            $("#entryTwoUrl").val(entrytwourl);
            $("#entryTwoBanner").val(entrytwobanner);
        });

        return false;
        
    });






	$(document.body).on('click', '#circle_application_modify_submit' ,function(){

        entrycirclename = $("#entryCircleName").val();
        entrycirclepasscode = $("#entryCirclePasscode").val();
        entrycircleinfo = $("#entryCircleInfo").val();
        //entrycirclesize = ;
        entrycirclepicurl = $("#entryCirclePicUrl").val();
        entrycircleage = $("input[name=entrycircleage]:checked").val();

        entryrepname = $("#entryRepName").val();
        entryreprealname = $("#entryRepRealName").val();
        //entryemailid = ;
        entryhppasscode = $("#entryHpPasscode").val();
        entrynamesandyear = $("#entryNamesAndYear").val();

        /* optional */
        entryoneurl = $("#entryOneUrl").val();
        entryonebanner = $("#entryOneBanner").val();
        entrytwourl = $("#entryTwoUrl").val();
        entrytwobanner = $("#entryTwoBanner").val();


        if(entrycirclename.length < 1){
            alert("서클명을 적어주세요.");
            return false;
        }

        if(entrycirclepasscode.length < 1){
            alert("서클 입장 비밀번호을 적어주세요.");
            return false;
        }

        if(entrycircleinfo.length < 1){
            alert("서클 소개를 적어주세요.");
            return false;
        }


        if(entrycirclepicurl.length < 1){
            alert("서클컷 URL을 적어주세요.");
            return false;
        }

        if(entryrepname.length < 1){
            alert("대표자 닉네임을 적어주세요.");
            return false;
        }
        if(entryreprealname.length < 1){
            alert("입금자명을 적어주세요.");
            return false;
        }



        if(entryhppasscode.length != 4 ){
            alert("비밀번호는 4자리로 정해주세요.");
            return false;
        }


        if(entrynamesandyear.length < 1){
            alert("참가자 닉네임과 생년을 적어주세요.");
            return false;
        }else{
            entrynamesonly = entrynamesandyear.replace(/\/\d{2}/g, "");
        }


        if(entryoneurl.length < 1){
            entryoneurl = "none";
        }
        if(entryonebanner.length < 1){
            entryonebanner = "none";
        }
        if(entrytwourl.length < 1){
            entrytwourl = "none";
        }
        if(entrytwobanner.length < 1){
            entrytwobanner = "none";
        }

        var chk = 'applicationmodify';
        var jsonObject ={
            "entryCircleName" : entrycirclename, 
            "entryCirclePasscode" : entrycirclepasscode, 
            "entryCircleInfo" : entrycircleinfo, 
            "entryCircleSize" : entrycirclesize,
            "entryCirclePicUrl" : entrycirclepicurl,
            "entryCircleAge" : entrycircleage, 
            "entryRepName" : entryrepname, 
            "entryRepRealName" : entryreprealname, 
            "entryEmailId" : entryemailid,
            "entryHpPasscode" : entryhppasscode, 
            "entryNamesAndYear" : entrynamesandyear, 
            "entryNamesOnly" : entrynamesonly, 
            "entryOneUrl" : entryoneurl,
            "entryOneBanner" : entryonebanner, 
            "entryTwoUrl" : entrytwourl, 
            "entryTwoBanner" : entrytwobanner,
            "chk" : chk};




        $.ajax({
            url: "./php/application_modify.php",
            type: "POST",
            data: {json : JSON.stringify(jsonObject)},
            dataType: "json",
            success: function(data) {
                if(data.status == 'success'){

                	alert("요청이 성공적으로 반영되었습니다. 수정사항을 다시 한 번 확인해주세요.");
                    $("#one_page").load("pages_user.html #page_user_main", function(){


                    	$("#entryCirclePicUrl").attr("src", entrycirclepicurl);

                        $("#entryCircleName").html(entrycirclename);
                        $("#entryCirclePasscode").html(entrycirclepasscode);
                        $("#entryCircleInfo").html(entrycircleinfo);
                        $("#entryCircleSize").html(entrycirclesize);
                        $("#entryCircleAge").html(entrycircleage);

                        $("#entryRepName").html(entryrepname);
                        $("#entryRepRealName").html(entryreprealname);
                        $("#entryEmailId").html(entryemailid);
                        $("#entryHpPasscode").html(entryhppasscode);
                        $("#entryNamesAndYear").html(entrynamesandyear);

                        $("#entryOneUrl").html(entryoneurl);
                        $("#entryOneBanner").html(entryonebanner);
                        $("#entryTwoUrl").html(entrytwourl);
                        $("#entryTwoBanner").html(entrytwobanner);

                    });

                }else{
                    alert("알 수 없는 오류 발생!");
                }  
            }
        });

        
    });




$(document.body).on('click', '#circle_application_load_mine' ,function(){

        
    $("#one_page").load("pages_user.html #page_user_main", function(){


        $("#entryCirclePicUrl").attr("src", entrycirclepicurl);

        $("#entryCircleName").html(entrycirclename);
        $("#entryCirclePasscode").html(entrycirclepasscode);
        $("#entryCircleInfo").html(entrycircleinfo);
        $("#entryCircleSize").html(entrycirclesize);
        $("#entryCircleAge").html(entrycircleage);

        $("#entryRepName").html(entryrepname);
        $("#entryRepRealName").html(entryreprealname);
        $("#entryEmailId").html(entryemailid);
        $("#entryHpPasscode").html(entryhppasscode);
        $("#entryNamesAndYear").html(entrynamesandyear);

        $("#entryOneUrl").html(entryoneurl);
        $("#entryOneBanner").html(entryonebanner);
        $("#entryTwoUrl").html(entrytwourl);
        $("#entryTwoBanner").html(entrytwobanner);

    });



        
    });




    $(document.body).on('click', '#circle_title_qna' ,function(){

        $("#userp_contents").load("pages_user.html #page_circle_board");
        return false;
        
    });



    $(document.body).on('click', '#circle_title_coop_req' ,function(){

        $("#userp_contents").load("pages_user.html #page_trc_board");
        return false;
        
    });





	$(document.body).on('click', '.userp_btn_not_ready' ,function(){

        alert("준비중입니다!");

        return false;
        
    });












});