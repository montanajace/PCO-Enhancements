// ==UserScript==
// @name         PCO Services Changes
// @namespace    PCOServicesChanges
// @include      https://services.planningcenteronline.com/*
// @author       Montana Selman
// @description  Enhancements to PCO Services
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://greasyfork.org/scripts/1003-wait-for-key-elements/code/Wait%20for%20key%20elements.js?version=49342
// @grant        GM_addStyle
// ==/UserScript==


/*--- ALL OF Services---*/

    $('head').append('<link href="//fonts.googleapis.com/css?family=Lato:400,700,700italic,400italic" rel="stylesheet" type="text/css">');
    $('head').append('<style>.col-1 {width: 8.33%;}.col-2 {width: 16.66%;}.col-3 {width: 25%;}.col-4 {width: 33.33%;}.col-5 {width: 41.66%;}.col-6 {width: 50%;}.col-7 {width: 58.33%;}.col-8 {width: 66.66%;}.col-9 {width: 75%;}.col-10 {width: 83.33%;}.col-11 {width: 91.66%;}.col-12 {width: 100%;}</style>');

    var mainContentWrap = $('div#content');

    waitForKeyElements('div#content',contentChanges);
    function contentChanges(jNode){
        jNode.css({"background-color":"#fff","height":"100vh"});
        $('.filler').remove();
    }

    $('html').css({"background":"#f4fef3"});
    waitForKeyElements("#wrap", shrinkWrap);
    function shrinkWrap(jNode){ 
        jNode.attr("style", jNode.attr("style")+"; max-width: 130em !important; margin: auto;");
    }

    waitForKeyElements("div.app-badge", appBadge);
    function appBadge(jNode){
        jNode.attr("style", jNode.attr("style") + "; width: 262px !important");
    }

    waitForKeyElements("div[style='position: relative; float: left']", tabNames);
    function tabNames(jNode){
        var plansLink = jNode.children('a#sub_menu_plans').contents();
        plansLink[plansLink.length-1].nodeValue = 'Plans';
        var songsLink = jNode.children('a#sub_menu_songs').contents();
        songsLink[songsLink.length-1].nodeValue = 'Songs';
        var mediaLink = jNode.children('a#sub_menu_media').contents();
        mediaLink[mediaLink.length-1].nodeValue = 'Media';
        var peopleLink = jNode.children('a#sub_menu_people').contents();
        peopleLink[peopleLink.length-1].nodeValue = 'People';
        
        jNode.children('a').css({'font-size':'11px','font-weight':'700'});
        
        $('.app-badge_button').css({'font-size':'14px','padding':'0px'});
    }

    waitForKeyElements("body", fontChanges);
    function fontChanges(jNode){
        jNode.css({"font-family":"'Lato', sans-serif","-webkit-font-smoothing":"antialiased"});
    }

/*--- DASHBOARD ---*/
    var innerContentWrap = $('div.content');

    waitForKeyElements("div.content", calendarChanges);
    function calendarChanges(jNode){
        $('div.org_logo').next().remove();
        var calendar = $('div.org_logo').next();
        jNode.append('<div id="calendarWrap"></div>');
        var calendarWrap = $('div#calendarWrap');
        calendar.appendTo(calendarWrap);
        calendarWrap.css({"float":"left","height":"100%","width":"215px","background":"#fff"});
    }
    waitForKeyElements("div#calendarWrap", uiChanges);
    function uiChanges(jNode) {
        $('#sidebar').remove();
        mainContentWrap.css({"padding-left":"0px"});
        //Gathering contents of 'My Schedule'
        var mySchedule = $('h4.sub_hdr1').nextUntil(jNode).andSelf();
        $('div.content').append('<div id="myScheduleItems"></div>')
        var myScheduleWrap = $('div#myScheduleItems');
        mySchedule.appendTo(myScheduleWrap);
    }
    
    
    
