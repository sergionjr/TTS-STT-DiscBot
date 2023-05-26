import { SlashCommandBuilder } from "discord.js";

// export module
export const commands = {
    data: new SlashCommandBuilder()
    .setName("Testcommand")
    .setDescription("This is a test command"),
    myvar: "testvar", 

async execute(interaction: any) {
        await interaction.reply("This is a test command");
    }
}