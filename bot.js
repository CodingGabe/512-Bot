console.log('The bot is firing up...GO!')

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// grab user for a stream
// var stream = T.stream('user');
// if someone follows me
// stream.on('follow', followed);

tweetIt();
setInterval(tweetIt, 1000*60*60*24) // Set to tweet once a week when I stream

// function to post a tweet when called
function tweetIt() {
  var tweet = {
    status: 'Streaming live now! Check us out https://mixer.com/GABEthaGOON #512goons #SupportSmallStreamers'
  }
  T.post('statuses/update', tweet, tweeted); // twitter api call to post functions 
  function tweeted(err, data, response) {
    if (err) {
      console.log('You done goofed');
    } else {
      console.log('Tweet posted!');
    }
  }
}
