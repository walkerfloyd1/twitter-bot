const config = require('./config');

const Twit = require('twit');

const nickBot = new Twit(config);

var users = ["517142263", "3215261003"];

var stream = nickBot.stream('statuses/filter', {
    follow: users
});

stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        nickBot.post('statuses/retweet/:id', {
            id: tweet.id_str
        }, function (err, data, response) {
            console.log(data)
        })
    }
});