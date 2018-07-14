const { MessageAttachment } = require('discord.js');

const { Command } = require('discord.js-commando');
const jimp = require('jimp');

module.exports = class ImgCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'img',
            group: 'image',
            memberName: 'img',
            description: 'Turns the attached image black and white!',
            examples: ['img'],
            args: [
                {
                    key: 'text',
                    prompt: 'What edits/effects would you like to apply to the image?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, { text }) {
        let textarr = text.split(' ');

        let maxw = 2000;
        let maxh = 2000;

        let img = msg.attachments.first();

        // Width and height checks.
        if (img.width > maxw || img.height > maxh) {
            return msg.say(`Your image is too large! Try using one under ${maxw} pixels wide and ${maxh} pixels high.`);
        }
        if (img.width > maxw && img.height > maxh) {
            return msg.say(`Your image is too large! Try using one under ${maxw} pixels wide and ${maxh} pixels high.`);
        }

        imgSave(img.url);
        for (let i = 0; i < textarr.length; i += 1) {
            console.log('About to apply effect...');
            if (i == 'bw') {
                console.log('Effect = Black and White.');
                imgBw();
                console.log('Black and White effect resolved!');
            }
            console.log(`Finished loop ${i}!`);
        }

        let a = new MessageAttachment('img.png');

        return msg.say(`Here ya go!`);
    }
};

// Write the original image.
function imgSave(imgUrl) {
    jimp.read(imgUrl, function(err, image) {
        image.write('img.png');
    });
}

// Turns an image black and white.
function imgBw() {
    jimp.read('img.png', function(err, image) {
        image.greyscale().write('img.png');
    });
}