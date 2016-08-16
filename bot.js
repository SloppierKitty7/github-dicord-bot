var Discord = require("discord.js");
var bot = new Discord.Client();
var http = require('http')
var createHandler = require('github-webhook-handler')
var config = require("./config.json");
var handler = createHandler({ path: '/webhook', secret: config.secret })
console.log("Bot is ready.");


http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(config.port)
 
handler.on('error', function (err) {
  console.error('Error:', err.message)

})


bot.on('ready', () => {
var channel = bot.channels.get("name", config.channel_name).id; 
	//issue event
	handler.on('issues', function (event) {
		bot.channels.get("id", channel).sendMessage("**" + event.payload.issue.user.login + "** has opened an issue " + "**#" + event.payload.issue.number + "**" + " for " + "**" + event.payload.repository.name + "**" + "\ntitled  " + "**" + event.payload.issue.title + "**" + "\n\n```" + event.payload.issue.body + "```");
	});
	//push event
	handler.on('push', function (event) {
	  console.log('Received a push event for %s to %s',
		event.payload.repository.name,
		event.payload.ref)
		bot.channels.get("id", channel).sendMessage("**" + event.payload.head_commit.committer.name + "**" + " has pushed a commit to " + "**" + event.payload.repository.full_name + "**\n ```" + event.payload.head_commit.message + "```");
	})
});


bot.loginWithToken(config.token);


