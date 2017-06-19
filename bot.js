console.log('The bot is firing up...GO!')

var Twit = require('twit');
var Config = require('./config');

var T = new Twit(Config);
