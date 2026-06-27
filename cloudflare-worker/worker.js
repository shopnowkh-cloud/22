const TTS_TRUSTED_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';

const MALE_VOICES = {
  af:'af-ZA-WillemNeural',am:'am-ET-AmehaNeural',ar:'ar-SA-HamedNeural',
  az:'az-AZ-BabakNeural',bg:'bg-BG-BorislavNeural',bn:'bn-BD-PradeepNeural',
  bs:'bs-BA-GoranNeural',ca:'ca-ES-EnricNeural',cs:'cs-CZ-AntoninNeural',
  cy:'cy-GB-AledNeural',da:'da-DK-JeppeNeural',de:'de-DE-FlorianMultilingualNeural',
  el:'el-GR-NestorasNeural',en:'en-US-AndrewMultilingualNeural',es:'es-ES-AlvaroNeural',
  et:'et-EE-KertNeural',fa:'fa-IR-FaridNeural',fi:'fi-FI-HarriNeural',
  fil:'fil-PH-AngeloNeural',fr:'fr-FR-RemyMultilingualNeural',ga:'ga-IE-ColmNeural',
  gl:'gl-ES-RoiNeural',gu:'gu-IN-NiranjanNeural',he:'he-IL-AvriNeural',
  hi:'hi-IN-MadhurNeural',hr:'hr-HR-SreckoNeural',hu:'hu-HU-TamasNeural',
  id:'id-ID-ArdiNeural',is:'is-IS-GunnarNeural',it:'it-IT-GiuseppeMultilingualNeural',
  ja:'ja-JP-KeitaNeural',jv:'jv-ID-DimasNeural',ka:'ka-GE-GiorgiNeural',
  kk:'kk-KZ-DauletNeural',km:'km-KH-PisethNeural',kn:'kn-IN-GaganNeural',
  ko:'ko-KR-HyunsuMultilingualNeural',lo:'lo-LA-ChanthavongNeural',lt:'lt-LT-LeonasNeural',
  lv:'lv-LV-NilsNeural',mk:'mk-MK-AleksandarNeural',ml:'ml-IN-MidhunNeural',
  mn:'mn-MN-BataaNeural',mr:'mr-IN-ManoharNeural',ms:'ms-MY-OsmanNeural',
  mt:'mt-MT-JosephNeural',my:'my-MM-ThihaNeural',nb:'nb-NO-FinnNeural',
  ne:'ne-NP-SagarNeural',nl:'nl-NL-MaartenNeural',pl:'pl-PL-MarekNeural',
  ps:'ps-AF-GulNawazNeural',pt:'pt-BR-AntonioNeural',ro:'ro-RO-EmilNeural',
  ru:'ru-RU-DmitryNeural',si:'si-LK-SameeraNeural',sk:'sk-SK-LukasNeural',
  sl:'sl-SI-RokNeural',so:'so-SO-MuuseNeural',sq:'sq-AL-IlirNeural',
  sr:'sr-RS-NicholasNeural',su:'su-ID-JajangNeural',sv:'sv-SE-MattiasNeural',
  sw:'sw-KE-RafikiNeural',ta:'ta-IN-ValluvarNeural',te:'te-IN-MohanNeural',
  th:'th-TH-NiwatNeural',tr:'tr-TR-AhmetNeural',uk:'uk-UA-OstapNeural',
  ur:'ur-IN-SalmanNeural',uz:'uz-UZ-SardorNeural',vi:'vi-VN-NamMinhNeural',
  'zh-CN':'zh-CN-YunyangNeural','zh-TW':'zh-TW-YunJheNeural',zu:'zu-ZA-ThembaNeural',
};

const FEMALE_VOICES = {
  af:'af-ZA-AdriNeural',am:'am-ET-MekdesNeural',ar:'ar-SA-ZariyahNeural',
  az:'az-AZ-BanuNeural',bg:'bg-BG-KalinaNeural',bn:'bn-BD-NabanitaNeural',
  bs:'bs-BA-VesnaNeural',ca:'ca-ES-JoanaNeural',cs:'cs-CZ-VlastaNeural',
  cy:'cy-GB-NiaNeural',da:'da-DK-ChristelNeural',de:'de-DE-SeraphinaMultilingualNeural',
  el:'el-GR-AthinaNeural',en:'en-US-AvaMultilingualNeural',es:'es-ES-XimenaNeural',
  et:'et-EE-AnuNeural',fa:'fa-IR-DilaraNeural',fi:'fi-FI-NooraNeural',
  fil:'fil-PH-BlessicaNeural',fr:'fr-FR-VivienneMultilingualNeural',ga:'ga-IE-OrlaNeural',
  gl:'gl-ES-SabelaNeural',gu:'gu-IN-DhwaniNeural',he:'he-IL-HilaNeural',
  hi:'hi-IN-SwaraNeural',hr:'hr-HR-GabrijelaNeural',hu:'hu-HU-NoemiNeural',
  id:'id-ID-GadisNeural',is:'is-IS-GudrunNeural',it:'it-IT-IsabellaNeural',
  ja:'ja-JP-NanamiNeural',jv:'jv-ID-SitiNeural',ka:'ka-GE-EkaNeural',
  kk:'kk-KZ-AigulNeural',km:'km-KH-SreymomNeural',kn:'kn-IN-SapnaNeural',
  ko:'ko-KR-SunHiNeural',lo:'lo-LA-KeomanyNeural',lt:'lt-LT-OnaNeural',
  lv:'lv-LV-EveritaNeural',mk:'mk-MK-MarijaNeural',ml:'ml-IN-SobhanaNeural',
  mn:'mn-MN-YesuiNeural',mr:'mr-IN-AarohiNeural',ms:'ms-MY-YasminNeural',
  mt:'mt-MT-GraceNeural',my:'my-MM-NilarNeural',nb:'nb-NO-PernilleNeural',
  ne:'ne-NP-HemkalaNeural',nl:'nl-NL-ColetteNeural',pl:'pl-PL-ZofiaNeural',
  ps:'ps-AF-LatifaNeural',pt:'pt-BR-ThalitaMultilingualNeural',ro:'ro-RO-AlinaNeural',
  ru:'ru-RU-SvetlanaNeural',si:'si-LK-ThiliniNeural',sk:'sk-SK-ViktoriaNeural',
  sl:'sl-SI-PetraNeural',so:'so-SO-UbaxNeural',sq:'sq-AL-AnilaNeural',
  sr:'sr-RS-SophieNeural',su:'su-ID-TutiNeural',sv:'sv-SE-SofieNeural',
  sw:'sw-KE-ZuriNeural',ta:'ta-IN-PallaviNeural',te:'te-IN-ShrutiNeural',
  th:'th-TH-PremwadeeNeural',tr:'tr-TR-EmelNeural',uk:'uk-UA-PolinaNeural',
  ur:'ur-IN-GulNeural',uz:'uz-UZ-MadinaNeural',vi:'vi-VN-HoaiMyNeural',
  'zh-CN':'zh-CN-XiaoxiaoNeural','zh-TW':'zh-TW-HsiaoChenNeural',zu:'zu-ZA-ThandoNeural',
};

const SPEED_RATES = { 'x0.5':'-50%', 'x1':'+0%', 'x1.5':'+50%', 'x2':'+100%' };
const SPEED_LABELS = { 'x0.5':'🐢 ល្បឿន x0.5', 'x1':'▶️ ល្បឿន x1', 'x1.5':'⚡ ល្បឿន x1.5', 'x2':'🚀 ល្បឿន x2' };
const SPEED_EMOJI  = { 'x0.5':'🐢', 'x1':'▶️', 'x1.5':'⚡', 'x2':'🚀' };

function detectLanguage(text) {
  if (/[\u1780-\u17FF]/.test(text)) return 'km';
  if (/[\u0E00-\u0E7F]/.test(text)) return 'th';
  if (/[\u0E80-\u0EFF]/.test(text)) return 'lo';
  if (/[\u1000-\u109F]/.test(text)) return 'my';
  if (/[\u1200-\u137F]/.test(text)) return 'am';
  if (/[\u10A0-\u10FF]/.test(text)) return 'ka';
  if (/[\u0590-\u05FF]/.test(text)) return 'he';
  if (/[\u0900-\u097F]/.test(text)) return 'hi';
  if (/[\u0980-\u09FF]/.test(text)) return 'bn';
  if (/[\u0A80-\u0AFF]/.test(text)) return 'gu';
  if (/[\u0B80-\u0BFF]/.test(text)) return 'ta';
  if (/[\u0C00-\u0C7F]/.test(text)) return 'te';
  if (/[\u0C80-\u0CFF]/.test(text)) return 'kn';
  if (/[\u0D00-\u0D7F]/.test(text)) return 'ml';
  if (/[\u0D80-\u0DFF]/.test(text)) return 'si';
  if (/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text)) return 'ar';
  if (/[\u0400-\u04FF]/.test(text)) return 'ru';
  if (/[\u0370-\u03FF]/.test(text)) return 'el';
  if (/[\uAC00-\uD7FF]/.test(text)) return 'ko';
  if (/[\u3040-\u30FF]/.test(text)) return 'ja';
  if (/[\u4E00-\u9FFF\u3400-\u4DBF]/.test(text)) return 'zh-CN';
  return 'en';
}

function escapeSSML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function randomHex(len) {
  const arr = new Uint8Array(len / 2);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('');
}

function findHeaderEnd(bytes) {
  for (let i = 0; i < bytes.length - 3; i++) {
    if (bytes[i]===0x0d && bytes[i+1]===0x0a && bytes[i+2]===0x0d && bytes[i+3]===0x0a) {
      return i + 4;
    }
  }
  return -1;
}

async function synthesizeTTS(text, voice, rate) {
  const connId = randomHex(32);
  const wssUrl = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TTS_TRUSTED_TOKEN}&ConnectionId=${connId}`;

  const ws = new WebSocket(wssUrl);
  const audioChunks = [];

  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => { ws.close(); reject(new Error('TTS timeout')); }, 20000);

    ws.addEventListener('open', () => {
      const ts = new Date().toISOString();
      ws.send(
        `X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
        `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"ogg-24khz-16bit-mono-opus"}}}}`
      );
      const reqId = randomHex(32);
      const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody rate='${rate}'>${escapeSSML(text)}</prosody></voice></speak>`;
      ws.send(
        `X-RequestId:${reqId}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}\r\nPath:ssml\r\n\r\n` + ssml
      );
    });

    ws.addEventListener('message', (evt) => {
      if (evt.data instanceof ArrayBuffer) {
        const bytes = new Uint8Array(evt.data);
        const offset = findHeaderEnd(bytes);
        if (offset !== -1 && offset < bytes.length) {
          audioChunks.push(bytes.slice(offset));
        }
      } else if (typeof evt.data === 'string' && evt.data.includes('Path:turn.end')) {
        clearTimeout(timer);
        ws.close();
        resolve();
      }
    });

    ws.addEventListener('close', () => { clearTimeout(timer); resolve(); });
    ws.addEventListener('error', (e) => { clearTimeout(timer); reject(e); });
  });

  if (audioChunks.length === 0) return null;
  const total = audioChunks.reduce((acc, c) => acc + c.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of audioChunks) { out.set(c, off); off += c.length; }
  return out;
}

async function tgApi(token, method, body) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function tgApiForm(token, method, form) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    body: form,
  });
  return res.json();
}

function buildVoiceKeyboard(gender, speed) {
  return {
    inline_keyboard: [[
      {
        text: gender === 'male' ? '👩 សំឡេងស្រី' : '👨 សំឡេងប្រុស',
        callback_data: gender === 'male' ? 'voice:female' : 'voice:male',
      },
      {
        text: `${SPEED_EMOJI[speed] || '▶️'} ល្បឿន`,
        callback_data: `speed:${speed}`,
      }
    ]]
  };
}

function buildSpeedKeyboard(currentSpeed) {
  const keys = Object.keys(SPEED_RATES);
  return {
    inline_keyboard: [keys.map(s => ({
      text: (s === currentSpeed ? '✅ ' : '') + SPEED_LABELS[s],
      callback_data: `setspeed:${s}`,
    }))]
  };
}

async function getUserPref(kv, userId, key, def) {
  if (!kv) return def;
  try { const v = await kv.get(`u:${userId}:${key}`); return v ?? def; }
  catch { return def; }
}

async function setUserPref(kv, userId, key, value) {
  if (!kv) return;
  try { await kv.put(`u:${userId}:${key}`, value); } catch {}
}

async function handleUpdate(update, env) {
  const TOKEN = env.TELEGRAM_BOT_TOKEN;
  const KV = env.USER_PREFS || null;

  if (update.callback_query) {
    const cq = update.callback_query;
    const userId = cq.from.id;
    const chatId = cq.message?.chat?.id;
    const msgId = cq.message?.message_id;
    const data = cq.data || '';

    if (data.startsWith('voice:')) {
      const gender = data.split(':')[1];
      await setUserPref(KV, userId, 'gender', gender);
      const speed = await getUserPref(KV, userId, 'speed', 'x1');
      await tgApi(TOKEN, 'answerCallbackQuery', { callback_query_id: cq.id, text: gender === 'female' ? '👩 ប្តូរទៅសំឡេងស្រី' : '👨 ប្តូរទៅសំឡេងប្រុស', show_alert: false });
      if (chatId && msgId) {
        await tgApi(TOKEN, 'editMessageReplyMarkup', { chat_id: chatId, message_id: msgId, reply_markup: buildVoiceKeyboard(gender, speed) });
      }
    } else if (data.startsWith('speed:')) {
      const speed = await getUserPref(KV, userId, 'speed', 'x1');
      if (chatId && msgId) {
        await tgApi(TOKEN, 'editMessageReplyMarkup', { chat_id: chatId, message_id: msgId, reply_markup: buildSpeedKeyboard(speed) });
      }
      await tgApi(TOKEN, 'answerCallbackQuery', { callback_query_id: cq.id });
    } else if (data.startsWith('setspeed:')) {
      const newSpeed = data.split(':')[1];
      if (SPEED_RATES[newSpeed]) {
        await setUserPref(KV, userId, 'speed', newSpeed);
        const gender = await getUserPref(KV, userId, 'gender', 'female');
        if (chatId && msgId) {
          await tgApi(TOKEN, 'editMessageReplyMarkup', { chat_id: chatId, message_id: msgId, reply_markup: buildVoiceKeyboard(gender, newSpeed) });
        }
        await tgApi(TOKEN, 'answerCallbackQuery', { callback_query_id: cq.id, text: `✅ ល្បឿន ${newSpeed}`, show_alert: false });
      }
    }
    return;
  }

  if (!update.message) return;
  const msg = update.message;
  const chatId = msg.chat.id;
  const userId = msg.from?.id;
  const text = msg.text || '';

  if (!userId) return;

  if (text === '/start' || text.startsWith('/start ')) {
    const name = msg.from.first_name || 'អ្នកប្រើប្រាស់';
    await tgApi(TOKEN, 'sendMessage', {
      chat_id: chatId,
      text: `សួស្តី ${name}! 👋\n\nខ្ញុំជា Bot បំប្លែងអក្សរទៅជាសំឡេង 🎙️\n\nគ្រាន់តែវាយអក្សរ ឬផ្ញើសារទៅខ្ញុំ ហើយខ្ញុំនឹងបំប្លែងវាទៅជាសំឡេងភ្លាមៗ!\n\n🌍 គាំទ្រភាសាជាងមួយរយ: ខ្មែរ, ថៃ, អង់គ្លេស, ចិន, ជប៉ុន, អារ៉ាប់ ...\n\n👨 / 👩 ប្ដូរសំឡេងប្រុស/ស្រី\n🐢 ⚡ ប្ដូរល្បឿន`,
      parse_mode: 'HTML',
    });
    return;
  }

  if (!text || text.startsWith('/')) return;

  const gender = await getUserPref(KV, userId, 'gender', 'female');
  const speed = await getUserPref(KV, userId, 'speed', 'x1');
  const rate = SPEED_RATES[speed] || '+0%';

  const lang = detectLanguage(text);
  const voices = gender === 'male' ? MALE_VOICES : FEMALE_VOICES;
  const voice = voices[lang] || voices['en'];

  await tgApi(TOKEN, 'sendChatAction', { chat_id: chatId, action: 'record_voice' });

  let audioData;
  try {
    audioData = await synthesizeTTS(text, voice, rate);
  } catch (e) {
    await tgApi(TOKEN, 'sendMessage', { chat_id: chatId, text: '❌ មានបញ្ហាក្នុងការបំប្លែងសំឡេង។ សូមព្យាយាមម្ដងទៀត។' });
    return;
  }

  if (!audioData) {
    await tgApi(TOKEN, 'sendMessage', { chat_id: chatId, text: '❌ មិនអាចបំប្លែងសំឡេងបានទេ។' });
    return;
  }

  const form = new FormData();
  form.append('chat_id', String(chatId));
  form.append('voice', new Blob([audioData], { type: 'audio/ogg' }), 'voice.ogg');
  form.append('reply_markup', JSON.stringify(buildVoiceKeyboard(gender, speed)));
  if (msg.message_id) form.append('reply_parameters', JSON.stringify({ message_id: msg.message_id }));

  await tgApiForm(TOKEN, 'sendVoice', form);
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'GET') {
      return new Response('🤖 Telegram TTS Bot is running on Cloudflare Workers!', { status: 200 });
    }
    if (request.method === 'POST') {
      let update;
      try { update = await request.json(); } catch { return new Response('Bad Request', { status: 400 }); }
      ctx.waitUntil(handleUpdate(update, env));
      return new Response('OK', { status: 200 });
    }
    return new Response('Method Not Allowed', { status: 405 });
  },
};
