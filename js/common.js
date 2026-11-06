/* Código compartido por todas las páginas: menú, carrito, WhatsApp */
const $ = id => document.getElementById(id);
const wa = text => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const getPin = id => PINS.find(p => p.id == id);

/* Carrito guardado en el navegador (se mantiene entre páginas) */
const KEY = "jyl_cart";
let cart = {};
try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} };

/* Precios y estados (agotado / muy pronto) */
const money = n => Number.isInteger(n) ? n : n.toFixed(2);
const defaultOpt = p => [...p.opts].reverse().find(o => !STATUS[o]) || p.opts[p.opts.length - 1];
/* Saca del carrito lo que ahora esté agotado o "muy pronto" */
Object.keys(cart).forEach(k => { if (STATUS[k.split("|")[1]]) delete cart[k]; });
save();

/* Íconos de redes (SVG) */
const ICON = {
  wa: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.3 1.263.489 1.694.626.712.226 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  tt: `<svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>`,
  fb: `<svg viewBox="0 0 320 512" fill="currentColor" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>`
};

/* Menú, pie de página, botón flotante y carrito */
document.body.insertAdjacentHTML("afterbegin", `
<header class="top">
  <a href="index.html" class="logo">J &amp; L</a>
  <nav>
    <a href="index.html#categorias">Catálogo</a>
    <a href="index.html#presentacion">Tamaño y presentación</a>
    <a href="index.html#personalizado">Personalizados</a>
  </nav>
  <button class="cart-btn" id="openCart">🛒 Mi carrito <span id="count">0</span></button>
</header>`);

document.body.insertAdjacentHTML("beforeend", `
<footer>
  <div class="logo big">J &amp; L</div>
  <div class="social">
    <a href="#" class="soc wa" data-wa="ask">${ICON.wa}<span>WhatsApp</span></a>
    <a href="${SOCIAL.tiktok}" class="soc tt" target="_blank" rel="noopener">${ICON.tt}<span>TikTok</span></a>
    <a href="${SOCIAL.facebook}" class="soc fb" target="_blank" rel="noopener">${ICON.fb}<span>Facebook</span></a>
  </div>
</footer>
<a href="#" class="wa-float" data-wa="ask" aria-label="WhatsApp">${ICON.wa}<span>Preguntar</span></a>
<div class="overlay" id="overlay"></div>
<aside class="cart" id="cart">
  <button class="close" id="closeCart" aria-label="Cerrar">×</button>
  <h2>TU CARRITO</h2>
  <div class="items" id="items"></div>
  <div class="total" id="total"></div>
  <button class="wa-send" id="send">💬 Consultar estos pines</button>
</aside>`);

/* Carrito */
function addToCart(id, opt, q) {
  if (STATUS[opt]) return;
  const k = `${id}|${opt}`;
  cart[k] = (cart[k] || 0) + q;
  save(); renderCart();
}

function renderCart() {
  let n = 0, total = 0, html = "";
  Object.keys(cart).forEach(k => {
    const [id, opt] = k.split("|"), p = getPin(id);
    if (!p) return;
    const q = cart[k], sub = q * PRICES[opt];
    n += q; total += sub;
    const thumb = p.img ? `<img src="${p.img}" alt="">` : `<span>${p.emoji}</span>`;
    html += `<div class="row">${thumb}<div class="n">${p.name}<small>${LABELS[opt]} · Bs ${money(PRICES[opt])} c/u = Bs ${money(sub)}</small></div>
      <button data-minus="${k}">−</button>${q}<button data-plus="${k}">+</button></div>`;
  });
  $("items").innerHTML = html || `<p style="color:var(--mut)">Tu carrito está vacío.</p>`;
  $("count").textContent = n;
  $("total").textContent = n ? `Total aprox: Bs ${money(total)}` : "";
  $("send").disabled = !n;
}

const toggleCart = open => {
  $("cart").classList.toggle("open", open);
  $("overlay").classList.toggle("show", open);
};

$("items").onclick = e => {
  const { plus, minus } = e.target.dataset;
  if (plus) cart[plus]++;
  if (minus) { cart[minus]--; if (!cart[minus]) delete cart[minus]; }
  save(); renderCart();
};
$("openCart").onclick = () => toggleCart(true);
$("closeCart").onclick = $("overlay").onclick = () => toggleCart(false);
document.addEventListener("keydown", e => { if (e.key === "Escape") toggleCart(false); });

$("send").onclick = () => {
  let total = 0;
  const lines = Object.keys(cart).filter(k => getPin(k.split("|")[0])).map(k => {
    const [id, opt] = k.split("|"), q = cart[k], sub = q * PRICES[opt];
    total += sub;
    return `• ${q} x ${getPin(id).name} (${LABELS[opt]}) a Bs ${money(PRICES[opt])} c/u = Bs ${money(sub)}`;
  });
  window.open(wa(`Hola J & L, me interesan estos pines y quiero consultar disponibilidad:\n${lines.join("\n")}\nTotal aprox: Bs ${money(total)}`), "_blank");
};

/* Botones de WhatsApp (data-wa) y precios (data-price) */
const MSG = {
  ask: "Hola J & L, tengo una consulta sobre los pines.",
  custom: "Hola J & L, quiero un pin personalizado. Mi idea es: ",
  corazon: "Hola J & L, me interesa el pin en forma de corazón.",
  abrelatas: "Hola J & L, me interesa el pin llavero con abrelatas.",
  espejo: "Hola J & L, me interesa el pin llavero con espejo."
};
document.querySelectorAll("[data-wa]").forEach(a => {
  const st = STATUS[a.dataset.wa];
  if (st) {                                   /* modelo "muy pronto": botón apagado */
    a.textContent = STATUS_LABEL[st];
    a.classList.add("disabled");
    a.removeAttribute("href");
    a.setAttribute("aria-disabled", "true");
    return;
  }
  a.href = wa(MSG[a.dataset.wa]);
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-price]").forEach(el => {
  const k = el.dataset.price, st = STATUS[k];
  if (st) {
    el.innerHTML = `<span class="badge ${st}">${STATUS_LABEL[st]}</span>`;
    const box = el.closest(".size, .model");
    if (box) box.classList.add("off");
  } else {
    el.textContent = `Bs ${money(PRICES[k])} c/u`;
  }
});

/* Estilos de "agotado" y "muy pronto" (van aquí para no tocar el CSS) */
document.head.insertAdjacentHTML("beforeend", `<style>
.badge{display:inline-block;font:400 .8rem Bungee,sans-serif;padding:4px 12px;border-radius:999px;color:#fff}
.badge.agotado{background:#ff2d55}
.badge.pronto{background:#8a5cff}
.price small{font:500 .7rem Rubik,sans-serif;color:var(--mut)}
.opts button small{display:block;font-size:.6rem;color:#ff6b88}
.opts button.off{opacity:.55;cursor:not-allowed}
.size.off .frame,.model.off .shot{filter:grayscale(.85);opacity:.55}
.btn.disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.add:disabled{opacity:.5;cursor:not-allowed;border-color:var(--line)}
.add:disabled:hover{background:transparent}
</style>`);

renderCart();