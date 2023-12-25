import { DiscordWebhook } from "https://deno.land/x/denocord_webhook@v1.20/mod.ts";
import "https://deno.land/std@0.191.0/dotenv/load.ts";

const DiscordWH = new DiscordWebhook(
  Deno.env.get("DISCORD_WEBHOOK_URL") ?? "",
);

console.log("\x1b[32m[Discord R18 Bot] Started\x1b[0m");

function send(text: string) {
  DiscordWH.sendMessage({
    text: text,
  });
}

Deno.cron("say", "1 * * * *",async () => {
  if (Math.random() > (Math.random() - 0.25)) {
    const url = (await fetch("https://rule34.xxx/index.php?page=post&s=random")).url;
    send(`
Discord R18 Bot (@amex2189)
${url}
`.trim());
  }
});