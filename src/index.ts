import { Client, Collection, GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv';
import { Command } from './commands/Command';
import fs from 'fs';
import path from 'path';

dotenv.config({path: '../.env'});
const commands = new Collection<string, Command>();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));
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

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.set(command.data.name, command);
}







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

