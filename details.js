const DETAILS_OFFICIAL = {
  greenbokujo:'https://www.greenbokujo.jp/',
  hara:'https://www.haramuseum.or.jp/',
  osawaya:'https://www.osawaya.co.jp/',
  osawayaMenu:'https://www.osawaya.co.jp/menu2.html',
  mimatsu:'https://www.mimatsukan.com/',
  skyland:'https://www.skyland89.jp/',
  skylandFood:'https://www.skyland89.jp/food/',
  skylandAttr:'https://www.skyland89.jp/attraction/',
  konnyaku:'https://www.konnyaku-park.com/',
  buffet:'https://www.konnyaku-park.com/free-buffet/',
  kitchen:'https://www.konnyaku-park.com/kitchen/'
};

const DETAILS_PHONE = [
  ['伊香保グリーン牧場','0279-24-5335','0279245335'],
  ['原美術館ARC','0279-24-6585','0279246585'],
  ['大澤屋 第二店舗','0279-72-5566','0279725566'],
  ['美松館','0279-72-2655','0279722655'],
  ['渋川スカイランドパーク','0279-20-1589','0279201589'],
  ['こんにゃくパーク','0274-60-4100','0274604100']
];

const DETAILS_FOODS = [
  {
    overline:'TODAY · 水沢うどん', title:'大澤屋 第二店舗',
    image:'https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/18/62/86/650x450_18628609.jpg?updated_at=1652252335',
    desc:'大澤屋はざるうどんを推奨。舞茸天ぷらと、数量限定のごまつゆも定番。',
    menu:['ざるうどん','舞茸天ぷら','ごまつゆ（数量限定）'],
    links:[[DETAILS_OFFICIAL.osawayaMenu,'公式メニュー'],[DETAILS_OFFICIAL.osawaya,'公式サイト']],
    notice:'公式メニュー画像の価格表記は古い場合があるため、価格は店頭確認。'
  },
  {
    overline:'TOMORROW · 11:30頃', title:'スカイランドパーク 園内昼食',
    image:'https://cdn-news.asoview.com/production/note/96a4a680-cf1b-400b-9e20-5c2579f940b0.jpeg',
    desc:'昼食はここでしっかり食べる。お盆期間はメニュー変更の可能性あり。',
    menu:['チャーシューメン 950円','天ぷらうどん/そば 700円','カツカレー 950円','ビーフカレー 750円','おこさまカレー 700円','ポテト 450円'],
    links:[[DETAILS_OFFICIAL.skylandFood,'公式メニュー']],
    notice:'お盆など特別期間は内容変更あり。'
  },
  {
    overline:'TOMORROW · 13:35頃', title:'こんにゃく試食バイキング',
    image:'https://image.asoview-media.com/image/production/note/article/a833daa8-94f1-4fea-a061-adf8e1975b71.jpg',
    desc:'約15種類。体験参加者はファストパス対象。昼食ではなく「試食」として楽しむ。',
    menu:['田楽','アヒージョ','こんにゃくラーメン','こんにゃくスイーツ'],
    links:[[DETAILS_OFFICIAL.buffet,'バイキング公式'],[DETAILS_OFFICIAL.kitchen,'体験公式']]
  }
];

const DETAILS_ATTRACTIONS = [
  {title:'ネイブルコースター',image:'https://www.skyland89.jp/uploads/2019/05/MG_5625%E2%98%85s-1030x687.jpg',meta:'身長110cm以上・3歳以上',price:'400円',url:'https://www.skyland89.jp/attraction/99/'},
  {title:'ゴーカート',image:'https://www.skyland89.jp/uploads/2019/05/SX9A9256_-544x406.jpg',meta:'1人：135cm以上 / 2人：3歳以上',price:'400円 / 2人600円',url:'https://www.skyland89.jp/attraction/125/'},
  {title:'観覧車はなまる',image:'https://bochi-kanransha.net/wp-content/uploads/2017/07/00003035.jpg',meta:'小学生未満は保護者同乗',price:'400円',url:'https://www.skyland89.jp/attraction/44/'},
  {title:'ロッキング・タグ',image:'https://www.skyland89.jp/uploads/2019/05/SX9A8249%E2%98%85s.jpg',meta:'身長90cm以上 / 110cm未満は保護者同乗',price:'400円',url:'https://www.skyland89.jp/attraction/105/'}
];
const DETAILS_MORE_RIDES = ['アストロファイター 300円','くるくるどんぐり 300円','メリーゴーランド 300円','サイクルモノレール 200円','スカイスライダー 300円','巨大迷路 無料','アスレチック 無料'];
const DETAILS_OFFICIAL_LINKS = [
  ['グリーン牧場',DETAILS_OFFICIAL.greenbokujo],['原美術館ARC',DETAILS_OFFICIAL.hara],
  ['大澤屋',DETAILS_OFFICIAL.osawaya],['美松館',DETAILS_OFFICIAL.mimatsu],
  ['スカイランドパーク',DETAILS_OFFICIAL.skyland],['こんにゃくパーク',DETAILS_OFFICIAL.konnyaku]
];

function detailsFoodHTML(f){
  return `<article class="media-card"><div class="media-thumb"><img src="${f.image}" alt="${f.title}のイメージ" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.parentElement.classList.add('img-fallback')"></div><div class="media-body"><div class="media-overline">${f.overline}</div><div class="media-title">${f.title}</div><div class="media-desc">${f.desc}</div><div class="menu-list">${f.menu.map(x=>`<span class="menu-chip">${x}</span>`).join('')}</div>${f.notice?`<div class="notice-line">※ ${f.notice}</div>`:''}<div class="card-links">${f.links.map(x=>`<a href="${x[0]}" target="_blank" rel="noopener">${x[1]} ↗</a>`).join('')}</div></div></article>`;
}
function detailsRideHTML(r){
  return `<article class="ride-card"><div class="ride-photo"><img src="${r.image}" alt="${r.title}のイメージ" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.parentElement.classList.add('img-fallback')"></div><div class="ride-body"><div class="ride-title">${r.title}</div><div class="ride-meta">${r.meta}</div><div class="ride-price">${r.price}</div><a class="ride-link" href="${r.url}" target="_blank" rel="noopener">公式詳細 ↗</a></div></article>`;
}

const foodCards = document.getElementById('foodCards');
if(foodCards) foodCards.innerHTML = DETAILS_FOODS.map(detailsFoodHTML).join('');
const attractionCards = document.getElementById('attractionCards');
if(attractionCards) attractionCards.innerHTML = DETAILS_ATTRACTIONS.map(detailsRideHTML).join('');
const moreRides = document.getElementById('moreRides');
if(moreRides) moreRides.innerHTML = DETAILS_MORE_RIDES.map(x=>`<span>${x}</span>`).join('');
const officialLinks = document.getElementById('officialLinks');
if(officialLinks) officialLinks.innerHTML = DETAILS_OFFICIAL_LINKS.map(x=>`<a class="official-link" href="${x[1]}" target="_blank" rel="noopener"><strong>${x[0]}</strong><span>↗</span></a>`).join('');
const phoneGrid = document.getElementById('phoneGrid');
if(phoneGrid) phoneGrid.innerHTML = DETAILS_PHONE.map(p=>`<div class="phone-item"><div class="phone-name">${p[0]}</div><div class="phone-number"><a href="tel:${p[2]}">${p[1]}</a></div></div>`).join('');

const detailActions = [
  ['原美術館ARC',[[DETAILS_OFFICIAL.hara,'公式 ↗']]],
  ['大澤屋 第二店舗',[[DETAILS_OFFICIAL.osawaya,'公式 ↗'],[DETAILS_OFFICIAL.osawayaMenu,'メニュー ↗']]],
  ['美松館へ車を預ける',[[DETAILS_OFFICIAL.mimatsu,'公式 ↗']]],
  ['美松館',[[DETAILS_OFFICIAL.mimatsu,'公式 ↗']]],
  ['渋川スカイランドパーク',[[DETAILS_OFFICIAL.skyland,'公式 ↗']]],
  ['スカイランドパーク',[[DETAILS_OFFICIAL.skylandAttr,'乗り物 ↗']]],
  ['昼食',[[DETAILS_OFFICIAL.skylandFood,'メニュー ↗']]],
  ['こんにゃくパークへ移動',[[DETAILS_OFFICIAL.konnyaku,'公式 ↗']]],
  ['受付・試食バイキング',[[DETAILS_OFFICIAL.buffet,'バイキング ↗']]],
  ['Cコース 手作りこんにゃく体験',[[DETAILS_OFFICIAL.kitchen,'体験公式 ↗']]]
];

detailActions.forEach(([title,links])=>{
  const card=[...document.querySelectorAll('.event-card')].find(c=>c.querySelector('.event-title')?.textContent.trim()===title);
  if(!card) return;
  let actions=card.querySelector('.event-actions');
  if(!actions){actions=document.createElement('div');actions.className='event-actions';card.appendChild(actions)}
  links.forEach(([url,label])=>{
    if([...actions.querySelectorAll('a')].some(a=>a.href===url)) return;
    const a=document.createElement('a');a.className='action small';a.href=url;a.target='_blank';a.rel='noopener';a.textContent=label;actions.appendChild(a);
  });
});

const navLinks=[...document.querySelectorAll('.bottom-nav a')];
const navTargets=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+visible.target.id));
  },{rootMargin:'-20% 0px -65% 0px',threshold:[0,.1,.3]});
  navTargets.forEach(t=>obs.observe(t));
}
