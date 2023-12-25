import { DiscordWebhook } from "https://deno.land/x/denocord_webhook@v1.20/mod.ts";
import "https://deno.land/std@0.191.0/dotenv/load.ts";
import { parseBody } from "./bodyParser.ts";

const DiscordWH = new DiscordWebhook(
  Deno.env.get("DISCORD_WEBHOOK_URL") ?? "",
);

console.log("\x1b[32m[Discord R18 Bot] Started\x1b[0m");

function send(text: string) {
  DiscordWH.sendMessage({
    text: text,
  });
}


Deno.cron("say", "*/5 * * * *",async () => {
  if (Math.random() > 0.5) {

    const api = `https://api-popcord.vercel.app/img/nsfw?type=hentai_video`

    const res = await fetch(api);

    const url = await parseBody(res);

    send(`
[Ero Mode]
Discord R18 Bot (@amex2189)
${url}
全世界のエロ画像・動画をリアルタイム検索しています :)
`.trim());
  }else {
    const api = `https://api-popcord.vercel.app/img/sfw?type=anime_wallpaper`

    const res = await fetch(api);

    const url = await parseBody(res);

    send(`
[Kawaii Mode]
Discord R18 Bot (@amex2189)
${url}
日本アニメのかわいい画像をリアルタイム検索しています :)
`.trim());
  }
});