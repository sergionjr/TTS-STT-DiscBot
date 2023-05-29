import { SlashCommandBuilder } from "discord.js";
import { Command } from "./Command";

const messageLog: Command = {
    data: new SlashCommandBuilder().setName('message-log').setDescription('Audits the user\'s message and information'),
    async execute(interaction){
        await interaction.reply(`User: ${interaction.user.username}
         has used a slashcommand: ${interaction.createdTimestamp}
         with the following arguments: ${interaction.options.data}`)
        },
    };