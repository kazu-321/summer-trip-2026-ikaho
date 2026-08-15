const MAPS = {
  hara: 'https://www.google.com/maps/search/?api=1&query=%E5%8E%9F%E7%BE%8E%E8%A1%93%E9%A4%A8ARC',
  osawaya: 'https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%BE%A4%E5%B1%8B+%E7%AC%AC%E4%BA%8C%E5%BA%97%E8%88%97',
  mimatsu: 'https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E6%9D%BE%E9%A4%A8+%E4%BC%8A%E9%A6%99%E4%BF%9D',
  ishidan: 'https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E9%A6%99%E4%BF%9D%E6%B8%A9%E6%B3%89+%E7%9F%B3%E6%AE%B5%E8%A1%97',
  skyland: 'https://www.google.com/maps/search/?api=1&query=%E6%B8%8B%E5%B7%9D%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%E3%83%91%E3%83%BC%E3%82%AF',
  konnyaku: 'https://www.google.com/maps/search/?api=1&query=%E3%81%93%E3%82%93%E3%81%AB%E3%82%83%E3%81%8F%E3%83%91%E3%83%BC%E3%82%AF',
  home: 'https://www.google.com/maps/search/?api=1&query=%E3%82%BB%E3%83%96%E3%83%B3%E3%82%A4%E3%83%AC%E3%83%96%E3%83%B3+%E3%81%A4%E3%81%8F%E3%81%B0%E5%A4%A7%E7%A0%82%E5%BA%97'
};

const events = [
  {
    day:1,time:'〜13:30',start:'2026-08-15T12:00:00+09:00',end:'2026-08-15T13:30:00+09:00',
    title:'原美術館ARC',text:'伊香保グリーン牧場内。見学後は水沢へ移動。',note:'見終わったら水沢うどんへ。',
    tag:'現在',map:MAPS.hara,action:'地図'
  },
  {
    day:1,time:'13:40頃',start:'2026-08-15T13:40:00+09:00',end:'2026-08-15T14:50:00+09:00',
    title:'大澤屋 第二店舗',text:'水沢うどん。待ち時間込みで14:50頃までを目安。',note:'水沢うどん。混雑したら石段街を少し短縮。',
    tag:'昼食',map:MAPS.osawaya,action:'ナビを開く',primary:true
  },
  {
    day:1,time:'15:00頃',start:'2026-08-15T15:00:00+09:00',end:'2026-08-15T15:15:00+09:00',
    title:'美松館へ車を預ける',text:'車と荷物を置いてから石段街へ。チェックイン可能なら先に済ませる。',note:'車と荷物を置いて、徒歩で石段街へ。',
    map:MAPS.mimatsu,action:'美松館へ',primary:true
  },
  {
    day:1,time:'15:15〜',start:'2026-08-15T15:15:00+09:00',end:'2026-08-15T16:30:00+09:00',
    title:'伊香保 石段街',text:'射的・温泉まんじゅう・お土産。雨が強ければ短縮。',note:'射的・温泉まんじゅう・お土産。',
    tag:'散策',map:MAPS.ishidan,action:'地図'
  },
  {
    day:1,time:'夕方〜',start:'2026-08-15T16:30:00+09:00',end:'2026-08-16T08:15:00+09:00',
    title:'美松館',text:'温泉 → 夕食 → 宿泊。翌朝は朝食後、8:15出発目標。',note:'温泉・夕食・宿泊。明日は8:15出発。',
    tag:'宿泊',map:MAPS.mimatsu
  },
  {
    day:2,time:'8:15',start:'2026-08-16T08:15:00+09:00',end:'2026-08-16T08:40:00+09:00',
    title:'美松館 出発',text:'朝食・荷造り・チェックアウトを済ませて出発。',note:'朝食・チェックアウト後、遊園地へ。',map:MAPS.skyland
  },
  {
    day:2,time:'8:40頃',start:'2026-08-16T08:40:00+09:00',end:'2026-08-16T09:00:00+09:00',
    title:'渋川スカイランドパーク',text:'開園前に駐車して9:00スタート。',note:'開園前に駐車。9:00から遊ぶ。',
    tag:'到着',map:MAPS.skyland,action:'ナビを開く',primary:true
  },
  {
    day:2,time:'9:00<br>〜11:30',start:'2026-08-16T09:00:00+09:00',end:'2026-08-16T11:30:00+09:00',
    title:'スカイランドパーク',text:'乗りたいアトラクションを優先。11:30を撤収目標。',note:'乗りたいもの優先。11:30撤収目標。',
    tag:'メイン',map:MAPS.skyland
  },
  {
    day:2,time:'11:30<br>〜12:10',start:'2026-08-16T11:30:00+09:00',end:'2026-08-16T12:10:00+09:00',
    title:'昼食',text:'遊園地内で普通の昼食。こんにゃくバイキングは試食として楽しむ。',note:'遊園地内で普通の昼食。',tag:'園内'
  },
  {
    day:2,time:'12:10',start:'2026-08-16T12:10:00+09:00',end:'2026-08-16T13:35:00+09:00',
    title:'こんにゃくパークへ移動',text:'13:20〜13:40着目標。14:20集合に間に合うことを最優先。',note:'13:20〜13:40着目標。14:20必着。',
    tag:'時間厳守',orange:true,map:MAPS.konnyaku,action:'ナビを開く',warn:true
  },
  {
    day:2,time:'13:35頃',start:'2026-08-16T13:35:00+09:00',end:'2026-08-16T14:20:00+09:00',
    title:'受付・試食バイキング',text:'本館1F団体カウンターで支払い → ファストパス受取 → 試食。',note:'受付・支払い・ファストパス受取。',map:MAPS.konnyaku
  },
  {
    day:2,time:'14:20<br>集合',start:'2026-08-16T14:20:00+09:00',end:'2026-08-16T15:30:00+09:00',
    title:'Cコース 手作りこんにゃく体験',text:'<strong class="danger">14:20集合 / 14:30開始</strong>。約60分。遅刻すると参加不可。',note:'14:20集合・14:30開始。約60分。',
    tag:'予約済み',orange:true,reserve:true,map:MAPS.konnyaku
  },
  {
    day:2,time:'15:45<br>目標',start:'2026-08-16T15:45:00+09:00',end:'2026-08-16T18:45:00+09:00',
    title:'帰宅',text:'富岡ICから北関東道経由。18:15〜18:45着を本命にする。',note:'北関東道経由。18:15〜18:45着目標。',
    tag:'19時まで',map:MAPS.home
  }
];

const route = ['富岡IC','E18','藤岡JCT','高崎JCT','E50 北関東道','岩舟JCT','E4','久喜白岡JCT','C4 圏央道','つくば'];

function eventHTML(e){
  const tag = e.tag ? `<span class="tag${e.orange?' orange':''}">${e.tag}</span>` : '';
  const action = e.action && e.map
    ? `<div class="event-actions"><a class="action${e.primary?' primary':''}${e.warn?' warn':''}" href="${e.map}" target="_blank" rel="noopener">${e.action}</a></div>`
    : '';
  return `<article class="event" data-start="${e.start}" data-end="${e.end}">
    <div class="dot"></div>
    <div class="time">${e.time}</div>
    <div class="event-card${e.reserve?' reserve':''}">
      <div class="title-row"><div class="event-title">${e.title}</div>${tag}</div>
      <div class="event-text">${e.text}</div>
      ${action}
    </div>
  </article>`;
}

document.getElementById('day1Timeline').innerHTML = events.filter(e=>e.day===1).map(eventHTML).join('');
document.getElementById('day2Timeline').innerHTML = events.filter(e=>e.day===2).map(eventHTML).join('');
document.getElementById('returnRoute').innerHTML = route.map((x,i)=>`${i?'<span class="route-arrow">→</span>':''}<span class="route-chip">${x}</span>`).join('');

function formatHM(d){
  return new Intl.DateTimeFormat('ja-JP',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Tokyo'}).format(d);
}

function updateNow(){
  const now = new Date();
  const normalized = events.map((e,i)=>({...e,i,startDate:new Date(e.start),endDate:new Date(e.end)}));
  document.querySelectorAll('.event-card').forEach(x=>x.classList.remove('current'));

  let target = normalized.find(e=>now>=e.startDate && now<e.endDate);
  let badge = '現在';
  if(!target){ target = normalized.find(e=>now<e.startDate); badge='次の予定'; }

  const action = document.getElementById('nowAction');
  if(!target){
    document.getElementById('nowBadge').textContent='旅行終了';
    document.getElementById('nowTime').textContent='';
    document.getElementById('nowTitle').textContent='おつかれさまでした';
    document.getElementById('nowNote').textContent='';
    action.style.display='none';
    return;
  }

  const cards = document.querySelectorAll('.event-card');
  cards[target.i]?.classList.add('current');
  document.getElementById('nowBadge').textContent=badge;
  document.getElementById('nowTime').textContent=(badge==='現在'?formatHM(target.startDate)+'〜':formatHM(target.startDate)+'頃');
  document.getElementById('nowTitle').textContent=target.title;
  document.getElementById('nowNote').textContent=target.note || '';
  if(target.map){ action.href=target.map; action.style.display='inline-flex'; } else { action.style.display='none'; }

  const jpDate = new Intl.DateTimeFormat('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Tokyo'}).format(now);
  document.getElementById('updatedText').textContent='現在 '+jpDate;
}

updateNow();
setInterval(updateNow,60000);