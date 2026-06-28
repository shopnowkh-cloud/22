"""
Run this script to switch the bot from Replit polling → Cloudflare Worker webhook.
It checks SSL every 30s and switches automatically when Cloudflare is ready.
Usage: python switch_to_cloudflare.py
"""
import os, ssl, time, urllib.request, subprocess, logging

logging.basicConfig(format="%(asctime)s %(message)s", level=logging.INFO)

WORKER_URL  = "https://telegram-tts-bot.yyyyyyyyyyyyyyyy.workers.dev"
BOT_TOKEN   = os.environ["TELEGRAM_BOT_TOKEN"]
TG_API      = f"https://api.telegram.org/bot{BOT_TOKEN}"

def worker_is_up() -> bool:
    try:
        r = urllib.request.urlopen(WORKER_URL, timeout=8)
        return r.status == 200
    except Exception as e:
        logging.info(f"Worker not ready yet: {e}")
        return False

def set_webhook():
    import json
    req = urllib.request.Request(
        f"{TG_API}/setWebhook",
        data=json.dumps({"url": WORKER_URL, "drop_pending_updates": True}).encode(),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    resp = json.loads(urllib.request.urlopen(req, timeout=10).read())
    return resp.get("result", False)

def delete_webhook():
    import json
    req = urllib.request.Request(
        f"{TG_API}/deleteWebhook?drop_pending_updates=true",
        method="GET"
    )
    resp = json.loads(urllib.request.urlopen(req, timeout=10).read())
    return resp.get("result", False)

if __name__ == "__main__":
    logging.info(f"Monitoring Cloudflare Worker: {WORKER_URL}")
    logging.info("Will auto-switch when SSL is ready. Checking every 30s...")

    while True:
        if worker_is_up():
            logging.info("✅ Cloudflare Worker is UP!")
            logging.info("Stopping Replit polling bot...")
            subprocess.run(["pkill", "-f", "bot.py"], capture_output=True)
            time.sleep(3)
            logging.info("Setting Telegram webhook → Cloudflare Worker...")
            if set_webhook():
                logging.info(f"✅ Done! Bot is now running on Cloudflare Workers: {WORKER_URL}")
                logging.info("You can close this script.")
            else:
                logging.error("Failed to set webhook. Run again or set manually.")
            break
        else:
            logging.info("SSL not ready yet, checking again in 30s...")
            time.sleep(30)
