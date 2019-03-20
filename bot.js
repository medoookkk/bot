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

client.on('message', message => {  //RayGamerMC ChatClear Code
    var prefix = "+"; //البريفكس الي تبيه
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) {
    if(!message.channel.guild) return message.reply('هذا الأمر شغال في السيرفرات فقط');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | ! انت لا تحمل خاصية **MANAGE_MESSAGES**');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ |! البوت لا يحمل خاصية **MANAGE_MESSAGES**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args); //Snow Codes RayGamerMC
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100'; //Snow Codes
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });  //كود مسح الشات





client.login(process.env.BOT_TOKEN);
