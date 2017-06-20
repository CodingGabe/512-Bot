console.log('The bot is firing up...GO!')

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// grab user for a stream
var stream = T.stream('user');
// if someone follows me
stream.on('follow', followed);

// function to post a tweet when called 
function tweetIt() {
  var tweet = {
    status: 'Check us out every Wednesday night at 7pm CST. #512goons'
  }
  T.post('statuses/update', tweet, tweeted);
  function tweeted(err, data, response) {
    if (err) {
      console.log('You done goofed');
    } else {
      console.log('Tweet posted!');
    }
  }
}
