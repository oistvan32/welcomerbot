    const Discord = require('discord.js'); //discord.js is already installed

    const client = new Discord.Client();

    const prefix = '!'; //This can be anything you want really, !, ., ect. This is the prefix (ex: !help)

    const fs = require('fs');

    client.once('ready', () => {
        console.log('Your bot is online'); //This will only be shown to you, but is still important. This tells you if you're bot is up and runnin'!
        client.user.setActivity("Holy Shit", { type: "STREAMING"}); //This is your bot's status, you can change STEAMING to: "PLAYING" or "LISTENING"
});

    client.on('guildMemberRemove', member =>{
        //This is the leave code
        const channel = member.guild.channels.cache.find(channel => channel.name === "welcome"); //You can change welcome to any text channel you want, "general", "new-doods", ect.
        if(!channel) return;

        channel.send(`●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\n${member}  sajnos elhagyta a szervert :tractor::dash:Reméljük vissza jössz....😭\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●`)
    });
    client.on('guildMemberAdd', member =>{
        //This is the welcome code
        const channel = member.guild.channels.cache.find(channel => channel.name === "welcome"); //You can change welcome to any text channel you want, "general", "new-doods", ect.
        if(!channel) return;

        channel.send(`●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●\nSzió ! ${member} köszönjük hogy be léptél a szerverünkre!Ha bármi kérdésed van kérdezz bátran!Ha van lehetőséged fusd át a szabályok szobát!😘\n●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●!`)
    });
client.login('ODM5Nzk1MzAzMDYyMDQ0Njky.YJO2Ug.PwP03XVSQLk7uG_dJl1GWk08DIg'); //PLEASE PUT YOU'RE BOT'S CLIENT ID HERE OR YOUR BOT WILL NOT WORK

//If you have node.js and know how it works, please in command promt go to the folder that the script is in-
//and type "node .". Hopefully the bot should work. Happy coding!
