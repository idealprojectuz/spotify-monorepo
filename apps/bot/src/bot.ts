import dotenv from "dotenv";
import { Bot } from "grammy";
import { InlineKeyboardButton, InputFile } from "grammy/types";
import { join } from "path";
import { musicPhoto, tunnel_url } from "./constants";
import fs from "fs";
// console.log();
dotenv.config({
  path: join(process.cwd(), "..", "..") + "/.env",
});

const token: any = process.env.TOKEN;
const bot = new Bot(token); // <-- put your bot token between the ""

bot.command("start", async (ctx) => {
  const file = new InputFile(
    fs.readFileSync(join(__dirname, "..", "media", "logo.png")),
    "logo.png"
  );
  ctx.replyWithPhoto(file, {
    caption:
      "Hello 👋 welcome to our bot you can listen to music through our bot To search for music go to Mini Apps through the menu below",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Mini Apps",
            web_app: {
              url: tunnel_url,
            },
          },
        ],
      ],
    },
  });
});

bot.command("help", (ctx) => {
  ctx.replyWithAudio(
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1c/55/15/1c551554-35ac-1fc5-3924-9b6ede6dc95a/mzaf_15647324962729712637.plus.aac.ep.m4a",
    {
      title: "Music",
    }
  );
});

bot.on("message", (ctx) => {
  const file = new InputFile(
    fs.readFileSync(join(__dirname, "..", "media", "logo.png")),
    "logo.png"
  );
  ctx.replyWithPhoto(file, {
    caption:
      "Hello 👋 welcome to our bot you can listen to music through our bot To search for music go to Mini Apps through the menu below",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Mini Apps",
            web_app: {
              url: tunnel_url,
            },
          },
        ],
      ],
    },
  });
});
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start({
  onStart(botInfo) {
    console.log("Bot running username " + botInfo.username);
  },
});
