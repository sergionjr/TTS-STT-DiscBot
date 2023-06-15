import { Client, Collection, GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import { ttsEngine } from './services/ttsService';
import { sttEngine } from './services/sttService';

import { Command } from './commands/Command';
import * as  from './commands/message-log'

dotenv.config({path: '../.env'});

const commands = new Collection<string, Command>();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts') && file !== 'Command.ts');
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping

]});
// Fresh insertion point

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    switch (interaction.commandName){
        case 'audio':
            await audioCommand
    }

})








// Old

async function loadCommands(){
    console.log("Loading commands...");
    const file = commandFiles[0];
    console.log("File: ", file);
    const commandModule = await import(path.join(__dirname, './commands', file));
    const command: Command = commandModule.default;
    console.log("Command: ", command);

    // for (const file of commandFiles){
    //     console.log("File: ", file);
        
    //     const commandModule = await import(path.join(__dirname, './commands', file));    
    //     const command: Command = commandModule.default;
    //     console.log("Command: ", command);
    //     commands.set(command.data.name, command);

    commands.set(command.data.name, command);
    console.log("Final Commands List: ", commands);

    // }
}

loadCommands();










client.once('ready', async () => {
    console.log('Ready!');

    // list all client guilds
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        console.log(guild.id);
        console.log(guild.ownerId); 
    
    });

    // Development Server guildId
    // const guildId = process.env.DEVELOPMENT_GUILD_ID;
    // cast guildid to an int
    
    const guild = client.guilds.fetch(`${process.env.DEVELOPMENT_GUILD_ID}`);



    for (const command of commands.values()){
        // await client.application?.commands.create(command.data.toJSON());

    }
    
    // setTimeout(() => {
    //     console.log("Timeout");
    // })
});








console.log(`Preparing to log in... Discord token: ${process.env.BOT_TOKEN}`);
client.login(process.env.BOT_TOKEN);


// for (const file of commandFiles){
    
//     console.log("File: ", file);

//     const command = require(`./commands/${file}`);
    
//     console.log("Command: ", command);
//     // console.log("Command.data: ", command.data);
//     // console.log("Command.data.name: ", command.data.name);


//     commands.set(command.slashCmd.name, command);
// }