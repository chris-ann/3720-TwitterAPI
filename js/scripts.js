window.onload = init;

function init() {

    function getTweets() {

    	var xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_tweets.php', true); //this changes the state of xmlhttp
        xhr.send(null);

        xhr.onload = function() {
            
            // check if response is 'okay'
        	if(xhr.status == 200){

                var data = JSON.parse(xhr.responseText);
                console.log(data);

                // Isolate the array of tweets (based on current search endpoint)
                tweets = data.statuses; 
                

                //  EXAMPLE : output to a list (replace with your own DOM update )
                var tweetList = "<ul>";
                tweets.forEach(function(tweet) {
                    tweetList += "<li>" + tweet.full_text + "</li>";
                });
                tweetList += "</ul>"
                // Update the DOM
        		document.getElementById("results").innerHTML = tweetList;

        		
        	} else {
                // if response is not okay, display the error message
                document.getElementById("results").innerHTML = xhr.responseText;
                console.log(xhr);
            }
        }
    }

    getTweets();

}