# github-discord-bot
a bot that uses github webhooks to post a message with data from the event into a text channel of your choice using [discord.js](https://pages.github.com/) & [github-webhook-handler](https://github.com/rvagg/github-webhook-handler) 

# Setup 
1. download the bot from the repo and place it in the directory you would like to have the bot installed in
2. run `npm install` and wait for it to finish 
3. open `config.json` with an editor you like and change the settings to fit your needs leave `secret` bank 
4. open the repo that you are an admin of and goto settings and then Webhooks & services and click Add webhook 	
	1. `Payload URL` is your server ip + port you set in `config.json` + `/webhook` e.g `62.252.232.35:7777/webhook` 
	2. Content type should be set to `application/json` 
	3. Secret is a key that can be set to anything but if anyone has this key they can make the bot announce changes to their repo in your server 
	4. now set your `Secret key` in `config.json`
	5. set `Which events would you like to trigger this webhook?` to `Send me everything.`
	6. and then add the hook
5. now run `npm start` on your server and the bot will come online and announce issues and comits to the repo 