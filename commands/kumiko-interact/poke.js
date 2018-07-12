const { Command } = require('discord.js-commando');

module.exports = class PokeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            group: 'kumiko-interact',
            memberName: 'poke',
            description: 'Pokes Kumiko!',
            examples: ['poke']
        });
    }

    run(msg) {
        return msg.say(`Geh? Oh, hi ${msg.author.username}!`);
    }
};