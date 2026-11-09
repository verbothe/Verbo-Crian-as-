const ROOMS = [
  { id: 'bercario', name: 'Berçário', ages: '0 a 2 anos', cap: 6 },
  { id: 'maternal', name: 'Maternal', ages: '3 e 4 anos', cap: 8 },
  { id: 'juniores', name: 'Juniores', ages: '5 a 7 anos', cap: 10 },
  { id: 'kids', name: 'Kids', ages: '8 a 11 anos', cap: 12 }
];
const TIAS = [
  { id: 't1', name: 'Tia Raquel', room: 'bercario' },
  { id: 't2', name: 'Tia Joana', room: 'maternal' },
  { id: 't3', name: 'Tio Mateus', room: 'juniores' },
  { id: 't4', name: 'Tia Lia', room: 'kids' }
];
const FAMS = [
  { id: 'souza', name: 'Souza', phone: '(00) 90000-0001', guardians: ['Maria Souza (mãe)', 'João Souza (pai)', 'Dona Leila (avó)'] },
  { id: 'almeida', name: 'Almeida', phone: '(00) 90000-0002', guardians: ['Carla Almeida (mãe)', 'Tia Renata (madrinha)'] },
  { id: 'ferreira', name: 'Ferreira', phone: '(00) 90000-0003', guardians: ['Rafael Ferreira (pai)', 'Paula Ferreira (mãe)'] },
  { id: 'costa', name: 'Costa', phone: '(00) 90000-0004', guardians: ['Ana Costa (mãe)', 'Marcos Costa (pai)'] },
  { id: 'lima', name: 'Lima', phone: '(00) 90000-0005', guardians: ['Bruno Lima (pai)', 'Sônia Lima (avó)'] }
];
const KIDS = [
  { id: 'k1', name: 'Davi Souza', age: '4 anos', room: 'maternal', fam: 'souza', note: '', obs: '', status: 'in', time: '09:02', out: '', by: 'Maria Souza', code: 'DAVI-4821', cards: ['noe', 'pes'], packs: 1, packWeek: true },
  { id: 'k2', name: 'Lívia Souza', age: '1 ano', room: 'bercario', fam: 'souza', note: 'Alergia a leite de vaca e derivados', obs: 'Dorme com a chupeta', status: 'in', time: '09:02', out: '', by: 'Maria Souza', code: 'LIVI-1937', cards: ['ovelha'], packs: 0, packWeek: true },
  { id: 'k3', name: 'Pedro Almeida', age: '6 anos', room: 'juniores', fam: 'almeida', note: '', obs: '', status: 'in', time: '09:05', out: '', by: 'Carla Almeida', code: 'PEDR-7710', cards: ['daniel', 'ester', 'zaqueu'], packs: 0, packWeek: true },
  { id: 'k4', name: 'Sofia Ferreira', age: '9 anos', room: 'kids', fam: 'ferreira', note: '', obs: '', status: 'in', time: '09:08', out: '', by: 'Rafael Ferreira', code: 'SOFI-3302', cards: ['miria'], packs: 0, packWeek: true },
  { id: 'k5', name: 'Miguel Ferreira', age: '6 anos', room: 'juniores', fam: 'ferreira', note: 'Alergia a amendoim', obs: '', status: 'in', time: '09:08', out: '', by: 'Rafael Ferreira', code: 'MIGU-5568', cards: [], packs: 0, packWeek: true },
  { id: 'k6', name: 'Helena Costa', age: '3 anos', room: 'maternal', fam: 'costa', note: '', obs: '', status: 'out', time: '', out: '', by: '', code: 'HELE-2094', cards: [], packs: 0, packWeek: false },
  { id: 'k7', name: 'Théo Lima', age: '2 anos', room: 'bercario', fam: 'lima', note: '', obs: '', status: 'out', time: '', out: '', by: '', code: 'THEO-6641', cards: ['salomao'], packs: 0, packWeek: false },
  { id: 'k8', name: 'Arthur Lima', age: '8 anos', room: 'kids', fam: 'lima', note: '', obs: '', status: 'left', time: '09:10', out: '10:12', by: 'Bruno Lima', code: 'ARTH-9150', cards: ['josue', 'paulo'], packs: 0, packWeek: true }
];
const EVENTS = [
  { day: '08', mon: 'nov', w: 'Domingo', t: '9h', n: 'Culto infantil', note: 'Check-in a partir das 8h30.' },
  { day: '15', mon: 'nov', w: 'Domingo', t: '9h', n: 'Culto infantil', note: 'Se a criança tiver Bíblia, pode trazer.' },
  { day: '18', mon: 'nov', w: 'Quarta', t: '19h30', n: 'Encontro de pais', note: 'Conversa com a coordenação infantil sobre rotina e cuidado.' },
  { day: '22', mon: 'nov', w: 'Domingo', t: '9h', n: 'Culto infantil', note: 'Dia de histórias em família.' }
];
const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const PAST = [
  { d: '25/10', c: 38, v: 2, avg: '1h 48min' }, { d: '18/10', c: 44, v: 5, avg: '1h 55min' },
  { d: '11/10', c: 36, v: 1, avg: '1h 42min' }, { d: '04/10', c: 41, v: 3, avg: '1h 50min' }
];
const THEMES = ['Heróis da fé', 'Histórias de Jesus', 'Louvor e coragem'];
const CARDS = [
  { id: 'davi', theme: 0, name: 'Davi', color: '#35b8e8', story: 'Davi era um jovem pastor. Quando o gigante Golias desafiou o povo de Deus, todos ficaram com medo. Davi confiou em Deus e enfrentou o gigante com uma funda e uma pedra. Deus ajuda quem confia nele.' },
  { id: 'daniel', theme: 0, name: 'Daniel', color: '#9b59d0', story: 'Daniel orava a Deus todos os dias, mesmo quando uma lei proibiu. Ele foi colocado numa cova de leões, mas Deus fechou a boca dos leões e protegeu o seu amigo.' },
  { id: 'ester', theme: 0, name: 'Ester', color: '#ff5364', story: 'Ester era rainha e soube que seu povo corria perigo. Com muita coragem, foi falar com o rei e pedir ajuda. A coragem dela salvou muita gente.' },
  { id: 'noe', theme: 0, name: 'Noé', color: '#78c943', story: 'Noé construiu uma arca enorme porque Deus pediu. Cuidou dos animais e da família durante a chuva. Depois, Deus colocou um arco-íris no céu como sinal de promessa.' },
  { id: 'pes', theme: 1, name: 'Pães e peixes', color: '#ffc928', story: 'Um menino repartiu cinco pães e dois peixinhos. Jesus agradeceu a Deus e dividiu a comida, e todo mundo comeu até ficar satisfeito. Quando compartilhamos, Deus faz o pouco render.' },
  { id: 'samaritano', theme: 1, name: 'Bom samaritano', color: '#35b8e8', story: 'Um homem foi ferido na estrada. Dois passaram direto, mas um samaritano parou, cuidou dele e pagou a hospedagem. Jesus ensinou que amar é ajudar quem precisa.' },
  { id: 'ovelha', theme: 1, name: 'Ovelha perdida', color: '#78c943', story: 'Um pastor tinha cem ovelhas e uma se perdeu. Ele deixou as outras em segurança e foi procurá-la até encontrar. Deus cuida de cada um de nós.' },
  { id: 'zaqueu', theme: 1, name: 'Zaqueu', color: '#9b59d0', story: 'Zaqueu era baixinho e subiu numa árvore para ver Jesus passar. Jesus o chamou pelo nome e foi à casa dele. Zaqueu ficou tão feliz que decidiu ser generoso com todos.' },
  { id: 'miria', theme: 2, name: 'Miriã', color: '#ff5364', story: 'Miriã cuidou do irmãozinho Moisés quando ele era bebê e estava escondido no rio. Anos depois, ela cantou e dançou para louvar a Deus pela libertação do povo.' },
  { id: 'salomao', theme: 2, name: 'Salomão', color: '#ffc928', story: 'Salomão pediu a Deus sabedoria em vez de riquezas. Deus deu a sabedoria e ainda muito mais. Pedir ajuda a Deus é um ótimo começo.' },
  { id: 'paulo', theme: 2, name: 'Paulo e Silas', color: '#35b8e8', story: 'Paulo e Silas foram presos, mas à meia-noite cantaram louvores. Houve um tremor e as portas se abriram. Louvar dá coragem até nos dias difíceis.' },
  { id: 'josue', theme: 2, name: 'Josué', color: '#78c943', story: 'Deus pediu que Josué fosse forte e corajoso. Ele marchou com o povo ao redor de Jericó, e os muros da cidade caíram. Com Deus, ninguém caminha sozinho.' }
];
const QUICK = [
  { key: 'choro', label: 'Chorando', text: n => n + ' está chorando e não se acalma. Pode vir até a sala?' },
  { key: 'fralda', label: 'Trocar fralda', text: n => 'Precisamos trocar a fralda de ' + n + '. Pode vir até a sala?' },
  { key: 'mal', label: 'Mal-estar', text: n => n + ' está com sinais de mal-estar. Venha até a sala, por favor.' },
  { key: 'colo', label: 'Quer o colo', text: n => n + ' quer ficar com você. Pode vir até a sala?' },
  { key: 'livre', label: 'Mensagem livre', text: n => '' }
];
const newP = () => ({ tab: 'home', screen: null, sel: [], ckid: null, card: null, done: [], gained: 0 });
const newT = () => ({ tab: 'sala', screen: null, room: null, kid: null });
const state = {
  view: 'pais', fam: 'souza', sheet: null, visit: null, vn: 0, open: true, p: newP(), t: newT(), tia: 't2',
  g: 'painel', gq: '', gform: false, eform: false, alerts: [], audit: [],
  prefs: { avisos: true, lembretes: true, novidades: false, fotos: false }
};
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const now = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
const kid = id => KIDS.find(k => k.id === id);
const fam = id => FAMS.find(f => f.id === id);
const room = id => ROOMS.find(r => r.id === id);
const card = id => CARDS.find(c => c.id === id);
const tia = () => TIAS.find(x => x.id === state.tia);
const inRoom = id => KIDS.filter(k => k.room === id && k.status === 'in').length;
const kidAlerts = id => state.alerts.filter(a => a.kid === id);
const first = s => s.split(' (')[0].split(' ')[0];
const roomForAge = a => a <= 2 ? 'bercario' : a <= 4 ? 'maternal' : a <= 7 ? 'juniores' : 'kids';
const ageLabel = a => a < 1 ? 'menos de 1 ano' : a === 1 ? '1 ano' : a + ' anos';
const mins = t => { const x = t.split(':').map(Number); return x[0] * 60 + x[1]; };
const dur = (a, b) => { const d = Math.max(0, mins(b) - mins(a)); const h = Math.floor(d / 60); return (h ? h + 'h ' : '') + (d % 60) + 'min'; };
const log = (who, text) => state.audit.push({ t: now(), who, text });
function ageOpts(sel) {
  const labels = ['Menos de 1 ano', '1 ano'];
  for (let i = 2; i <= 11; i++) labels.push(i + ' anos');
  return labels.map((l, i) => '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>' + l + '</option>').join('');
}

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2800);
}

const CROWN = '<svg class="cr" viewBox="0 0 44 22" aria-hidden="true" focusable="false"><path d="M0 22L6 4l8 12L22 2l8 14 8-12 6 18z" fill="#ffc928"/></svg>';
const logo = stacked => '<span class="logo' + (stacked ? ' st' : '') + '" role="img" aria-label="Verbo Crianças">' + CROWN + '<span class="line"><span class="lv">Verbo</span><span class="lc">Crianças</span></span></span>';
const logoH = () => logo(false);
const logoS = () => logo(true);

function qr(code) {
  let s = 0; for (const c of code) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  const n = 9; let r = '';
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const f = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5);
    let on;
    if (f) { const lx = x % 6 % 3, ly = y % 6 % 3; on = !(lx === 1 && ly === 1); }
    else { s = (s * 1103515245 + 12345) >>> 0; on = ((s >>> 16) & 1) === 1; }
    if (on) r += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="currentColor"/>';
  }
  return '<svg class="qr" viewBox="-0.3 -0.3 9.6 9.6" role="img" aria-label="QR Code de exemplo de ' + esc(code) + '">' + r + '</svg>';
}

function cardArt(c) {
  const dots = [[16, 18], [84, 24], [80, 82], [18, 80]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (3 + i % 2) + '" fill="#fff" opacity=".7"/>').join('');
  const nm = c.name.length > 14 ? c.name.slice(0, 13) + '…' : c.name;
  return '<svg viewBox="0 0 100 130" role="img" aria-label="Carta ' + esc(c.name) + '"><rect width="100" height="130" rx="12" fill="' + c.color + '"/>' +
    '<circle cx="50" cy="52" r="33" fill="#fff" opacity=".35"/><circle cx="50" cy="52" r="26" fill="#fff"/>' + dots +
    '<text x="50" y="63" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="800" font-size="32" fill="#123b70">' + esc(c.name.charAt(0)) + '</text>' +
    '<path d="M0 96H100V118A12 12 0 0 1 88 130H12A12 12 0 0 1 0 118Z" fill="#123b70"/>' +
    '<text x="50" y="117" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="800" font-size="9.5" fill="#fff">' + esc(nm) + '</text></svg>';
}

const ico = d => '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
const IC = {
  back: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  home: ico('<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>'),
  kid: ico('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'),
  cal: ico('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  cards: ico('<rect x="7" y="3" width="13" height="17" rx="2"/><path d="M4 7v12a2 2 0 002 2h10"/>'),
  bell: ico('<path d="M6 17V11a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21h4"/>'),
  door: ico('<path d="M5 21V4h10v17"/><path d="M3 21h14"/><circle cx="12" cy="13" r=".8"/>'),
  grid: ico('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'),
  user: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  check: '<svg viewBox="0 0 80 80" width="88" height="88" fill="none" aria-hidden="true"><circle cx="40" cy="40" r="34" stroke="#78c943" stroke-width="6"/><path d="M25 41l11 11 20-23" stroke="#78c943" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 80 80" width="88" height="88" fill="none" aria-hidden="true"><circle cx="40" cy="40" r="32" stroke="#ffc928" stroke-width="6"/><path d="M40 22v19l12 7" stroke="#ffc928" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

function doCheckIn(k, by) {
  k.status = 'in'; k.time = now(); k.out = ''; k.by = by;
  if (!k.visitor && !k.packWeek) { k.packWeek = true; k.packs = (k.packs || 0) + 1; return true; }
  return false;
}

function statusChip(k) {
  if (k.status === 'left') return '<span class="chip left">Saiu</span>';
  const a = kidAlerts(k.id).slice(-1)[0];
  if (a && a.reply) return '<span class="chip ok">Responsável a caminho</span>';
  if (a) return '<span class="chip sun">Aviso enviado ' + a.time + '</span>';
  return '<span class="chip">Em sala</span>';
}

const bandLogo = () => '<div class="appbar">' + logoS() + '<button type="button" class="pbtn" data-perfil>' + IC.user + 'Perfil</button></div>';
const bandBack = (title, sub) => '<div class="appbar"><div class="back"><button type="button" class="iconbtn" data-back aria-label="Voltar">' + IC.back + '</button><div class="bt"><strong>' + title + '</strong>' + (sub ? '<small>' + sub + '</small>' : '') + '</div></div></div>';
const bandTia = t => '<div class="appbar">' + logoS() + '<div class="role"><strong>' + esc(t.name) + '</strong><small>Equipe · ' + room(t.room).name + '</small></div></div>';

/* ================= APP DOS PAIS ================= */
function packBanner(mine, label) {
  const packs = mine.reduce((n, k) => n + (k.packs || 0), 0);
  return packs ? '<div class="packbox"><div><strong>Você tem ' + packs + (packs > 1 ? ' pacotes' : ' pacote') + ' para abrir</strong><span>Descubra uma nova história.</span></div><button type="button" class="btn hl" data-tab="conteudos">' + label + '</button></div>' : '';
}

function tabHome(f, mine) {
  const ids = mine.map(k => k.id), ev = EVENTS[0];
  const last = state.alerts.filter(a => ids.includes(a.kid)).slice(-1)[0];
  return '<div><h2>Olá! Que bom ter vocês aqui.</h2><p class="sub">Acompanhe a jornada da sua criança.</p></div>' +
    '<div class="tiles"><button type="button" class="tile blue" data-tab="crianca"><strong>Minha criança</strong><span>Acessar</span></button>' +
    '<button type="button" class="tile yel" data-tab="agenda"><strong>Agenda</strong><span>Acessar</span></button>' +
    '<button type="button" class="tile grn" data-tab="conteudos"><strong>Conteúdos</strong><span>Acessar</span></button></div>' +
    '<section class="card"><p class="sec">Próximo encontro</p><strong>' + esc(ev.n) + '</strong><span class="meta">' + ev.w + ', ' + ev.day + '/' + (MONTHS.indexOf(ev.mon) + 1) + ' · ' + esc(ev.t) + '</span><span><span class="chip' + (state.open ? ' ok' : ' sun') + '">' + (state.open ? 'Check-in aberto' : 'Check-in começa às 8h30') + '</span></span></section>' +
    '<section class="card"><p class="sec">Aviso recente</p>' + (last ? '<span class="time">' + last.time + ' · ' + esc(kid(last.kid).name) + '</span><span>' + esc(last.text) + '</span><button type="button" class="btn" data-tab="avisos">Ver avisos</button>' : '<span class="hint">Ainda não há avisos para esta turma.</span>') + '</section>' +
    packBanner(mine, 'Ver conteúdos');
}

function tabCrianca(f, mine) {
  const p = state.p;
  const rows = mine.map(k => {
    const can = state.open && k.status === 'out';
    const info = '<span class="meta">' + room(k.room).name + ' · ' + (k.status === 'in' ? 'em sala desde ' + k.time : k.status === 'left' ? 'saiu às ' + k.out : 'aguardando check-in') + '</span>';
    return '<div class="krow">' + (can
      ? '<label><input type="checkbox" data-pick="' + k.id + '"' + (p.sel.includes(k.id) ? ' checked' : '') + '><span>' + esc(k.name) + '<br>' + info + '</span></label>'
      : '<div><strong>' + esc(k.name) + '</strong><br>' + info + '</div>') +
      '<button type="button" class="link" data-detail="' + k.id + '">Detalhes</button></div>';
  }).join('');
  const anyOut = mine.some(k => k.status === 'out');
  const top = !state.open
    ? '<div class="hero wait">' + IC.clock + '<h2>Ainda não abriu</h2><p>O check-in começa às 8h30. Volte em alguns minutinhos.</p></div>'
    : '<p class="hint">' + (anyOut ? 'Marque quem vai para a sala e toque em Fazer check-in.' : 'Tudo certo por aqui. Bom culto!') + '</p>';
  return '<h2>Minha criança</h2>' + top + '<div style="display:grid;gap:10px">' + rows + '</div>' +
    (state.open && anyOut ? '<button type="button" class="btn primary wide" id="doci" data-docheckin' + (p.sel.length ? '' : ' disabled') + '>' + (p.sel.length ? 'Fazer check-in (' + p.sel.length + ')' : 'Fazer check-in') + '</button>' : '');
}

function tabAgenda() {
  return '<div><h2>Agenda</h2><p class="sub">Cultos, encontros e orientações.</p></div>' +
    EVENTS.map(e => '<article class="card ev"><div class="date"><b>' + esc(e.day) + '</b><small>' + esc(e.mon) + '</small></div><div><strong>' + esc(e.n) + '</strong><span class="meta">' + esc(e.w) + ' · ' + esc(e.t) + '</span><span class="meta">' + esc(e.note) + '</span></div></article>').join('');
}

function alertCard(a, withBtn) {
  return '<article class="notif' + (a.reply ? ' done' : '') + '"><div class="time">' + a.time + ' · ' + esc(kid(a.kid).name) + ' · ' + room(kid(a.kid).room).name + (a.by ? ' · ' + esc(a.by) : '') + '</div><p>' + esc(a.text) + '</p>' +
    (a.reply ? '<span><span class="chip ok">Você respondeu: estou indo</span></span>' : withBtn ? '<button type="button" class="btn primary" data-reply="' + a.id + '">Estou indo</button>' : '') + '</article>';
}

function tabAvisos(mine) {
  const ids = mine.map(k => k.id);
  const notes = state.alerts.filter(a => ids.includes(a.kid)).slice().reverse();
  return '<h2>Avisos</h2>' + (notes.length ? notes.map(a => alertCard(a, true)).join('') : '<p class="hint">Ainda não há avisos para esta turma.</p>');
}

function tabConteudos(mine) {
  const p = state.p, k = kid(p.ckid && mine.some(x => x.id === p.ckid) ? p.ckid : mine[0].id);
  const pills = mine.length > 1 ? '<div class="pills" role="group" aria-label="Escolher criança">' + mine.map(x => '<button type="button" data-ckid="' + x.id + '" aria-pressed="' + (x.id === k.id) + '">' + esc(x.name.split(' ')[0]) + '</button>').join('') + '</div>' : '';
  const pct = Math.round(k.cards.length / CARDS.length * 100);
  const banner = k.packs > 0
    ? '<div class="packbox"><div><strong>Pacote para abrir!</strong><span>Toque para descobrir uma história.</span></div><button type="button" class="btn hl" data-openpack="' + k.id + '">Abrir pacote</button></div>'
    : '<p class="hint">Cada criança ganha 1 pacote por semana ao fazer check-in.</p>';
  const grids = THEMES.map((t, i) => '<h3>' + t + '</h3><div class="grid4">' + CARDS.filter(c => c.theme === i).map(c => k.cards.includes(c.id)
    ? '<button type="button" class="gc" data-story="' + c.id + '" aria-label="Abrir história de ' + esc(c.name) + '">' + cardArt(c) + '</button>'
    : '<div class="gc locked"><div class="lk" aria-hidden="true">?</div><span>Bloqueada</span></div>').join('') + '</div>').join('');
  return '<div><h2>Conteúdos</h2><p class="sub">Histórias bíblicas de ' + esc(k.name.split(' ')[0]) + ' · ' + k.cards.length + ' de ' + CARDS.length + ' cartas</p></div>' + pills +
    '<div class="prog" role="progressbar" aria-label="Cartas da coleção" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></div>' + banner + grids;
}

function screenDone() {
  const p = state.p, names = p.done.map(id => esc(kid(id).name.split(' ')[0]));
  const list = names.length > 1 ? names.slice(0, -1).join(', ') + ' e ' + names[names.length - 1] : names[0];
  return '<div class="hero">' + IC.check + '<h2>Check-in feito!</h2><p>' + list + (names.length > 1 ? ' já estão' : ' já está') + ' na sala. Fique tranquilo: se precisarmos de você, a equipe avisa por notificação aqui no app.</p></div>' +
    (p.gained ? '<div class="packbox"><div><strong>Você ganhou ' + p.gained + (p.gained > 1 ? ' pacotes' : ' pacote') + ' de cartas</strong><span>Vale 1 por criança a cada semana.</span></div><button type="button" class="btn hl" data-tab="conteudos">Abrir agora</button></div>' : '') +
    '<button type="button" class="btn wide" data-back>Voltar ao início</button>';
}

function screenDetail(k, staff) {
  const f = fam(k.fam), phone = f.phone || '';
  return (k.by ? '<p class="sec">Responsável pelo check-in</p><div class="kv"><div class="full"><strong>' + esc(k.by) + '</strong><small>Telefone ' + esc(phone) + '</small></div></div>' : '<p class="hint">Ainda não houve check-in hoje.</p>') +
    '<div class="care"><strong>Cuidados da criança</strong><span><b>Restrições alimentares:</b> ' + esc(k.note || 'Nenhuma informada') + '</span><span><b>Observações:</b> ' + esc(k.obs || 'Nenhuma') + '</span><span><b>Necessidades específicas:</b> Não informado</span></div>' +
    (k.status !== 'out' ? '<div class="kv"><div><small>Check-in</small><strong>' + k.time + '</strong></div><div><small>Check-out</small><strong>' + (k.out || 'Ainda na sala') + '</strong></div>' +
      '<div class="full"><small>Tempo de permanência</small><strong>' + dur(k.time, k.out || now()) + (k.out ? '' : ' até agora') + '</strong></div>' +
      '<div class="full"><small>Identificação da criança</small><strong>#' + esc(k.code) + '</strong></div></div>' : '') +
    (!staff && k.status === 'in' ? '<div class="pkid"><div><strong>QR Code de retirada</strong><p class="meta" style="margin:4px 0 0">Mostre à equipe na saída.</p></div>' + qr(k.code) + '</div>' : '') +
    (staff && k.status === 'in' ? '<div class="actions"><button type="button" class="btn hl" data-alert="' + k.id + '">Avisar pais</button><button type="button" class="btn" data-out="' + k.id + '">Check-out</button></div>' : '');
}

function screenPack() {
  const c = card(state.p.card);
  return '<div class="bigcard">' + cardArt(c) + '</div>' +
    '<div class="hero" style="padding-top:4px"><h2>' + esc(c.name) + '</h2><p>' + THEMES[c.theme] + '</p></div>' +
    '<button type="button" class="btn primary wide" data-story="' + c.id + '">Ler a história</button>';
}

function screenStory() {
  const c = card(state.p.card);
  return '<div class="bigcard" style="width:140px">' + cardArt(c) + '</div><p class="story">' + esc(c.story) + '</p>';
}

function screenPerfil(f) {
  const pr = state.prefs;
  const chk = (key, label, hint, locked) => '<label class="prow"><input type="checkbox" data-pref="' + key + '"' + (pr[key] || locked ? ' checked' : '') + (locked ? ' disabled' : '') + '><span><strong>' + label + '</strong><small>' + hint + '</small></span></label>';
  return '<div class="kv"><div class="full"><strong>' + esc(f.guardians[0].split(' (')[0]) + '</strong><small>Telefone ' + esc(f.phone) + '</small></div></div>' +
    '<p class="sec">Pessoas autorizadas a retirar</p><div class="card">' + f.guardians.map(g => '<div>' + esc(g) + '</div>').join('') + '</div>' +
    '<p class="sec">Notificações</p><div class="card">' + chk('avisos', 'Avisos da equipe', 'Sempre ativo, para a equipe conseguir chamar você durante o culto.', true) + chk('lembretes', 'Lembretes de encontros', 'Um dia antes de cada culto.') + chk('novidades', 'Novidades e conteúdos', 'Novas histórias e conquistas.') + '</div>' +
    '<p class="sec">Consentimento</p><div class="card">' + chk('fotos', 'Fotos e vídeos', 'Autorizo o uso de imagens da criança em materiais da igreja. Você pode mudar quando quiser.') + '</div>' +
    '<p class="hint">Usamos os dados apenas para cuidar da criança, conforme a LGPD. Você pode pedir correção ou exclusão à coordenação infantil.</p>' +
    '<button type="button" class="btn primary wide" data-save>Salvar</button>';
}

function renderParent() {
  const f = fam(state.fam), p = state.p;
  const mine = KIDS.filter(k => k.fam === f.id);
  const ids = mine.map(k => k.id);
  const unread = state.alerts.filter(a => ids.includes(a.kid) && !a.reply).length;
  const unseen = state.alerts.filter(a => ids.includes(a.kid) && !a.seen);
  const fams = FAMS.filter(x => !x.visitor).map(x => '<button type="button" data-fam="' + x.id + '" aria-pressed="' + (x.id === state.fam) + '">' + x.name + '</button>').join('');
  let head, body, tabbar = false;
  if (p.screen === 'done') { head = bandLogo(); body = screenDone(); }
  else if (p.screen === 'detail') { const k = kid(p.card); head = bandBack(esc(k.name), k.age + ' · ' + room(k.room).name); body = screenDetail(k, false); }
  else if (p.screen === 'pack') { head = bandBack('Nova carta!', ''); body = screenPack(); }
  else if (p.screen === 'story') { const c = card(p.card); head = bandBack(esc(c.name), THEMES[c.theme]); body = screenStory(); }
  else if (p.screen === 'perfil') { head = bandBack('Perfil', 'Família ' + esc(f.name)); body = screenPerfil(f); }
  else {
    tabbar = true; head = bandLogo();
    body = p.tab === 'crianca' ? tabCrianca(f, mine) : p.tab === 'agenda' ? tabAgenda() : p.tab === 'conteudos' ? tabConteudos(mine) : p.tab === 'avisos' ? tabAvisos(mine) : tabHome(f, mine);
  }
  const tb = tabbar ? '<nav class="tabbar" aria-label="Menu do app">' +
    [['home', 'Início', IC.home], ['crianca', 'Minha criança', IC.kid], ['agenda', 'Agenda', IC.cal], ['conteudos', 'Conteúdos', IC.cards], ['avisos', 'Avisos', IC.bell]].map(t =>
      '<button type="button" data-tab="' + t[0] + '"' + (p.tab === t[0] ? ' aria-current="page"' : '') + '>' + t[2] + t[1] + (t[0] === 'avisos' && unread ? '<span class="badge" aria-label="' + unread + ' não respondidos">' + unread + '</span>' : '') + '</button>').join('') + '</nav>' : '';
  const push = unseen.length ? '<div class="push" role="alert"><small><span>Verbo Crianças</span><span>agora</span></small><p>' + esc(unseen[unseen.length - 1].text) + '</p><div class="actions"><button type="button" class="btn primary" data-pushopen>Abrir</button><button type="button" class="btn" data-pushclose>Fechar</button></div></div>' : '';
  return '<div class="phonewrap"><div><h1>App dos pais</h1><p class="sub">Para as famílias já cadastradas. Escolha uma família de exemplo; os avisos da equipe chegam como notificação.</p></div>' +
    '<div class="fams" role="group" aria-label="Famílias de exemplo">' + fams + '</div>' +
    '<div class="device">' + head + '<div class="scr">' + push + body + '</div>' + tb + '</div></div>';
}

/* ================= APP DAS TIAS ================= */
function kidRow(k) {
  return '<article class="trow"><div class="row"><div><button type="button" class="link name" data-tkid="' + k.id + '">' + esc(k.name) + '</button><div class="meta">' + k.age + ' · desde ' + k.time + '</div></div>' + statusChip(k) + '</div>' +
    (k.note ? '<div class="note"><b>Atenção:</b> ' + esc(k.note) + '</div>' : '') +
    '<div class="actions"><button type="button" class="btn hl" data-alert="' + k.id + '">Avisar pais</button><button type="button" class="btn" data-out="' + k.id + '">Check-out</button></div></article>';
}

function roomView(rid) {
  const r = room(rid), all = KIDS.filter(k => k.room === rid);
  const inn = all.filter(k => k.status === 'in'), exp = all.filter(k => k.status === 'out'), lf = all.filter(k => k.status === 'left');
  const c = inn.length;
  return '<div><h2>' + r.name + '</h2><p class="sub">' + r.ages + '</p></div>' +
    '<div class="pills2"><span class="chip' + (c >= r.cap ? ' sun' : '') + '">' + c + ' de ' + r.cap + ' vagas' + (c >= r.cap ? ' · lotada' : '') + '</span><span class="chip ' + (state.open ? 'ok' : 'sun') + '">' + (state.open ? 'Check-in aberto' : 'Check-in fechado') + '</span></div>' +
    '<p class="sec">Em sala</p>' + (inn.length ? inn.map(k => kidRow(k)).join('') : '<p class="hint">Ainda não há crianças nesta sala.</p>') +
    (exp.length ? '<p class="sec">Esperados</p>' + exp.map(k => '<article class="trow"><div class="row"><div><strong>' + esc(k.name) + '</strong><div class="meta">' + k.age + '</div></div><button type="button" class="btn primary" data-tin="' + k.id + '"' + (state.open && c < r.cap ? '' : ' disabled') + '>Check-in</button></div></article>').join('') : '') +
    (lf.length ? '<p class="sec">Já saíram</p>' + lf.map(k => '<div class="krow"><div><strong>' + esc(k.name) + '</strong><br><span class="meta">saiu às ' + k.out + '</span></div></div>').join('') : '');
}

function renderTia() {
  const t = tia(), s = state.t;
  const pills = TIAS.map(x => '<button type="button" data-tia="' + x.id + '" aria-pressed="' + (x.id === state.tia) + '">' + esc(x.name) + '</button>').join('');
  let head, body, tabbar = false;
  if (s.screen === 'kid') { const k = kid(s.kid); head = bandBack(esc(k.name), k.age + ' · ' + room(k.room).name); body = screenDetail(k, true); }
  else if (s.screen === 'room') { head = bandBack(room(s.room).name, 'Visão da sala'); body = roomView(s.room); }
  else {
    tabbar = true; head = bandTia(t);
    if (s.tab === 'salas') {
      body = '<div><h2>Todas as salas</h2><p class="sub">Toque em uma sala para ver as crianças.</p></div>' + ROOMS.map(r => { const c = inRoom(r.id); return '<button type="button" class="roomcard" data-troom="' + r.id + '"><div class="row"><strong>' + r.name + '</strong><span class="chip' + (c >= r.cap ? ' sun' : '') + '">' + c + '/' + r.cap + (c >= r.cap ? ' · lotada' : '') + '</span></div><span class="meta">' + r.ages + '</span></button>'; }).join('');
    } else if (s.tab === 'avisos') {
      const all = state.alerts.slice().reverse();
      body = '<div><h2>Avisos enviados</h2><p class="sub">Acompanhe quem já respondeu.</p></div>' + (all.length ? all.map(a => '<article class="trow"><div class="time">' + a.time + ' · ' + esc(a.by || 'Equipe') + '</div><div><strong>' + esc(kid(a.kid).name) + '</strong><div>' + esc(a.text) + '</div></div><span>' + (a.reply ? '<span class="chip ok">Responsável a caminho</span>' : '<span class="chip sun">Sem resposta ainda</span>') + '</span></article>').join('') : '<p class="hint">Ainda não há avisos neste culto.</p>');
    } else body = roomView(t.room);
  }
  const tb = tabbar ? '<nav class="tabbar" style="--n:3" aria-label="Menu do app das tias">' +
    [['sala', 'Minha sala', IC.door], ['salas', 'Todas as salas', IC.grid], ['avisos', 'Avisos', IC.bell]].map(x => '<button type="button" data-ttab="' + x[0] + '"' + (s.tab === x[0] ? ' aria-current="page"' : '') + '>' + x[2] + x[1] + '</button>').join('') + '</nav>' : '';
  return '<div class="phonewrap"><div><h1>App das tias</h1><p class="sub">Para a equipe cuidar da sala. Escolha uma tia de exemplo; cada uma abre na sala definida pela gestão.</p></div>' +
    '<div class="fams" role="group" aria-label="Tias de exemplo">' + pills + '</div>' +
    '<div class="device">' + head + '<div class="scr">' + body + '</div>' + tb + '</div></div>';
}

/* ================= GESTÃO ================= */
function gPainel() {
  const inside = KIDS.filter(k => k.status === 'in').length, entered = KIDS.filter(k => k.status !== 'out').length;
  const left = KIDS.filter(k => k.status === 'left').length, vis = KIDS.filter(k => k.visitor).length;
  const rooms = ROOMS.map(r => {
    const c = inRoom(r.id), tt = TIAS.find(x => x.room === r.id), pct = Math.min(100, Math.round(c / r.cap * 100));
    return '<article class="rc"><div class="row2"><h3>' + r.name + '</h3><span class="chip' + (c >= r.cap ? ' sun' : '') + '">' + c + '/' + r.cap + (c >= r.cap ? ' · lotada' : '') + '</span></div>' +
      '<span class="meta">' + r.ages + ' · ' + (tt ? esc(tt.name) : 'Sem tia definida') + '</span><div class="occ" aria-hidden="true"><i class="' + (c >= r.cap ? 'full' : '') + '" style="width:' + pct + '%"></i></div>' +
      '<label>Capacidade da sala<input type="number" min="1" max="40" value="' + r.cap + '" data-cap="' + r.id + '"></label></article>';
  }).join('');
  return '<section class="stats" aria-label="Contagem"><div class="stat main"><b>' + inside + '</b><span>em sala agora</span></div><div class="stat"><b>' + entered + '</b><span>entraram</span></div><div class="stat"><b>' + left + '</b><span>já saíram</span></div><div class="stat"><b>' + vis + '</b><span>visitantes</span></div></section>' +
    '<section class="panel"><div class="vqrow"><div><h2>Check-in do culto</h2><p class="meta">Culto infantil · domingo, 08/11 · 9h. ' + (state.open ? 'As famílias já podem fazer check-in.' : 'As famílias ainda não conseguem entrar.') + '</p><button type="button" class="btn ' + (state.open ? '' : 'hl') + '" data-toggle>' + (state.open ? 'Check-in aberto · fechar' : 'Check-in fechado · abrir') + '</button></div></div></section>' +
    '<h2>Salas</h2><div class="rcards rooms">' + rooms + '</div>' +
    '<section class="panel"><div class="vqrow">' + qr('VISITA-0811') + '<div><h2>QR Code para visitantes</h2><p class="meta">Imprima e fixe na entrada. O visitante aponta a câmera do celular e faz o check-in sozinho, sem baixar nada.</p><button type="button" class="btn" data-view="visitante">Ver como visitante</button></div></div></section>';
}

function famCards() {
  const q = state.gq.trim().toLowerCase();
  const list = FAMS.filter(f => !q || (f.name + ' ' + f.guardians.join(' ') + ' ' + KIDS.filter(k => k.fam === f.id).map(k => k.name).join(' ')).toLowerCase().includes(q));
  return list.length ? list.map(f => {
    const ks = KIDS.filter(k => k.fam === f.id);
    return '<article class="rc"><div class="row2"><h3>Família ' + esc(f.name) + '</h3>' + (f.visitor ? '<span class="chip sun">Visitante</span>' : '') + '</div><span class="meta">Telefone ' + esc(f.phone) + '</span>' +
      '<div><p class="sec">Autorizados a retirar</p>' + f.guardians.map(g => '<div>' + esc(g) + '</div>').join('') + '</div>' +
      '<div><p class="sec">Crianças</p>' + ks.map(k => '<div>' + esc(k.name) + ' <span class="meta">· ' + k.age + ' · ' + room(k.room).name + '</span></div>').join('') + '</div></article>';
  }).join('') : '<div class="empty">Nenhuma família encontrada.</div>';
}

function gFamilias() {
  const form = state.gform ? '<form class="form inline" id="nf" autocomplete="off"><label>Sobrenome da família<input type="text" id="nf-s"></label><label>Responsável<input type="text" id="nf-g" placeholder="Nome completo"></label><label>Telefone<input type="tel" id="nf-p" placeholder="(00) 90000-0000"></label><label>Nome da criança<input type="text" id="nf-n"></label><label>Idade<select id="nf-a">' + ageOpts(3) + '</select></label><label>Alergias ou cuidados<input type="text" id="nf-o" placeholder="Opcional"></label><button type="submit" class="btn primary">Salvar cadastro</button></form>' : '';
  return '<div class="head" style="margin:0"><div><h2>Famílias</h2><p class="sub">' + FAMS.length + ' famílias cadastradas</p></div><button type="button" class="btn primary" data-gform>' + (state.gform ? 'Fechar formulário' : 'Nova família') + '</button></div>' + form +
    '<label class="form" style="padding:12px"><span style="font-size:14px;font-weight:600;color:var(--muted)">Buscar por família, responsável ou criança</span><input type="text" id="g-q" value="' + esc(state.gq) + '" placeholder="Digite um nome"></label>' +
    '<div class="rcards" id="flist">' + famCards() + '</div>';
}

function gEquipe() {
  const rows = TIAS.map(x => '<article class="rc"><div class="row2"><h3>' + esc(x.name) + '</h3><span class="chip ok">Ativa hoje</span></div><label>Sala de hoje<select data-tiaroom="' + x.id + '">' + ROOMS.map(r => '<option value="' + r.id + '"' + (r.id === x.room ? ' selected' : '') + '>' + r.name + '</option>').join('') + '</select></label></article>').join('');
  const roles = [['App dos pais', 'Famílias cadastradas', 'Ver os próprios filhos, fazer check-in, receber avisos, responder “estou indo” e ver a agenda.'], ['App das tias', 'Equipe de sala', 'Ver as salas, fazer check-in e check-out, ler cuidados da criança e enviar avisos aos pais.'], ['Gestão', 'Coordenação infantil', 'Cadastrar famílias, definir salas e equipe, montar a agenda, abrir o check-in e ver relatórios e registro.']];
  return '<div><h2>Equipe</h2><p class="sub">Defina em que sala cada tia está hoje. O app dela já abre na sala certa.</p></div><div class="rcards">' + rows + '</div>' +
    '<h2>Funções e acessos</h2><div class="rcards">' + roles.map(r => '<article class="rc"><h3>' + r[0] + '</h3><span class="chip" style="justify-self:start">' + r[1] + '</span><span>' + r[2] + '</span></article>').join('') + '</div>';
}

function gAgenda() {
  const form = state.eform ? '<form class="form inline" id="ne" autocomplete="off"><label>Data (dia/mês)<input type="text" id="ne-d" placeholder="29/11"></label><label>Dia da semana<select id="ne-w">' + ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(x => '<option>' + x + '</option>').join('') + '</select></label><label>Horário<input type="text" id="ne-t" placeholder="9h"></label><label>Título<input type="text" id="ne-n" placeholder="Culto infantil"></label><label>Observação<input type="text" id="ne-o" placeholder="Opcional"></label><button type="submit" class="btn primary">Salvar evento</button></form>' : '';
  return '<div class="head" style="margin:0"><div><h2>Agenda</h2><p class="sub">O que você publicar aparece no app dos pais.</p></div><button type="button" class="btn primary" data-eform>' + (state.eform ? 'Fechar formulário' : 'Novo evento') + '</button></div>' + form +
    '<div class="rcards">' + EVENTS.map(e => '<article class="rc ev" style="grid-template-columns:auto 1fr;display:grid;align-items:center;gap:14px"><div class="date"><b>' + esc(e.day) + '</b><small>' + esc(e.mon) + '</small></div><div><strong>' + esc(e.n) + '</strong><span class="meta">' + esc(e.w) + ' · ' + esc(e.t) + '</span><span class="meta">' + esc(e.note) + '</span></div></article>').join('') + '</div>';
}

function gRelatorios() {
  const entered = KIDS.filter(k => k.status !== 'out').length, vis = KIDS.filter(k => k.visitor).length;
  const rows = [{ d: '08/11 (hoje)', c: entered, v: vis, avg: 'em andamento' }].concat(PAST);
  const max = Math.max(50, ...rows.map(r => r.c));
  return '<div><h2>Relatórios</h2><p class="sub">Presença por culto. Os cultos anteriores são dados de exemplo.</p></div>' +
    '<div class="tbl"><table><thead><tr><th>Culto</th><th>Check-ins</th><th></th><th>Visitantes</th><th>Permanência média</th></tr></thead><tbody>' +
    rows.map(r => '<tr><td>' + r.d + '</td><td>' + r.c + '</td><td><div class="bar2" aria-hidden="true"><i style="width:' + Math.round(r.c / max * 100) + '%"></i></div></td><td>' + r.v + '</td><td>' + r.avg + '</td></tr>').join('') + '</tbody></table></div>';
}

function gRegistro() {
  const rows = state.audit.slice().reverse();
  return '<div><h2>Registro de ações</h2><p class="sub">Quem fez o quê, para dar transparência e segurança ao cuidado das crianças.</p></div>' +
    '<section class="panel">' + (rows.length ? '<ul class="log">' + rows.map(a => '<li><span class="time">' + a.t + '</span><b>' + esc(a.who) + '</b><span>' + esc(a.text) + '</span></li>').join('') + '</ul>' : '<p class="hint">Ainda não há ações registradas.</p>') + '</section>';
}

function renderGestao() {
  const secs = [['painel', 'Painel'], ['familias', 'Famílias'], ['equipe', 'Equipe'], ['agenda', 'Agenda'], ['relatorios', 'Relatórios'], ['registro', 'Registro']];
  const nav = '<nav class="anav" aria-label="Seções da gestão">' + secs.map(s => '<button type="button" data-gs="' + s[0] + '"' + (state.g === s[0] ? ' aria-current="page"' : '') + '>' + s[1] + '</button>').join('') + '</nav>';
  const body = ({ painel: gPainel, familias: gFamilias, equipe: gEquipe, agenda: gAgenda, relatorios: gRelatorios, registro: gRegistro })[state.g]();
  return '<div class="head"><div><h1>Gestão</h1><p class="sub">Cadastros, salas, equipe, agenda e relatórios do Verbo Crianças.</p></div></div><div class="adm">' + nav + '<div class="acontent">' + body + '</div></div>';
}

/* ================= VISITANTE ================= */
function renderVisitor() {
  if (state.visit) {
    const k = kid(state.visit), f = fam(k.fam), g = first(f.guardians[0]);
    const als = kidAlerts(k.id).slice().reverse();
    return '<div class="phone"><div><h1>Tudo certo, ' + esc(g) + '!</h1><p class="sub">' + esc(k.name) + ' já está na sala ' + room(k.room).name + '. Sejam bem-vindos!</p></div>' +
      '<section class="pkid"><div><h3>QR Code de retirada</h3><p class="meta">Mostre este código à equipe na saída. Só quem fez o cadastro pode retirar a criança.</p></div>' + qr(k.code) + '</section>' +
      '<p class="meta">Deixe esta página aberta durante o culto. Se a equipe precisar de você, o aviso aparece aqui e, se você permitir notificações no navegador, também chega como notificação. Você não precisou baixar nenhum aplicativo.</p>' +
      '<p class="sec">Avisos da equipe</p>' + (als.length ? als.map(a => alertCard(a, true)).join('') : '<p class="hint">Ainda não há avisos.</p>') +
      '<div class="actions"><button type="button" class="btn primary" data-newvisit>Cadastrar outro visitante</button><button type="button" class="btn" data-view="tias">Ver no app das tias</button></div></div>';
  }
  return '<div class="phone"><div><h1>Que bom ter vocês aqui!</h1><p class="sub">Primeira vez no Verbo Crianças? Preencha em um minuto. Não precisa baixar aplicativo.</p></div>' +
    '<form class="form" id="vf" autocomplete="off">' +
    '<label>Seu nome<input type="text" id="v-g" placeholder="Nome do responsável"></label>' +
    '<label>Telefone<input type="tel" id="v-p" placeholder="(00) 90000-0000"></label>' +
    '<label>Nome da criança<input type="text" id="v-n"></label>' +
    '<label>Idade<select id="v-a">' + ageOpts(3) + '</select></label>' +
    '<label>Alergias ou cuidados<textarea id="v-note" rows="2" placeholder="Opcional"></textarea></label>' +
    '<label class="check"><input type="checkbox" id="v-ok"><span>Autorizo o uso destes dados apenas para o cuidado da criança durante o culto, conforme a LGPD.</span></label>' +
    '<button type="submit" class="btn primary wide">Fazer check-in</button></form></div>';
}

function submitVisitor() {
  const g = $('#v-g').value.trim(), p = $('#v-p').value.trim(), n = $('#v-n').value.trim(), a = +$('#v-a').value, note = $('#v-note').value.trim();
  if (!state.open) { toast('O check-in ainda não abriu. Aguarde a equipe.'); return; }
  if (!g || !p || !n) { toast('Preencha seu nome, o telefone e o nome da criança.'); return; }
  if (!$('#v-ok').checked) { toast('Marque a autorização para continuar.'); return; }
  const rid = roomForAge(a);
  if (inRoom(rid) >= room(rid).cap) { toast(room(rid).name + ' está lotada. Fale com a equipe na entrada.'); return; }
  state.vn += 1;
  const fid = 'v' + state.vn;
  FAMS.push({ id: fid, name: g, visitor: true, phone: p, guardians: [g + ' (responsável)'] });
  const k = { id: 'kv' + state.vn, name: n, age: ageLabel(a), room: rid, fam: fid, note, obs: '', status: 'in', time: now(), out: '', by: g, code: 'VIS-' + (1000 + state.vn * 37), visitor: true, cards: [], packs: 0, packWeek: true };
  KIDS.push(k); state.visit = k.id; log('Visitante', 'Check-in de ' + n + ' (' + room(rid).name + ').'); render();
  toast('Check-in feito. A equipe já viu ' + n.split(' ')[0] + ' na lista.');
}

function renderSheet() {
  const s = state.sheet; if (!s) return '';
  const k = kid(s.kid), f = fam(k.fam);
  if (s.type === 'alert') {
    const q = QUICK.map(x => '<button type="button" data-quick="' + x.key + '" aria-pressed="' + (s.key === x.key) + '">' + x.label + '</button>').join('');
    return '<div class="overlay" data-close><div class="sheet" role="dialog" aria-modal="true" aria-label="Avisar pais" data-sheet>' +
      '<h2>Avisar pais de ' + esc(k.name) + '</h2><p class="meta">Vai por notificação para: ' + (f.visitor ? esc(f.guardians[0].split(' (')[0]) + ' (página do visitante)' : f.guardians.filter(g => !/avó|madrinha/.test(g)).map(g => esc(g.split(' (')[0])).join(' e ')) + '</p>' +
      '<div class="quick">' + q + '</div><textarea id="msg" rows="3" aria-label="Mensagem" placeholder="Escreva a mensagem">' + esc(s.text) + '</textarea>' +
      '<div class="actions"><button type="button" class="btn primary" data-send>Enviar aviso</button><button type="button" class="btn" data-cancel>Cancelar</button></div></div></div>';
  }
  const opts = f.guardians.map((g, i) => '<label><input type="radio" name="who" value="' + i + '"' + (s.who === String(i) ? ' checked' : '') + '>' + esc(g) + '</label>').join('') +
    '<label><input type="radio" name="who" value="x"' + (s.who === 'x' ? ' checked' : '') + '>Outra pessoa, não cadastrada</label>';
  return '<div class="overlay" data-close><div class="sheet" role="dialog" aria-modal="true" aria-label="Check-out" data-sheet>' +
    '<h2>Check-out de ' + esc(k.name) + '</h2><p class="meta">Quem está retirando a criança? Só pessoas autorizadas na ficha da família podem levar.</p>' +
    '<div class="opts">' + opts + '</div>' + (s.blocked ? '<div class="block">Atenção: pessoa não autorizada. Chame o responsável pelo aviso e não libere a criança.</div>' : '') +
    '<div class="actions"><button type="button" class="btn primary" data-confirm>Confirmar saída</button><button type="button" class="btn" data-cancel>Cancelar</button></div></div></div>';
}

function render() {
  const v = state.view;
  $('#app').innerHTML = v === 'tias' ? renderTia() : v === 'gestao' ? renderGestao() : v === 'visitante' ? renderVisitor() : renderParent();
  $('#layer').innerHTML = renderSheet();
  ['pais', 'tias', 'gestao', 'visitante'].forEach(x => $('#tab-' + x).setAttribute('aria-pressed', x === v));
}

function setView(v) {
  state.view = ['tias', 'gestao', 'visitante'].includes(v) ? v : 'pais';
  try { history.replaceState(null, '', '#' + state.view); } catch (e) { location.hash = state.view; }
  render();
}
function markSeen() {
  const ids = KIDS.filter(k => k.fam === state.fam).map(k => k.id);
  state.alerts.forEach(a => { if (ids.includes(a.kid)) a.seen = true; });
}

document.addEventListener('click', e => {
  const t = e.target.closest('button, [data-close]'); if (!t) return;
  const d = t.dataset, p = state.p, ts = state.t;
  if (d.view) return setView(d.view);
  if ('newvisit' in d) { state.visit = null; return render(); }
  if ('toggle' in d) { state.open = !state.open; log('Gestão', state.open ? 'Check-in aberto para o culto.' : 'Check-in fechado.'); render(); toast(state.open ? 'Check-in aberto. As famílias já podem entrar.' : 'Check-in fechado.'); return; }
  if (d.gs) { state.g = d.gs; return render(); }
  if ('gform' in d) { state.gform = !state.gform; return render(); }
  if ('eform' in d) { state.eform = !state.eform; return render(); }
  if (d.fam) { state.fam = d.fam; state.p = newP(); return render(); }
  if (d.tab) { p.tab = d.tab; p.screen = null; if (d.tab === 'avisos') markSeen(); return render(); }
  if ('pushopen' in d) { markSeen(); p.tab = 'avisos'; p.screen = null; return render(); }
  if ('pushclose' in d) { markSeen(); return render(); }
  if ('back' in d) { (state.view === 'tias' ? ts : p).screen = null; return render(); }
  if ('perfil' in d) { p.screen = 'perfil'; return render(); }
  if ('save' in d) { toast('Cadastro atualizado.'); return; }
  if (d.detail) { p.screen = 'detail'; p.card = d.detail; return render(); }
  if (d.ckid) { p.ckid = d.ckid; return render(); }
  if (d.story) { p.card = d.story; p.screen = 'story'; return render(); }
  if (d.openpack) {
    const k = kid(d.openpack); if (!k.packs) return;
    const left = CARDS.filter(c => !k.cards.includes(c.id));
    if (!left.length) { toast('Coleção completa! Parabéns.'); return; }
    const c = left[Math.floor(Math.random() * left.length)];
    k.packs -= 1; k.cards.push(c.id); p.ckid = k.id; p.card = c.id; p.screen = 'pack'; return render();
  }
  if ('docheckin' in d) {
    const f = fam(state.fam), ok = [], full = []; let gained = 0;
    p.sel.forEach(id => {
      const k = kid(id);
      if (inRoom(k.room) >= room(k.room).cap) { full.push(k.name.split(' ')[0]); return; }
      if (doCheckIn(k, f.guardians[0].split(' (')[0])) gained += 1;
      log('Família ' + f.name, 'Check-in de ' + k.name + ' (' + room(k.room).name + ').');
      ok.push(k.id);
    });
    if (full.length) toast('Sala lotada para ' + full.join(', ') + '. Fale com a equipe na entrada.');
    if (ok.length) { p.done = ok; p.gained = gained; p.sel = []; p.screen = 'done'; }
    return render();
  }
  if (d.tia) { state.tia = d.tia; state.t = newT(); return render(); }
  if (d.ttab) { ts.tab = d.ttab; ts.screen = null; return render(); }
  if (d.troom) { ts.screen = 'room'; ts.room = d.troom; return render(); }
  if (d.tkid) { ts.screen = 'kid'; ts.kid = d.tkid; return render(); }
  if (d.tin) {
    const k = kid(d.tin), f = fam(k.fam);
    if (inRoom(k.room) >= room(k.room).cap) { toast(room(k.room).name + ' está lotada. Chame um apoio antes de continuar.'); return; }
    doCheckIn(k, f.guardians[0].split(' (')[0]); log(tia().name, 'Check-in de ' + k.name + ' (' + room(k.room).name + ').'); render();
    toast('Check-in de ' + k.name.split(' ')[0] + ' feito.'); return;
  }
  if (d.alert) { state.sheet = { type: 'alert', kid: d.alert, key: null, text: '' }; return render(); }
  if (d.out) { state.sheet = { type: 'out', kid: d.out, who: null, blocked: false }; return render(); }
  if (d.quick) {
    const q = QUICK.find(x => x.key === d.quick), s = state.sheet;
    s.key = q.key; s.text = q.text(kid(s.kid).name.split(' ')[0]); render();
    const m = $('#msg'); if (m) { m.focus(); m.setSelectionRange(m.value.length, m.value.length); } return;
  }
  if ('cancel' in d) { state.sheet = null; return render(); }
  if ('close' in d) { if (e.target === t) { state.sheet = null; render(); } return; }
  if ('send' in d) {
    const s = state.sheet, text = $('#msg').value.trim();
    if (!text) { toast('Escreva ou escolha uma mensagem antes de enviar.'); return; }
    const k = kid(s.kid);
    state.alerts.push({ id: 'a' + (state.alerts.length + 1), kid: k.id, text, time: now(), reply: false, seen: false, by: tia().name });
    log(tia().name, 'Aviso enviado aos pais de ' + k.name + '.');
    state.sheet = null; render();
    toast('Notificação enviada aos responsáveis de ' + k.name.split(' ')[0]); return;
  }
  if ('confirm' in d) {
    const s = state.sheet, pick = document.querySelector('input[name="who"]:checked');
    if (!pick) { toast('Escolha quem está retirando a criança.'); return; }
    s.who = pick.value;
    if (pick.value === 'x') { s.blocked = true; render(); return; }
    const k = kid(s.kid); k.status = 'left'; k.out = now(); state.sheet = null;
    log(tia().name, 'Check-out de ' + k.name + ' com ' + fam(k.fam).guardians[+pick.value].split(' (')[0] + '.'); render();
    toast(k.name.split(' ')[0] + ' saiu com ' + fam(k.fam).guardians[+pick.value].split(' (')[0]); return;
  }
  if (d.reply) { const a = state.alerts.find(x => x.id === d.reply); a.reply = true; a.seen = true; render(); toast('A equipe foi avisada de que você está indo.'); return; }
});
document.addEventListener('submit', e => {
  const id = e.target.id;
  if (id === 'vf') { e.preventDefault(); return submitVisitor(); }
  if (id === 'nf') {
    e.preventDefault();
    const s = $('#nf-s').value.trim(), g = $('#nf-g').value.trim(), ph = $('#nf-p').value.trim(), n = $('#nf-n').value.trim(), a = +$('#nf-a').value, o = $('#nf-o').value.trim();
    if (!s || !g || !ph || !n) { toast('Preencha família, responsável, telefone e nome da criança.'); return; }
    state.vn += 1; const fid = 'f' + state.vn, rid = roomForAge(a);
    FAMS.push({ id: fid, name: s, phone: ph, guardians: [g + ' (responsável)'] });
    KIDS.push({ id: 'kf' + state.vn, name: n + ' ' + s, age: ageLabel(a), room: rid, fam: fid, note: o, obs: '', status: 'out', time: '', out: '', by: '', code: 'CAD-' + (2000 + state.vn * 41), cards: [], packs: 0, packWeek: false });
    log('Gestão', 'Cadastro da família ' + s + ' (' + n + ', ' + room(rid).name + ').');
    state.gform = false; render(); toast('Cadastro atualizado.'); return;
  }
  if (id === 'ne') {
    e.preventDefault();
    const m = $('#ne-d').value.trim().match(/^(\d{1,2})\/(\d{1,2})$/), n = $('#ne-n').value.trim(), tm = $('#ne-t').value.trim();
    if (!m || +m[2] < 1 || +m[2] > 12 || !n || !tm) { toast('Informe a data como dia/mês (ex.: 29/11), o título e o horário.'); return; }
    EVENTS.push({ day: m[1].padStart(2, '0'), mon: MONTHS[+m[2] - 1], w: $('#ne-w').value, t: tm, n, note: $('#ne-o').value.trim() });
    log('Gestão', 'Evento criado: ' + n + ' em ' + m[1] + '/' + m[2] + '.');
    state.eform = false; render(); toast('Evento publicado na agenda dos pais.');
  }
});
document.addEventListener('change', e => {
  const ds = e.target.dataset || {};
  if (ds.pick) {
    const s = state.p.sel, i = s.indexOf(ds.pick);
    if (e.target.checked && i < 0) { s.push(ds.pick); }
    if (!e.target.checked && i >= 0) { s.splice(i, 1); }
    const b = $('#doci');
    if (b) { b.disabled = !s.length; b.textContent = s.length ? 'Fazer check-in (' + s.length + ')' : 'Fazer check-in'; }
  }
  if (ds.pref) state.prefs[ds.pref] = e.target.checked;
  if (ds.cap) {
    const r = room(ds.cap), v = Math.max(1, Math.min(40, parseInt(e.target.value, 10) || r.cap));
    r.cap = v; log('Gestão', 'Capacidade do ' + r.name + ' ajustada para ' + v + '.'); render(); toast('Capacidade atualizada.');
  }
  if (ds.tiaroom) {
    const x = TIAS.find(y => y.id === ds.tiaroom); x.room = e.target.value;
    log('Gestão', x.name + ' definida para a sala ' + room(x.room).name + '.'); render(); toast('Equipe atualizada.');
  }
});
document.addEventListener('input', e => {
  if (e.target.id === 'g-q') { state.gq = e.target.value; $('#flist').innerHTML = famCards(); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.sheet) { state.sheet = null; render(); } });
window.addEventListener('hashchange', () => { const v = location.hash.replace('#', ''); if (['pais', 'tias', 'gestao', 'visitante'].includes(v)) { state.view = v; render(); } });

$('#logo-h').innerHTML = logoH();
state.alerts.push({ id: 'a1', kid: 'k1', text: 'Davi está chorando e não se acalma. Pode vir até a sala?', time: '09:41', reply: false, seen: false, by: 'Tia Joana' });
state.audit.push({ t: '08:30', who: 'Gestão', text: 'Check-in aberto para o culto.' }, { t: '09:41', who: 'Tia Joana', text: 'Aviso enviado aos pais de Davi Souza.' });
{ const h = location.hash.replace('#', ''); state.view = ['tias', 'gestao', 'visitante'].includes(h) ? h : 'pais'; }
render();
