const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__MEDOOO-bot__ 
            _الاوامر الاداريه_
			+mute   | لاعطاء ميوت
			+unmute | لحدف الميوت
			+clear  | لمسح الشات 
			+bc     | للبرودكاست
			+server | معلومات السيرفر
			+....
			+....
			_الاوامر العامه_
			+time  | لمعرفت الوقت
			+....
			+....
			+....
			+....
            **`);
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
    }
});







client.login('NTU3OTMzODg5MDA4NTY2Mjcy.D3Pk-g.Q3JlTSpfIByG5pRO5gjVb3M55Ko');