/* Página de categoría: lee data-cat del <body> (bts, memes, anime, bandas) */
const key = document.body.dataset.cat;
const C = CATS[key];
let sub = "Todos";
const sel = {}, qty = {};
document.title = `${C.name} | J & L`;

/* Imagen de presentación (cambia según la subcategoría elegida) */
function renderBanner() {
  const s = C.subs.find(x => x.n === sub);
  const d = s || C, covers = d.cover || [];
  const pins = covers.length
    ? covers.slice(0, 3).map(src => `<div class="frame"><img src="${src}" alt=""></div>`).join("")
    : `<div class="frame"><div class="ph">${d.icon || C.icon}</div></div>`;
  $("head").innerHTML = `<div class="banner">
    <div class="banner-text">
      <p class="crumb"><a href="index.html">Inicio</a> › ${s ? `<a href="${key}.html">${C.name}</a> › ${s.n}` : C.name}</p>
      <h2>${s ? s.n : C.name}</h2>
      <p class="sub">${d.desc || C.desc}</p>
    </div>
    <div class="banner-pins">${pins}</div>
  </div>`;
}

function renderTabs() {
  $("tabs").innerHTML = ["Todos", ...C.subs.map(s => s.n)].map(s => `<button class="${s === sub ? "on" : ""}" data-sub="${s}">${s}</button>`).join("");
}

function renderGrid() {
  const list = PINS.filter(p => p.cat === key && (sub === "Todos" || p.sub === sub));
  $("grid").innerHTML = list.map(p => {
    const o = sel[p.id] || defaultOpt(p);
    const st = STATUS[o];
    const q = qty[p.id] || 1;
    const visual = p.img
      ? `<div class="frame"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`
      : `<div class="frame"><div class="ph">${p.emoji}</div></div>`;
    const opts = p.opts.length > 1
      ? `<div class="opts">${p.opts.map(x => `<button class="${x === o ? "on" : ""}${STATUS[x] ? " off" : ""}" data-opt="${x}" data-id="${p.id}"${STATUS[x] ? " disabled" : ""}>${LABELS[x]}${STATUS[x] ? `<small>${STATUS_LABEL[STATUS[x]]}</small>` : ""}</button>`).join("")}</div>`
      : `<div class="opts"><span class="one">${LABELS[o]}</span></div>`;
    return `<article class="card">
      ${visual}
      <span class="tag">${p.sub}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      ${opts}
      <div class="price">${st ? `<span class="badge ${st}">${STATUS_LABEL[st]}</span>` : `Bs ${money(PRICES[o])} <small>c/u</small>`}</div>
      <div class="qty"><button data-dec="${p.id}" aria-label="Menos">−</button><b>${q}</b><button data-inc="${p.id}" aria-label="Más">+</button></div>
      <button class="add" data-add="${p.id}"${st ? " disabled" : ""}>${st ? STATUS_LABEL[st] : "🛒 Agregar al carrito"}</button>
    </article>`;
  }).join("") || `<div class="empty"><p>Pronto habrá pines en <b>${sub}</b>.</p><a class="btn ghost" target="_blank" rel="noopener" href="${wa("Hola J & L, me interesan pines de " + C.name + " - " + sub + ". ")}">Pedir uno por WhatsApp</a></div>`;
}

$("tabs").onclick = e => {
  if (e.target.dataset.sub) { sub = e.target.dataset.sub; renderBanner(); renderTabs(); renderGrid(); }
};

$("grid").onclick = e => {
  const d = e.target.dataset;
  if (d.opt && !STATUS[d.opt]) { sel[d.id] = d.opt; renderGrid(); }
  if (d.inc || d.dec) {
    const id = d.inc || d.dec;
    qty[id] = Math.min(99, Math.max(1, (qty[id] || 1) + (d.inc ? 1 : -1)));
    e.target.parentElement.querySelector("b").textContent = qty[id];
  }
  if (d.add) {
    const p = getPin(d.add), o = sel[p.id] || defaultOpt(p);
    if (STATUS[o]) return;
    addToCart(p.id, o, qty[p.id] || 1);
    e.target.textContent = "✓ Agregado";
    setTimeout(() => (e.target.textContent = "🛒 Agregar al carrito"), 900);
  }
};

renderBanner();
renderTabs();
renderGrid();