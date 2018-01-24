// Hide #top_bar on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#top_bar').height();


var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = new Date("Feburary 20, 2016 00:00:00");

var remainDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));




$(document).scroll(function(event){
    hasScrolled();
});

function hasScrolled() {

    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#top_bar').removeClass('nav-down').addClass('nav-up');
        $('#bot_bar').removeClass('more-down').addClass('more-up');
        $("#top_menu_bot").show();
        $('#bot_bar').hide();
    } else {
        // Scroll Up
        // when reach top
        if(st == 0) {
            $('#top_bar').removeClass('nav-up').addClass('nav-down');
            $('#bot_bar').removeClass('more-up').addClass('more-down');
            $("#top_menu_bot").hide();
            $('#bot_bar').show();

        }else{
            $('#top_bar').removeClass('nav-down').addClass('nav-up');
            $('#bot_bar').removeClass('more-down').addClass('more-up');
            $("#top_menu_bot").show();
            $('#bot_bar').hide();
        }
    }
    
    lastScrollTop = st;
}



function adjustHeightForLogin(width, height){
    w = parseInt(width);
    h = parseInt(height);

    hi = h - 35;

    if(h > 400){
        $("#inner_conent_login").css("height", hi);
    }
    
}




function adjustSize(width, height) {    
    w = parseInt(width);
    h = parseInt(height);

    if(w > 1890){
        wi= w - 550;
        $("#con_info").css("width", wi);
    }
    else if(w > 1200){
        wi= w - 450;
        $("#con_info").css("width", wi);
        hi = $("#con_info").height();
        $("#con_location").css("height", hi);
    }


    if(w > 960){
        $(".page_header").css("height", h);
    }
    else{
    }

    if(h > 700){
        hf = h - 120 - 55 - 35;
        $("iframe").css("height", hf);
    }

}

$(function() {
    adjustSize($(this).width(), $(window).height());
    $(window).resize(function() {
        adjustSize($(this).width(), $(this).height());
    });
});










function loadCircleListAll(){





}

function loadCircleListB(){

}

function loadCircleListC(){

}

function loadCircleListD(){

}
































$(document).ready(function(){

    $("#dday").html(remainDays);

    $("#top_menu_expand").click(function(){
        $('#top_bar').removeClass('nav-up').addClass('nav-down');
        $("#top_menu_bot").hide();
        return false;
    });

    


    $("#top_mb_menu_btn").click(function(){
        $("#mobile_menu_list").toggle("swing");

    });


    $("#menu_link_main").click(function(){
        $("#one_page").load("pages.html #page_main_half", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_main").addClass("sel");
            $("#bot_bar").removeClass("hide");
        });
    });

    $("#menu_link_notice").click(function(){
        $("#one_page").load("pages.html #page_notice", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_notice").addClass("sel");
            $("#bot_bar").removeClass("hide");
        });
    });

    /*
    $(document.body).on('click', '.mn_ntc_entry' ,function(){
        $("#one_page").load("pages.html #page_notice", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
        });
    });
    */
    $(document.body).on('click', '.ntc_entry_box' ,function(){
        return false;
    });


    $("#menu_link_info").click(function(){
        $("#one_page").load("pages.html #page_info", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_info").addClass("sel");
            $("#bot_bar").removeClass("hide");
        });

    });

























    $("#menu_link_circle").click(function(){
        $("#one_page").load("pages.html #page_circle_list", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_circle").addClass("sel");
            $("#bot_bar").removeClass("hide");

            $("#circ_list_wp").load("list_all.html #circ_list_all");
        });
    });

    $("#mb_menu_link_circle").click(function(){
        $("#one_page").load("pages.html #page_circle_list", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");

            $("#circ_list_wp").load("list_all.html #circ_list_all");
        });        
    });





    $(document.body).on('click', '#ccListA' ,function(){

        $("#circ_list_wp").load("list_all.html #circ_list_all");
        $(".circ_list_nav").removeClass('sel');
        $("#ccListA").addClass("sel");
        return false;
        
    });

    $(document.body).on('click', '#ccListB' ,function(){

        $("#circ_list_wp").load("list_all.html #circ_list_b");
        $(".circ_list_nav").removeClass('sel');
        $("#ccListB").addClass("sel");
        return false;
        
    });

    $(document.body).on('click', '#ccListC' ,function(){

        $("#circ_list_wp").load("list_all.html #circ_list_c");
        $(".circ_list_nav").removeClass('sel');
        $("#ccListC").addClass("sel");
        return false;
        
    });

    $(document.body).on('click', '#ccListD' ,function(){

        $("#circ_list_wp").load("list_all.html #circ_list_d");
        $(".circ_list_nav").removeClass('sel');
        $("#ccListD").addClass("sel");
        return false;
        
    });








































    $("#menu_link_event").click(function(){
        $("#one_page").load("pages.html #page_event", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_event").addClass("sel");

            $("#bot_bar").removeClass("hide");
        });        
    });

    $("#menu_link_qna").click(function(){
        $("#one_page").load("pages.html #page_qna", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $(".menu_link").removeClass('sel');
            $("#menu_link_qna").addClass("sel");

            $("#bot_bar").addClass("hide");
        });        
    });
    


    $("#menu_link_login").click(function(){$("#one_page").load("pages.html #page_login", function(){
            adjustHeightForLogin($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
            $(".menu_link").removeClass('sel');
            $("#menu_link_login").addClass("sel");

            $("#bot_bar").addClass("hide");
        });        
    });














    $("#mb_menu_link_main").click(function(){
        $("#one_page").load("pages.html #page_main_half", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
        });        
    });


    $("#mb_menu_link_notice").click(function(){$("#one_page").load("pages.html #page_notice", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
        });        
    });

    $("#mb_menu_link_info").click(function(){$("#one_page").load("pages.html #page_info", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
        });        
    });
    


    $("#mb_menu_link_event").click(function(){$("#one_page").load("pages.html #page_event", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
        });        
    });

    
    $("#mb_menu_link_qna").click(function(){$("#one_page").load("pages.html #page_qna", function(){
            adjustSize($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
            $("#bot_bar").hide();
        });        
    });



    $("#mb_menu_link_login").click(function(){$("#one_page").load("pages.html #page_login", function(){
            adjustHeightForLogin($(this).width(), $(window).height());
            $("#dday").html(remainDays);
            $("#mobile_menu_list").hide("swing");
            $("#bot_bar").hide();
        });        
    });















t




    $(document.body).on('click', '.evt_item' ,function(){

        var evtid_n = $(this).attr("id");
        var evtid = $(this).attr("id") + "_img";

        $(".evt_list_td").removeClass("sel");
        $(".evt_item").removeClass("sel");
        
        $("#"+evtid_n).parent().addClass("sel");
        $("#"+evtid_n).addClass("sel");


        $("#evt_detail").load("events.html #"+evtid);
        return false;
        
    });


    $(document.body).on('click', '#check_server_time' ,function(){

        var chk = 'timecheck';
        var jsonObject = {"chk" : chk};
        var timetext = "현재 서버 시간\n";
        
        $.ajax({
            url: "./php/servertimecheck.php",
            type: "POST",
            data: {json : JSON.stringify(jsonObject)},
            dataType: "json",
            success: function(data) {
                if(data.status == 'success'){
                    timetext = timetext + data.stime;
                    alert(timetext);
                }else{
                    alert("오류 발생!");
                }  
            }
        });

        return false;
        
    });


     $(document.body).on('click', '#circle_application_submit' ,function(){

        var entrycirclename, entrycirclepasscode, entrycircleinfo, entrycirclesize,
        entrycirclepicurl;
        var entryrepname, entryreprealname, entryemailid, entryhppasscode, entrynamesandyear,
        entrynamesonly, entryoneurl, entryonebanner, entrytwourl, entrytwobanner;


        entrycirclename = $("#entryCircleName").val();
        entrycirclepasscode = $("#entryCirclePasscode").val();
        entrycircleinfo = $("#entryCircleInfo").val();
        entrycirclesize = $("input[name=entrycirclesize]:checked").val();
        entrycirclepicurl = $("#entryCirclePicUrl").val();

        entryrepname = $("#entryRepName").val();
        entryreprealname = $("#entryRepRealName").val();
        entryemailid = $("#entryEmailId").val();
        entryhppasscode = $("#entryHpPasscode").val();
        entrynamesandyear = $("#entryNamesAndYear").val();

        /* optional */
        entryoneurl = $("#entryOneUrl").val();
        entryonebanner = $("#entryOneBanner").val();
        entrytwourl = $("#entryTwoUrl").val();
        entrytwobanner = $("#entryTwoBanner").val();

        var applicationstatus = "대기중";

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


        //부스 규모는 자동 셀렉


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

        var emReg = new RegExp("[\w\d]*@[\w\d]*");

        if (!emReg.test(entryemailid)){
            alert("이메일을 적어주세요.");
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



        $("#black01").css('height', $("#wrapper").height());
        $("#black01").show();

        var chk = 'entrysubmit';
        var jsonObject ={
            "entryCircleName" : entrycirclename, 
            "entryCirclePasscode" : entrycirclepasscode, 
            "entryCircleInfo" : entrycircleinfo, 
            "entryCircleSize" : entrycirclesize,
            "entryCirclePicUrl" : entrycirclepicurl, 
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
            "applicationStatus" : applicationstatus,
            "chk" : chk};


        
        var timetext = "제출하신 양식이 아래 시간에 접수되었습니다.\n";
        
        $.ajax({
            url: "./php/application_submit.php",
            type: "POST",
            data: {json : JSON.stringify(jsonObject)},
            dataType: "json",
            success: function(data) {
                if(data.status == 'success'){
                    timetext = timetext + data.stime ;
                    alert(timetext);
                    $("#black01").hide();
                    $("#application_form").load("pages.html #application_form_result" , function(){

                        $("#entryCircleName").html(entrycirclename);
                        $("#entryCirclePasscode").html(entrycirclepasscode);
                        $("#entryCircleInfo").html(entrycircleinfo);
                        $("#entryCircleSize").html(entrycirclesize);
                        $("#entryCirclePicUrl").html(entrycirclepicurl);

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

        return false;
        
    });

});