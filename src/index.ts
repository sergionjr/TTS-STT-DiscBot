import { Client, Collection, GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv';
import { Command } from './commands/Command';
import fs from 'fs';
import path from 'path';

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

async function loadCommands(){
    for (const file of commandFiles){
        console.log("File: ", file);
        
        const commandModule = await import(path.join(__dirname, './commands', file));    
        const command: Command = commandModule.slashCmd;
        console.log("Command: ", command);
        commands.set(command.data.name, command);

    }
}

loadCommands();










client.once('ready', async () => {
    console.log('Ready!');
    
    for (const command of commands.values()){
        await client.application?.commands.create(command.data.toJSON());
    }
    
    setTimeout(() => {
        console.log("Timeout");
    })
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