          const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://shopmg.glitch.me/`);
}, 280000);

const {
    Client,
    RichEmbed
} = require("discord.js");
var {
    Util
} = require('discord.js');
const {
    prefix,
    devs
} = require('./config')
const client = new Client({
    disableEveryone: true
})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const {
    get
} = require('snekfetch');
const db = require('quick.db')
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");




client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "help") {
    message.channel.send(`**اوامـر الـبوت
● | ${prefix}buy sfa/netflix amount -> لشراء حساب
● | ${prefix}add sfa/netflix email pass -> لاضافة حساب للبوت
● | ${prefix}give mention sfa/netflix amount -> لإرسال حساب لشخص
**`);
  }
});





const cools = [];
let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 8000; /*سعر الحساب الواحد الفل داتا*/
let Netflix = 30000; /*سعر الحساب الواحد العادي*/
let URID = '459069662576246787' //مين بيتحوله الكريديت
client.on('message', async message => { 
    let bOn = await db.fetch(`bOn_${message.guild.id}`)
    if (message == prefix + 'buy') {
        let ahmed = 0;
        let hossam = 0; 
      
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        sfa.forEach(acc => {
            if (!acc.email) return;  
            ahmed++;
        }); 
        nfa.forEach(acc => {
            if (!acc.email) return;
            hossam++;
        }); 
        message.channel.send(new Discord.RichEmbed().setTitle('💵 shop 💵') ///1
            .addField('**[SFA | فل داتا] > **', `**${ahmed} Account(s)**`, true).addField('**[Netflix ] > **', `**${hossam} Account(s)  **`, true).setColor('GREEN') 
            .addField('**تدري  **', `**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[Netflix]\` > حساب للمشاهده فقط ولا يمكن تغير الباس ورد**`) 
            .addField('**الاسعار**', `\`[1 SFA] > ${SFAP} Credits ProBot\` \n \`[1 Netflix] > ${Netflix} Credits ProBot\``)   
.addField('**معلومات**', `\`**عشان تشتري اي شي من هنا اكتب امر buy$**
** عشان تشتري فل داتا اكتب1 buy sfa$**
 **عشان تشتري نت فلكس 1 buy Netflix$ **
 **معلومه صغيره الرقم الاخير دي كميه الحسبات التبيها تشتريها **
 **الحسبات ضمان التجربه فقط وتغير الباسورد مالنا مسؤليه فيه** \` `)         
.setFooter(`
 `))
    } 
    if (message.content.startsWith(prefix + 'buy')) { 
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        let cmd = message.content.split(" ")[1]; 
        let args = message.content.split(" ")[2]; 
        if (!cmd || !args || isNaN(args)) return message.channel.send(`
 `); ///2
        if (cmd == 'sfa') { 
          if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 
            let ahmed = 0
            sfa.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            });
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
            message.author.send('✅ Nothing.. Just Check  If Your DM open or no| بنشوفك فاتح خاص ولا لا ').then(() => {
              
              
              cools[message.author.id + message.guild.id] = {
                status: "on"
              };
              let P = Math.floor(args * (SFAP)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P}
لديك 3 دقائق قبل الالغاء.**`));
                let P2 = Math.floor(P - (P * (5 / 100)));///3
                let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        sfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done شكرا للشراء من سيرفير Master Of Gold,,\nNow Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم حذف الرساله بعد 5 دقائق وبعد الحذف ينتهي الضمان  !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
                return message.channel.send('**:x: Please Open Your DM**!')
            })
        }
        if (cmd == 'Netflix') {
                    if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 

            let ahmed = 0;
            nfa.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            })
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية")
            message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(() => {
                let P = Math.floor(args * (Netflix)) 
                cools[message.author.id + message.guild.id] = {
                status: "on"
              };
                        let P3 = Math.floor(args * (Netflix)) 
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P3}
لديك 3 دقائق قبل الالغاء.**`));
                 P = Math.floor(P3 - (P3 * (5 / 100))); ///4
                   let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P}\` to <@${URID}> **`); 
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { 
                        let C = 0;
                        let Accs = []; 
                        nfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./nfa.json", JSON.stringify(Netflix), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done, Now Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
            })
        }
    }

  if (message.content.startsWith(prefix + 'add')) {


        if (message.author.id !== URID) return message.reply("** Only <@" + URID + "> can use this command.**");
        let type = message.content.split(" ")[1];
        let email = message.content.split(" ")[2];
        let pass = message.content.split(" ")[3];

        let types = ["sfa", "nfa", "send"]

        if (!email) return message.reply("Email?");
        if (!pass) return message.reply("Password !")
        if (type == "sfa") {
            let alt = {
                "email": `${email}`,
                "pass": `${pass}`
            }
            sfa.push(alt)
            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account done.**");


        } else if (type == "nfa") {
let alt = {      
  "email" : `${email}`,
"pass" : `${pass}`
}
            nfa.push(alt)
            fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account done.**");


        } 
    }
    if (message.content.startsWith(prefix + 'give')) {

        let type = message.content.split(" ")[2];
        let args = message.content.split(" ")[3];
        let user = message.mentions.users.first()

        if (!user) return message.channel.send("**Please mention a user**")

        if (!type) return message.channel.send("**Please input a alt type**")
        if (!args[0]) return message.reply("**Please input amount**")
        if (type === "sfa") {
            let C = 0;
            let Accs = []; 
            sfa.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; 
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                    if (err) console.error(err)
                }) 
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a sfa account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

        if (type === "Netflix") {
            let C = 0;
            let Accs = [];
            nfa.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; 
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./nfa.json", JSON.stringify(Netflix), (err) => {
                    if (err) console.error(err)
                }) 
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a Netflix account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

    }

})











