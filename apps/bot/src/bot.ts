import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { join } from "path";
import fs from "fs";
import { musicPhoto, tunnel_url } from "./constants";

dotenv.config({
  path: join(process.cwd(), "..", "..") + "/.env",
});

const token: string = process.env.TOKEN || "";
const bot = new Telegraf(token, {
  telegram: {
    testEnv: false,
  },
});

// bot.on("web_app_data", (ctx) => {
//   console.log(ctx);
// });
// bot.use((ctx, next) => {
//   console.log(ctx);
// });
// bot.use(async (ctx, next) => {
//   console.log(ctx);
// });

bot.on("web_app_data", (ctx) => {
  console.log(ctx);
});

bot.start((ctx) => {
  const file = {
    source: fs.readFileSync(join(__dirname, "..", "media", "logo.png")),
  };
  ctx.replyWithPhoto(file, {
    caption:
      "Hello 👋 welcome to our bot you can listen to music through our bot. To search for music, go to Mini Apps through the menu below",
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

bot.help((ctx) => {
  ctx.replyWithAudio(
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1c/55/15/1c551554-35ac-1fc5-3924-9b6ede6dc95a/mzaf_15647324962729712637.plus.aac.ep.m4a",
    {
      title: "Music",
    }
  );
});

// Botni ishga tushirish
bot.launch(() => {
  console.log("Bot ishga tushdi");
});

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
