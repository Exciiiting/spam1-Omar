const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === "test") {
  var ms = 12000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبرلا إله الا الله, سبحان الله, الحمدالله, الله اكبرلا إله الا الله, سبحان الله, الحمدالله, الله اكبرلا إله الا الله, سبحان الله, الحمدالله, الله اكبرلا إله الا الله, سبحان الله, الحمدالله, الله اكبرلا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});

 

  

client.login(process.env.BOT_TOKEN);
