const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
  if(message.content.startsWith(process.env.PREFIX + "clear")) {

          
      let args = message.content.split(" ").slice(1);
  
      if(args >= 100) return message.channel.send("Vous ne pouvez pas clear plus de 100 messages en une fois.")
          
      if(!args[0]) return message.channel.send("Vous n'avez pas précisé le nombre de messages à supprimer.")
      message.channel.bulkDelete(args[0])

      
  }});
  
 client.on('message', function(message) {
      if(message.content.startsWith(process.env.PREFIX + "purge"))
          {
              message.channel.fetchMessages()
                 .then(function(list){
                      message.channel.bulkDelete(list)

      }
  
  )}});

client.on('message', message => {
    if(message.content.startsWith(process.env.PREFIX + 'ids')) {
      if (message.channel.type === "dm") return;   
       message.channel.send(`**${message.author.username} **` + "Voici ton ID: " + `__${message.author.id}__`);
    }});

 client.on('message', message => {
    if (message.content === 'ping') {
    message.channel.send('Pong !');
  }
})


  client.login(process.env.TOKEN);
