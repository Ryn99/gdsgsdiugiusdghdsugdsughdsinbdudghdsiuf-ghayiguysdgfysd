const Discord = require("discord.js");

const TOKEN = "NDc5Mjc3ODcwNjE1NzU2ODA2.DlW6mQ.poIV3ngjzpCn2oSQG1rDdKGBU2I";
const PREFIX = ">"

function generateHex(){
    return; "#" + Math.floor(Math.random() * 16777215).toString(16);
}


var fortunes = [
    "**Yes.**",
    "**No.**",
    "**Maybe.**",
    "**Yep!**",
    "**Nope!**",
    "**Depends..**"

];

var bot = new Discord.Client();

var server = {};

bot.on("ready", function() {
    console.log("DarkMagicRblx 2.0 Activated");
    bot.user.setGame("V3.11 | >Help")
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(message.content == "prefix") {
        message.channel.sendMessage("Here you go |   **>**   |")
    }

    if(!message.content.startsWith(PREFIX)) return;


    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
    case "8ball":
        if(args[1]) message.channel.sendMessage(fortunes[Math.floor  (Math.random() * fortunes.length)]); 
        else message.channel.sendMessage(":warning: Please type a question");
        break;
    case "cmds":
        var embed = new Discord.RichEmbed()
            .setTitle("**Commands**")
            .addField("Information", ">Darkmagicrblx **WEBSITE**")
            .addField("Solutions", ">Error **ERRORS ON SK8R**\n>Kicked **KICKED ON ROBLOX**\n>Open **SK8R DOESN'T LAUNCH**") .setThumbnail("https://cdn.discordapp.com/attachments/465907692930727936/465908615014776832/orangejusticeroblox.gif")
            .addField("Others", ">DM8ball **Direct Messages** \n>8ball **Questions**\n>Ping")
            .addField("Updates", ">Updatelog")
            .setColor(0xc21717)
        message.channel.sendEmbed(embed);
        break;
        case "darkmagicrblx":
            var embed = new Discord.RichEmbed()
                .setTitle("**Main link**")
                .setColor(0xc21717)
                .setDescription("https://darkmagicrblx.weebly.com/");
            message.channel.sendEmbed(embed);
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("**Help**", "Type in >cmds for Commands!")
                .addField("**About Club Dark Magic Rblx**", "Club Dark Magic Rblx is mainly a socializing area for the gaming platform, Roblox.")
                .addField("**How to use Sk8r**", "Skater is a full lua executor that allows you to execute almost all lua scripts in ROBLOX including loadstring(game:HttpGet), it is compatible for all windows\nversions, all you have to do is click the 'Get Key' button to get your key and input it to access the execution tab. The 'fire button' means Kill all roblox\nprocess, the 'eyedrop button' means inject, the 'power button' means close, the 'pin' button means make the form always on top and finally the '-'\nbutton means minimizing sk8r.  ")
                .setDescription("**Bot Created in 6/8/2018**")
                .setColor(0xc21717)
                .setFooter("*Bot is all made by: Ryn.#7252*")
            message.channel.sendEmbed(embed);
            break;
        case "error":
            var embed = new Discord.RichEmbed()
            .addField("**Errors**", "Download vcredist_x84 2017:\n https://aka.ms/vs/15/release/VC_redist.x86.exe")
            .setFooter("*(If you are on Windows 7 and it says an error on the installation then Update your windows, on Windows Update.)*")
            .setColor(0xc21717)
            message.channel.sendEmbed(embed);
            break;
        case "kicked":
            var embed = new Discord.RichEmbed()
            .addField("**Kicked by Roblox**", "Reinstall Roblox and join")
            .setColor(0xc21717)
            .setFooter("*Common Problem.*")
            message.channel.sendEmbed(embed);
            break;
        case "open":
            var embed = new Discord.RichEmbed()
            .addField("**How to fix sk8r not launching!**", "Install: http://www.mediafire.com/file/vl1a6a1htuqcqq9/Visual+C%2B%2B+v56.exe \nlaunch it and it will say **Y** and **N**\n press **Y** for yes just wait for a moment and your done! Now sk8r finally launches!")
            .setColor(0xc21717)
            message.channel.sendEmbed(embed);
            break;
        case "updatelog":
            var embed = new Discord.RichEmbed()
            .setTitle("Update Log 19/8/2018")
            .addField("**Newest Commands**", " \n>DM8ball")
            .addField("**Changes/Fixes**", "Color changes + Profile picture")
            .addField("**Extra**", "**NONE**")
            .setColor(0xc21717)
            message.channel.sendEmbed(embed);
            break;
        case "ping":
            var embed = new Discord.RichEmbed()
            .setDescription("**Pong!**")
            .setColor(0xc21717)
            message.channel.sendEmbed(embed);
            break;
        case "dm8ball":
            if(args[1]) message.author.sendMessage(fortunes[Math.floor  (Math.random() * fortunes.length)]); 
            else message.channel.sendMessage(":warning: Please type a question");
            break;
    default:
        message.channel.sendMessage("**Invalid command!**");
    }
});
bot.login(TOKEN);
