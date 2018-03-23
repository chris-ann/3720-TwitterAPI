window.onload = init;

function init() {

	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_tweets.php', true); //this changes the state of xmlhttp
    xhr.send(null);
    xhr.onload = function() {
        document.getElementById("results").innerHTML = xhr.responseText;
    	if(xhr.status == 200){

            var tweets = JSON.parse(xhr.responseText);


            //  EXAMPLE OUTPUT TO A LIST
            var tweetList = "<ul>";
            tweets.forEach(function(tweet) {
                tweetList += "<li>" + tweet.user.name + "</li>";
            });
            tweetList += "</ul>"

    		document.getElementById("results").innerHTML = tweetList;
    		
    	} else {
            console.log(xhr);
        }
    }

}