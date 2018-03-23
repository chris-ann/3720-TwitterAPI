<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "34574736-8o8OXv0kIdy6DuVKGjq9nqwI9ygxxpNQNsJCgBgnv",
	    'oauth_access_token_secret' => "oYdm0mGoPOH8P4LxZcWjp4p5By33hoSD9YekpYfVOhtU9",
	    'consumer_key' => "xC4i6RWvsMVq2I4SVK9HZ9TtR",
	    'consumer_secret' => "9PYAhhaWETYNdlX9GpIEMP1YNij8y1cCOtk03JQPEkku1jGgud"
	);

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/statuses/mentions_timeline.json";
	$getfield = '?screen_name=chrisannclark&count=20';
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

