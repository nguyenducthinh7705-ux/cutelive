/* Cute Live Kit — theme theo game, art nhân vật chính thức và tiện ích dùng chung cho mọi màn */
(function () {
  'use strict';

  const LOGO = 'assets/logos/';
  const THEMES = {
    valorant:  { label: 'Valorant',            short: 'Valorant',   logo: 'valorant.svg', lh: 1.5,  p: '#ff4f6d', p2: '#ffd6de', a: '#7fd4e6', ink: '#3d1a26', bg1: '#fff1f4', bg2: '#ffd3dd', bg3: '#ffe9d9', tag: 'Headshot bằng tình yêu' },
    lol:       { label: 'League of Legends',   short: 'LMHT',       logo: 'lol.svg', lh: 1.3,  p: '#c8932f', p2: '#f6e6c4', a: '#6c9cf0', ink: '#2e2412', bg1: '#fff8ea', bg2: '#f3e2bd', bg3: '#dfe9ff', tag: 'Gánh team bằng sự đáng yêu' },
    tft:       { label: 'Đấu Trường Chân Lý',  short: 'ĐTCL',       logo: 'tft.svg', lh: 1.1,  p: '#9d6bf0', p2: '#ebdfff', a: '#f4b860', ink: '#2b1a45', bg1: '#f8f2ff', bg2: '#e4d4ff', bg3: '#ffeedd', tag: 'Top 1 hay top 8 đều dễ thương' },
    lienquan:  { label: 'Liên Quân Mobile',    short: 'Liên Quân',  logo: 'lienquan.png', lh: 1.3,  p: '#3f8cf5', p2: '#d8e8ff', a: '#f6b04f', ink: '#16294a', bg1: '#f1f7ff', bg2: '#d3e5ff', bg3: '#fff0dc', tag: 'Leo rank cùng bé cưng' },
    fconline:  { label: 'FC Online',           short: 'FC Online',  logo: 'fconline.png', lh: 1.2,  p: '#22b07d', p2: '#d2f3e5', a: '#f5c94e', ink: '#123628', bg1: '#effcf6', bg2: '#ccefdf', bg3: '#fff6d8', tag: 'Sút là vào, vào là vui' },
    genshin:   { label: 'Genshin Impact',      short: 'Genshin',    logo: 'genshin.svg', lh: 1.15,  p: '#8a74ec', p2: '#e6e0ff', a: '#f2c35f', ink: '#251d4d', bg1: '#f5f3ff', bg2: '#dcd3ff', bg3: '#fff3d9', tag: 'Gacha ra 5 sao nha' },
    minecraft: { label: 'Minecraft',           short: 'Minecraft',  logo: 'minecraft.svg', lh: .85, p: '#49a84d', p2: '#d8f0cf', a: '#c8955f', ink: '#1c3620', bg1: '#f2fcee', bg2: '#cfeec8', bg3: '#f6ead9', tag: 'Đào đào, xây xây, ngủ ngon' },
    pubg:      { label: 'PUBG',                short: 'PUBG',       logo: 'pubg.svg', lh: 1.45,  p: '#f08a2c', p2: '#ffe2c6', a: '#43b99a', ink: '#3f230c', bg1: '#fff6ec', bg2: '#ffdcba', bg3: '#e3f6ef', tag: 'Winner winner, gà rán dinner' },
    freefire:  { label: 'Free Fire',           short: 'Free Fire',  logo: 'freefire.svg', lh: 1,  p: '#f2603f', p2: '#ffd8cd', a: '#f6bd45', ink: '#40160c', bg1: '#fff4f0', bg2: '#ffd3c6', bg3: '#fff1d6', tag: 'Booyah dễ thương nhất server' },
    roblox:    { label: 'Roblox',              short: 'Roblox',     logo: 'roblox.svg', lh: .85,  p: '#ef5fa7', p2: '#ffd9ec', a: '#5cc5f2', ink: '#3d1a33', bg1: '#fff3f9', bg2: '#ffd6ea', bg3: '#dcf2ff', tag: 'Obby khó cũng không sợ' },
    chill:     { label: 'Trò chuyện',          short: 'Trò chuyện', logo: '',              p: '#f2729f', p2: '#ffdbe8', a: '#86c9f2', ink: '#401f33', bg1: '#fff4f8', bg2: '#ffd9e7', bg3: '#e2f2ff', tag: 'Ngồi xuống uống trà sữa nè' }
  };

  /* Art nhân vật chính thức của Riot:
     Valorant: ảnh trong game qua media.valorant-api.com; LMHT/ĐTCL: Data Dragon (CDN của Riot).
     Game không có kho ảnh công khai thì dùng logo. */
  const VALO = 'https://media.valorant-api.com/agents/';
  const VALO_AGENTS = [['Astra', '41fb69c1-4189-7b37-f117-bcaf1e96f1bf'], ['Breach', '5f8d3a7f-467b-97f3-062c-13acf203c006'], ['Brimstone', '9f0d8ba9-4140-b941-57d3-a7ad57c6b417'], ['Chamber', '22697a3d-45bf-8dd7-4fec-84a9e28c69d7'], ['Clove', '1dbf2edd-4729-0984-3115-daa5eed44993'], ['Cypher', '117ed9e3-49f3-6512-3ccf-0cada7e3823b'], ['Deadlock', 'cc8b64c8-4b25-4ff9-6e7f-37b4da43d235'], ['Fade', 'dade69b4-4f5a-8528-247b-219e5a1facd6'], ['Gekko', 'e370fa57-4757-3604-3648-499e1f642d3f'], ['Harbor', '95b78ed7-4637-86d9-7e41-71ba8c293152'], ['Hush', 'ddd5a15c-4fbe-42fa-3789-11a55ca5ee04'], ['Iso', '0e38b510-41a8-5780-5e8f-568b2a4f2d6c'], ['Jett', 'add6443a-41bd-e414-f6ad-e58d267f4e95'], ['KAY/O', '601dbbe7-43ce-be57-2a40-4abd24953621'], ['Killjoy', '1e58de9c-4950-5125-93e9-a0aee9f98746'], ['Miks', '7c8a4701-4de6-9355-b254-e09bc2a34b72'], ['Neon', 'bb2a4828-46eb-8cd1-e765-15848195d751'], ['Omen', '8e253930-4c05-31dd-1b6c-968525494517'], ['Phoenix', 'eb93336a-449b-9c1b-0a54-a891f7921d69'], ['Raze', 'f94c3b30-42be-e959-889c-5aa313dba261'], ['Reyna', 'a3bfb853-43b2-7238-a4f1-ad90e9e46bcc'], ['Sage', '569fdd95-4d10-43ab-ca70-79becc718b46'], ['Skye', '6f2a04ca-43e0-be17-7f36-b3908627744d'], ['Sova', '320b2a48-4d9b-a075-30f1-1f93a9b638fa'], ['Tejo', 'b444168c-4e35-8076-db47-ef9bf368f384'], ['Veto', '92eeef5d-43b5-1d4a-8d03-b3927a09034b'], ['Viper', '707eab51-4836-f488-046a-cda6bf494859'], ['Vyse', 'efba5359-4016-a1e5-7626-b1ae76895940'], ['Waylay', 'df1cb487-4902-002e-5c17-d28e83e78588'], ['Yoru', '7f94d92c-4234-0a36-9646-3a87eb8b5c89']];
  const DD = 'https://ddragon.leagueoflegends.com/cdn/';
  let lolVer = '16.21.1';

  // Trả về ảnh nhân vật theo game: kind 'cut' (ảnh tách nền), 'card' (ảnh dọc có nền) hoặc null
  function charArt(cfg) {
    if (cfg.game === 'valorant') {
      const id = /^[0-9a-f-]{36}$/.test(cfg.char) ? cfg.char : '569fdd95-4d10-43ab-ca70-79becc718b46';
      return { kind: 'cut', portrait: VALO + id + '/fullportrait.png', icon: VALO + id + '/displayicon.png' };
    }
    if (cfg.game === 'lol' || cfg.game === 'tft') {
      const id = /^[A-Za-z]+$/.test(cfg.char) ? cfg.char : 'Ahri';
      return { kind: 'card', portrait: DD + 'img/champion/loading/' + id + '_0.jpg', icon: DD + lolVer + '/img/champion/' + id + '.png' };
    }
    return null;
  }

  // Ô ảnh nhân vật; game không có art thì hiện logo
  function artHTML(cfg, t, which) {
    const art = charArt(cfg);
    if (!art) return `<span class="art-logo">${t.logo ? `<img src="${LOGO + t.logo}" alt="">` : `<b>${esc(cfg.gamename || t.label)}</b>`}</span>`;
    const src = which === 'icon' ? art.icon : art.portrait;
    return `<span class="${which === 'icon' ? 'art-icon ' : 'art-'}${art.kind}"><img src="${src}" alt="" onerror="this.parentNode.classList.add('broken');this.remove()"></span>`;
  }

  // Lấy bản Data Dragon mới nhất (ảnh vuông của tướng theo phiên bản)
  function loadLolVer() {
    return fetch('https://ddragon.leagueoflegends.com/api/versions.json').then(r => r.json()).then(v => { if (v && v[0]) lolVer = v[0]; return lolVer; }).catch(() => lolVer);
  }

  const DEFAULTS = {
    game: 'valorant', gamename: '', char: '', name: 'Mèo Gamer', handle: 'meogamer', rank: '', msg: '',
    layout: 'v', min: '5', at: '', cur: '36', goal: '100', next: '20:00 tối mai', msgs: '',
    cam: 'tr', camshape: 'sq', camsize: '380', ticker: '1', color: '', sound: '1', ws: ''
  };

  const DEFAULT_MSGS = [
    'Thả tim để mình bắn trúng đầu nha',
    'Follow {handle} để không lỡ live nè',
    'Tặng quà là mình múa liền',
    'Bình luận đi, mình đọc hết á'
  ];

  const Q = Object.fromEntries(new URLSearchParams(location.search));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  // Logo game thật; thiếu file thì tự hiện tên chữ
  function gameBadge(cfg, t) {
    const label = cfg.gamename || t.label;
    const text = `<span class="gtxt">${esc(label)}</span>`;
    if (!t.logo) return text;
    return `<img class="glogo" src="${LOGO + t.logo}" alt="${esc(label)}" style="--lh:${t.lh || 1}" onerror="this.parentNode.classList.add('nologo');this.remove()">` +
      (cfg.gamename ? text : `<span class="gtxt alt">${esc(label)}</span>`);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  function readCfg() {
    let saved = {};
    const fromUrl = Object.keys(DEFAULTS).some(k => k in Q);
    if (!fromUrl) { try { saved = JSON.parse(localStorage.getItem('cuteLive.cfg') || '{}') || {}; } catch (e) { /* storage bị chặn */ } }
    const out = Object.assign({}, DEFAULTS);
    Object.keys(DEFAULTS).forEach(k => { const v = k in Q ? Q[k] : saved[k]; if (v != null) out[k] = String(v); });
    return out;
  }

  function applyTheme(cfg) {
    const t = THEMES[cfg.game] || THEMES.chill;
    const s = document.documentElement.style;
    ['p', 'p2', 'a', 'ink', 'bg1', 'bg2', 'bg3'].forEach(k => s.setProperty('--' + k, t[k]));
    if (/^#[0-9a-f]{6}$/i.test(cfg.color || '')) s.setProperty('--p', cfg.color);
    document.body.classList.toggle('h', cfg.layout === 'h');
    return t;
  }

  function fit() {
    const st = document.querySelector('.stage');
    if (!st) return;
    const h = document.body.classList.contains('h');
    st.style.setProperty('--s', Math.min(innerWidth / (h ? 1920 : 1080), innerHeight / (h ? 1080 : 1920)));
  }

  function handleOf(cfg) { return '@' + String(cfg.handle || '').replace(/^@/, ''); }

  function bind(cfg, t) {
    const vals = { name: cfg.name, handle: handleOf(cfg), tag: cfg.msg || t.tag, rank: cfg.rank, next: cfg.next };
    document.querySelectorAll('[data-bind]').forEach(el => { el.textContent = vals[el.dataset.bind] || ''; });
    document.querySelectorAll('[data-game]').forEach(el => { el.classList.remove('nologo'); el.innerHTML = gameBadge(cfg, t); });
    document.querySelectorAll('[data-art]').forEach(el => { el.innerHTML = artHTML(cfg, t, el.dataset.art); });
  }

  // Bọc từng chữ số để đồng hồ có độ rộng cố định
  function digits(str) { return esc(str).replace(/\d/g, '<span class="dg">$&</span>'); }

  // Thanh vạch kiểu thanh đạn: n vạch, sáng theo tỉ lệ 0..1
  function segs(el, ratio, n) {
    n = n || 20;
    if (el.children.length !== n) { el.style.setProperty('--n', n); el.innerHTML = '<i></i>'.repeat(n); }
    const on = Math.round(Math.max(0, Math.min(1, ratio)) * n);
    Array.from(el.children).forEach((c, i) => c.classList.toggle('on', i < on));
  }

  function rotator(el, ms) {
    let list = [], i = 0, timer = null;
    return {
      set(next) {
        if (next.join('|') === list.join('|')) return;
        list = next; i = 0; el.textContent = list[0] || '';
        clearInterval(timer);
        if (list.length < 2) return;
        timer = setInterval(() => {
          i = (i + 1) % list.length;
          el.classList.add('out');
          setTimeout(() => { el.textContent = list[i]; el.classList.remove('out'); }, 380);
        }, ms);
      }
    };
  }

  function tickerList(cfg) {
    const list = cfg.msgs ? cfg.msgs.split('|').map(s => s.trim()).filter(Boolean) : DEFAULT_MSGS;
    return list.map(s => s.replace(/\{handle\}/g, handleOf(cfg)));
  }

  function fmt(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(total / 3600), m = Math.floor(total / 60) % 60, s = total % 60;
    const p = n => String(n).padStart(2, '0');
    return (h ? h + ':' + p(m) : p(m)) + ':' + p(s);
  }

  function targetTime(cfg, start) {
    const m = /^(\d{1,2}):(\d{2})$/.exec(cfg.at || '');
    if (m) {
      const d = new Date(start);
      d.setHours(+m[1], +m[2], 0, 0);
      if (d.getTime() < start - 6 * 3600e3) d.setDate(d.getDate() + 1);
      return d.getTime();
    }
    return start + Math.max(0, parseFloat(cfg.min) || 0) * 60000;
  }

  /* Kênh liên lạc giữa bảng điều khiển và overlay:
     BroadcastChannel + sự kiện storage (cùng trình duyệt / cùng OBS) + postMessage (iframe xem trước) */
  const subs = [];
  const seen = new Set();
  let bc = null;
  function channel() {
    if (!bc) { try { bc = new BroadcastChannel('cute-live'); bc.onmessage = e => deliver(e.data); } catch (e) { /* không hỗ trợ */ } }
    return bc;
  }
  function deliver(msg) {
    if (!msg || typeof msg !== 'object' || !msg.kind) return;
    if (msg.id) { if (seen.has(msg.id)) return; seen.add(msg.id); }
    subs.forEach(fn => fn(msg));
  }
  function listen(fn) {
    if (!subs.length) {
      channel();
      addEventListener('storage', e => {
        if (e.key === 'cuteLive.msg' && e.newValue) { try { deliver(JSON.parse(e.newValue)); } catch (err) { /* bỏ qua */ } }
      });
      addEventListener('message', e => deliver(e.data));
    }
    subs.push(fn);
  }
  function send(msg) {
    msg = Object.assign({ id: Date.now() + '-' + Math.random().toString(36).slice(2, 8) }, msg);
    try { channel() && bc.postMessage(msg); } catch (e) { /* bỏ qua */ }
    try { localStorage.setItem('cuteLive.msg', JSON.stringify(msg)); } catch (e) { /* bỏ qua */ }
    return msg;
  }

  /* Sự kiện TikTok thật qua Event API của TikFinity (ws://127.0.0.1:21213).
     Gói tin dạng {event, data}; tên người có thể ở data hoặc data.user;
     quà combo (giftType 1) gửi nhiều lần, chỉ lần có repeatEnd mới là cuối. */
  function normalizeEvent(m) {
    if (!m || typeof m !== 'object') return null;
    let type = String(m.event || m.type || (m.data && (m.data.event || m.data.type)) || '').toLowerCase();
    const d = (m.data && typeof m.data === 'object') ? m.data : m;
    const u = (d.user && typeof d.user === 'object') ? d.user : {};
    const user = String(d.nickname || u.nickname || d.uniqueId || u.uniqueId || 'Ai đó');
    if (type === 'social') {
      const dt = String(d.displayType || d.label || '');
      type = /follow/i.test(dt) ? 'follow' : /share/i.test(dt) ? 'share' : '';
    }
    if (type === 'follow') return { type: 'follow', user };
    if (type === 'share') return { type: 'share', user };
    if (type === 'subscribe') return { type: 'sub', user };
    if (type === 'gift') {
      const g = (d.giftDetails && typeof d.giftDetails === 'object') ? d.giftDetails : (d.gift && typeof d.gift === 'object') ? d.gift : {};
      const giftType = Number(d.giftType != null ? d.giftType : g.giftType) || 0;
      const end = d.repeatEnd === true || d.repeatEnd === 'true' || d.repeatEnd === 1;
      if (giftType === 1 && !end) return null;
      return { type: 'gift', user, gift: String(d.giftName || g.giftName || 'quà'), count: Math.max(1, parseInt(d.repeatCount, 10) || 1) };
    }
    return null;
  }

  // Một kết nối dùng chung cho cả trang; tự nối lại khi TikFinity mở lên sau
  const tk = { ws: null, url: '', timer: null, delay: 1500, subs: [], stat: [] };
  function tiktokConnect(url) {
    url = url || '';
    if (url === tk.url) return;
    tk.url = url;
    clearTimeout(tk.timer);
    if (tk.ws) { tk.ws.onclose = null; try { tk.ws.close(); } catch (e) { /* bỏ qua */ } tk.ws = null; }
    if (!url) { tk.stat.forEach(f => f(false)); return; }
    const retry = () => { if (tk.url !== url) return; tk.timer = setTimeout(open, tk.delay); tk.delay = Math.min(tk.delay * 2, 10000); };
    const open = () => {
      let ws;
      try { ws = new WebSocket(url); } catch (e) { retry(); return; }
      tk.ws = ws;
      ws.onopen = () => { tk.delay = 1500; tk.stat.forEach(f => f(true)); };
      ws.onmessage = e => {
        let m;
        try { m = JSON.parse(e.data); } catch (err) { return; }
        const ev = normalizeEvent(m);
        if (ev) tk.subs.forEach(f => f(ev));
      };
      ws.onclose = () => { tk.stat.forEach(f => f(false)); retry(); };
    };
    open();
  }
  const onTiktok = fn => tk.subs.push(fn);
  const onTiktokStatus = fn => tk.stat.push(fn);

  function init(onChange) {
    const state = { cfg: readCfg(), theme: null };
    const apply = () => {
      state.theme = applyTheme(state.cfg);
      bind(state.cfg, state.theme);
      fit();
      tiktokConnect(state.cfg.ws);
      if (onChange) onChange(state.cfg, state.theme);
    };
    apply();
    loadLolVer().then(v => { if (charArt(state.cfg) && state.cfg.game !== 'valorant') apply(); });
    listen(msg => { if (msg.kind === 'cfg' && msg.cfg) { state.cfg = Object.assign({}, DEFAULTS, msg.cfg); apply(); } });
    addEventListener('resize', fit);
    return state;
  }

  window.CL = { THEMES, DEFAULTS, LOGO, VALO, VALO_AGENTS, DD, q: Q, charArt, artHTML, loadLolVer, lolVer: () => lolVer, gameBadge, esc, digits, segs, readCfg, applyTheme, fit, rotator, tickerList, fmt, targetTime, listen, send, normalizeEvent, tiktokConnect, onTiktok, onTiktokStatus, init, pick };
})();
