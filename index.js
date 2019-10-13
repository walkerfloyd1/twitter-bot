const config = require('./config');

const Twit = require('twit');

const nickBot = new Twit({
    consumer_key: "eBkrxtzKU2FYqXCYJtUzr8gtg",
    consumer_secret: "6utlBvPvueFeanPWVHK4RFYbq375QwkY07FWMgUZzTP3OJcnOv",
    access_token: "517142263-FP8HrJrf3lEGIjtgY2x4zHnKTo2Y6sp8AEMgcQrd",
    access_token_secret: "qA0QZUOW4xccrrQNN7NZ5YhYcvI7uyWNS8UZy7LfW58nd"
});

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