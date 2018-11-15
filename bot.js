const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
});

client.on('message', message => {
if (message.content === "test") {
  var ms = 120000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});

 const PREFIX = "#"
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 

  

client.login(process.env.BOT_TOKEN);
