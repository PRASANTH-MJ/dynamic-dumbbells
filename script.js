/* =========================================================
   Dynamic Dumbbells Gym — site settings
   Edit these values once; every page picks them up.
   ========================================================= */
const GYM = {
  name: "Dynamic Dumbbells Gym",
  phone: "+91 99944 78984",
  whatsapp: "919994478984",          // country code + number, digits only
  email: "",                         // optional — shown in footer when filled
  address: "86/1B, Natha Thottam, Kovai Hills, Arumuga Goundanur, Perur Chettipalayam, Coimbatore, Tamil Nadu 641010",
  menAddress: "86/1B, Natha Thottam, Kovai Hills, Perur Chettipalayam, Coimbatore 641010",
  womenAddress: "Dynamic Diva — 86/1B, Natha Thottam, Kovai Hills, Perur Chettipalayam, Coimbatore 641010",
  hours: "Mon–Sat · 5:00 AM – 12:00 PM & 4:30 PM – 9:00 PM",
  rating: "4.9",
  instagram: "",                     // optional — paste Instagram URL to show in footer
  // Optional: paste a Google Apps Script / Formspree URL to also save every
  // enquiry to a sheet or inbox. Leave empty to use WhatsApp only.
  formEndpoint: "",
};

const LOGO = `<img class="logo-mark" src="images/logo.png" alt="" width="46" height="46">`;
const ICON_WA = `<svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3 29l7.3-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.1c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.3 1.1 1.2-4.2-.3-.4c-1-1.6-1.5-3.5-1.5-5.4C5.4 9.8 10.2 5 16 5s10.6 4.8 10.6 10.6S21.8 26.1 16 26.1zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>`;

/* ---------- Shared header ---------- */
function renderHeader() {
  const page = document.body.dataset.page;
  const links = [
    ["index.html", "Home", "home"],
    ["mens-gym.html", "Men's Gym", "men"],
    ["womens-gym.html", "Dynamic Diva", "women"],
    ["personal-training.html", "Personal Training", "pt"],
    ["contact.html", "Join Now", "contact"],
  ];
  const nav = links.map(([href, label, key]) => {
    const cls = [key === "contact" ? "btn" : "", key === page ? "active" : ""].join(" ").trim();
    return `<li><a href="${href}" class="${cls}"${key === page ? ' aria-current="page"' : ""}>${label}</a></li>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="logo" aria-label="${GYM.name} home">
          ${LOGO}
          <span>DYNAMIC <b>DUMBBELLS</b></span>
        </a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <ul class="nav-links">${nav}</ul>
      </div>
    </header>`;

  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

/* ---------- Shared footer ---------- */
function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo">${LOGO}<span>DYNAMIC <b>DUMBBELLS</b></span></a>
            <p>Coimbatore's ${GYM.rating}★ rated gym — strength, CrossFit, bodybuilding and personal training, with Dynamic Diva, our dedicated women's studio.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="mens-gym.html">Men's Gym</a></li>
              <li><a href="womens-gym.html">Women's Gym</a></li>
              <li><a href="personal-training.html">Personal Training</a></li>
              <li><a href="contact.html">Contact &amp; Join</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>${GYM.address}</li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dynamic Dumbbells Gym " + GYM.address)}" target="_blank" rel="noopener">Get directions →</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:${GYM.phone.replace(/\s/g, "")}">${GYM.phone}</a></li>
              <li><a href="https://wa.me/${GYM.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a></li>
              ${GYM.email ? `<li><a href="mailto:${GYM.email}">${GYM.email}</a></li>` : ""}
              ${GYM.instagram ? `<li><a href="${GYM.instagram}" target="_blank" rel="noopener">Instagram</a></li>` : ""}
              <li>${GYM.hours}</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <span>© ${year} ${GYM.name}. All rights reserved.</span>
          <span>Train hard. Stay dynamic.</span>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="https://wa.me/${GYM.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON_WA}</a>`;
}

/* ---------- Fill [data-gym] placeholders ---------- */
function fillGymInfo() {
  document.querySelectorAll("[data-gym]").forEach(el => {
    const key = el.dataset.gym;
    if (GYM[key]) el.textContent = GYM[key];
  });
  document.querySelectorAll("[data-gym-tel]").forEach(el => el.href = "tel:" + GYM.phone.replace(/\s/g, ""));
  document.querySelectorAll("[data-gym-wa]").forEach(el => el.href = "https://wa.me/" + GYM.whatsapp);
}

/* ---------- Forms ---------- */
const PATTERNS = {
  tel: /^[+]?[\d\s-]{10,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

function validateField(field) {
  const input = field.querySelector("input, select, textarea");
  if (!input) return true;
  let ok = true;
  if (input.type === "radio" || input.type === "checkbox") {
    const group = field.querySelectorAll(`input[name="${input.name}"]`);
    if (input.required) ok = [...group].some(i => i.checked);
  } else {
    const v = input.value.trim();
    if (input.required && !v) ok = false;
    else if (v && PATTERNS[input.type] && !PATTERNS[input.type].test(v)) ok = false;
  }
  field.classList.toggle("invalid", !ok);
  return ok;
}

function initForms() {
  document.querySelectorAll("form[data-form]").forEach(form => {
    const fields = form.querySelectorAll(".field");
    fields.forEach(f => f.addEventListener("input", () => f.classList.contains("invalid") && validateField(f)));
    fields.forEach(f => f.addEventListener("change", () => f.classList.contains("invalid") && validateField(f)));

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const results = [...fields].map(validateField);
      if (results.includes(false)) {
        form.querySelector(".field.invalid input, .field.invalid select, .field.invalid textarea")?.focus();
        return;
      }

      // Collect values (checkbox groups joined)
      const data = {};
      new FormData(form).forEach((v, k) => {
        data[k] = data[k] ? data[k] + ", " + v : v;
      });
      const title = form.dataset.form;

      // Optional: save to Google Sheet / Formspree
      if (GYM.formEndpoint) {
        try {
          await fetch(GYM.formEndpoint, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ form: title, page: location.pathname, ...data }),
          });
        } catch (_) { /* WhatsApp below still works */ }
      }

      // Send to WhatsApp with a ready-made message
      const lines = [`*${title}* — ${GYM.name}`, ""];
      Object.entries(data).forEach(([k, v]) => { if (v) lines.push(`*${k}:* ${v}`); });
      const url = `https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener");

      form.classList.add("sent");
      const name = (data["Name"] || "").split(" ")[0];
      const hello = form.nextElementSibling?.querySelector("[data-name]");
      if (hello && name) hello.textContent = ", " + name;
    });
  });

  // Booking dates can't be in the past
  const d = new Date();
  const today = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  document.querySelectorAll('input[type="date"][required]').forEach(i => i.min = today);

  // Pre-select options from URL, e.g. contact.html?plan=Women%20Quarterly
  const params = new URLSearchParams(location.search);
  params.forEach((value, key) => {
    const el = document.querySelector(`[name="${key}"]`);
    if (!el) return;
    if (el.type === "radio") {
      const r = document.querySelector(`[name="${key}"][value="${value}"]`);
      if (r) r.checked = true;
    } else el.value = value;
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return items.forEach(i => i.classList.add("in"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: .12 });
  items.forEach(i => io.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  fillGymInfo();
  initForms();
  initReveal();
});

// Hide the gallery section until at least one photo exists
window.addEventListener("load", () => {
  const g = document.getElementById("gallery");
  if (g && !g.querySelector("figure")) g.remove();
});
