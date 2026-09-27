const M = [
  {
    id: "last-confession",
    t: "The Last Confession",
    g: "Horror",
    r: "R",
    d: "1h 52m",
    rel: "October 2026",
    tag: "Some sins never die.",
    s: "Long before it was called The Cursed House, it was just a home on the edge of town. Now a new family moves in, and the same dream finds every one of them: water, a worried face, and a confession that was never finished.",
    story: [
      [
        "The Legend Begins",
        "Long before it was called “The Cursed House,” it was just a large, old house on the edge of town, home to Christine and her husband, Daniel. One year, Daniel disappeared. Weeks later, Christine was no longer with us. The town was shaken, but a few people who knew the couple quietly said it felt like fate. Rumors about Daniel had circulated for years, the kind neighbors whisper but never report. Since he vanished the same week, most assumed he never returned, and few missed him. After that, no one stayed in the house for long. They said they heard a woman’s soft whisper inside the walls. That’s how it became known as The Cursed House.",
      ],
      [
        "The First Dreams",
        "Soon after the funeral, Christine’s closest friend, Grace, began having the same dream. She is underwater, and Christine is right in front of her, mouth moving, trying to say something urgent, like a confession she never finished. Grace never understood it. She tried to move on, but the dream never fully left.",
      ],
      [
        "The New Family",
        "Years later, the house sells cheaply to Richard and Diana, who move in with their daughters, Ellie and Mia. They either don’t know the stories or choose not to believe them. Within weeks, the same dream reaches all of them: the water, the worried face, the silence where words should be. At first it feels like a shared bad dream. Then it feels too real. More than once, someone wakes with damp hair.",
      ],
      [
        "It Gets Worse",
        "Mia, the youngest, begins to change at night. Her hair grows long and wet while she sleeps, and for a few unsettling moments she doesn’t look like herself. Her face, posture, and voice shift into something none of them recognize. As the dreams and sightings grow stronger, Richard and Diana realize this is not a random haunting. With Grace’s help, they piece together what Christine has been trying to say. It was never about herself. It is a confession about Daniel, something the town got wrong, something she never got to finish saying, and she has been trying to tell someone ever since.",
      ],
    ],
    cast: [
      ["Christine", "The voice beneath the water"],
      ["Daniel", "The husband who disappeared"],
      ["Grace", "The friend who kept listening"],
      ["Richard", "The father who finds the evidence"],
      ["Diana", "The mother"],
      ["Ellie", "The elder daughter"],
      ["Mia", "The child the house chooses"],
    ],
  },
  {
    id: "evil-dead",
    t: "The Evil Dead",
    g: "Horror",
    r: "R",
    d: "1h 48m",
    rel: "November 2026",
    tag: "Some books should stay closed.",
    s: "When a group of friends finds a blood-stained book in an abandoned lodge, a single whispered line is enough to wake what was buried with it. By nightfall the doors will not open.",
    cast: [
      ["Ava", "The one who opens the book"],
      ["Marcus", "The skeptic"],
      ["Tessa", "The one who hears it first"],
      ["Jonah", "The caretaker"],
    ],
  },
  {
    id: "dark-secret",
    t: "Dark Secret",
    g: "Thriller",
    r: "16+",
    d: "1h 58m",
    rel: "December 2026",
    tag: "Every door hides something.",
    s: "When Layla returns to her childhood home for her grandmother\u2019s funeral, she finds a locked room, a stack of unsent letters and a name nobody in the family will say out loud. The closer she gets to the truth, the more it costs her.",
    cast: [
      ["Layla", "The granddaughter who returns"],
      ["Noor", "The aunt who knows"],
      ["Sam", "The neighbour with a key"],
      ["Dr. Hassan", "The family doctor"],
    ],
  },
];
const A = {
  "last-confession": {
    p: "assets/images/the-last-confession.jpeg",
    v: "assets/videos/The-Last-Confession.mp4",
  },
  "evil-dead": {
    p: "assets/images/evil-dead.jpeg",
    v: "assets/videos/The-Evil-Dead.mp4",
  },
  "dark-secret": {
    p: "assets/images/dark-secret.jpeg",
    v: "assets/videos/The-Dark-Secret.mp4",
  },
};
const CH = {
  Christine: "assets/images/christine.jpeg",
  Daniel: "assets/images/danial.jpeg",
  Grace: "assets/images/grace.jpeg",
  Richard: "",
  Mia: "assets/images/mia.jpeg",
};
const CIN = ["Cineplex", "Super Cinema", "Universal Cinemas"],
  DATES = ["25 Sep", "26 Sep", "27 Sep", "28 Sep"],
  TIMES = ["3:00 PM", "6:00 PM", "8:00 PM", "10:30 PM"],
  PRICE = 1000,
  FEE = 100;
const DUMMY = [
  ["The Ghost House", "Horror", "assets/images/the-ghost-house.jpeg"],
  ["The Shadow", "Horror", "assets/images/the-shadow.jpeg"],
  ["The Tunnel", "Thriller", "assets/images/the-tunnel.jpeg"],
];
const S = {
  m: null,
  cin: CIN[0],
  date: DATES[0],
  time: "",
  seats: [],
  pay: "card",
  f: {},
  err: "",
  done: null,
};
const $ = document.getElementById("app"),
  find = (id) => M.find((m) => m.id === id),
  rs = (n) => "Rs. " + n.toLocaleString("en-US");
const total = () => (S.seats.length ? S.seats.length * PRICE + FEE : 0);
const poster = (m) =>
  `<div class="poster" role="img" aria-label="${m.t} poster" style="background-image:url(${A[m.id].p})"></div>`;
const card = (m) => `
<div class="mc">
<div data-a="movie" data-id="${m.id}" style="cursor:pointer;position:relative">
${poster(m)}<span class="rb">
${m.r}
</span>
</div>
<div class="mb">
<h3>
${m.t}
</h3>
<div class="meta">
${m.g} \u2022 ${m.d}
</div>
<p class="ds">
<b>
${m.tag}
</b> ${m.s}
</p>
<div class="row">
<button class="btn sm" data-a="book" data-id="${m.id}">
Book Tickets
</button>
<button class="btn ghost sm" data-a="movie" data-id="${m.id}">
View Details
</button>
</div>
</div>
</div>`;
function setNav(p, id) {
  const n = document.getElementById("nv"),
    l = (t, a) => `<a ${a}>${t}</a>`,
    H = l("Home", 'data-a="home"'),
    Mv = l("Movies", 'data-a="nav" data-t="movies"');
  n.innerHTML =
    p === "movie" && find(id)
      ? H +
        Mv +
        l("Trailer", 'data-a="nav" data-t="trailer"') +
        l("Cast", 'data-a="nav" data-t="cast"') +
        l("Recommended", 'data-a="recpage"') +
        `<button class="btn sm" data-a="book" data-id="${id}">Book Now</button>`
      : H +
        Mv +
        l("Coming Soon", 'data-a="nav" data-t="soon"') +
        l("Recommended", 'data-a="recpage"') +
        l("About", 'data-a="nav" data-t="about"') +
        `<button class="btn sm hc" data-a="nav" data-t="movies">Explore Movies</button>`;
}
function filt() {
  const q = ((document.getElementById("q") || {}).value || "")
      .trim()
      .toLowerCase(),
    l = M.filter((m) => (m.t + " " + m.g).toLowerCase().includes(q));
  document.getElementById("grid").innerHTML = l.length
    ? l.map(card).join("")
    : '<p class="meta">No movies match your search. Try a title or a genre such as horror.</p>';
}
const seatName = (i) => "ABCDEF"[Math.floor(i / 8)] + ((i % 8) + 1);
function taken(k) {
  let h = 7;
  for (const c of k) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const s = new Set();
  for (let i = 0; i < 14; i++) {
    h = (h * 1103515245 + 12345) >>> 0;
    s.add(h % 48);
  }
  return s;
}

function home() {
  $.innerHTML = `<div class="hero"><h1>Discover Your<br><em>Next Movie.</em></h1><p>Explore exciting movies, watch trailers, discover your favorite characters and book your cinema experience with CineBuzz.</p><div class="row"><button class="btn" data-a="nav" data-t="movies">Explore Movies \u2192</button><button class="btn ghost" data-a="nav" data-t="soon">Coming Soon</button></div><div class="sr"><input id="q" placeholder="Search movies..." autocomplete="off"><button class="btn sm" data-a="search">Search</button></div></div>
<section id="movies">
<h2>Now 
<em>Showing</em>
</h2>
<div class="grid" id="grid">
${M.map(card).join("")}
</div>
</section>
<section id="soon">
<h2>Coming 
<em>Soon</em>
</h2>
<div class="list">
${M.map(
  (m) => `
    <div class="li">
    <div>
    <b>
    ${m.t}
    </b>
    <div class="meta">
    ${m.g} \u2022 In cinemas ${m.rel}
    </div>
    </div>
    <button class="btn sm" data-a="movie" data-id="${m.id}">
    Details
    </button>
    </div>`,
).join("")}
    </div>
    </section>
<section id="about">
<h2>
About 
<em>CineBuzz</em>
</h2>
<p class="meta" style="max-width:600px">
CineBuzz takes you from trailer to ticket in one path: discover a film, meet its cast, pick a cinema and showtime, then complete a mock booking. It is a prototype built for a digital marketing campaign, so nothing here is a real booking.</p>
</section>
<section id="submit">
<h2>
Stay 
<em>Updated</em>
</h2>
<p class="meta" style="max-width:520px;margin:0 0 14px">
Leave your email for release reminders and early showtimes. Demo form only, nothing is sent.
</p>
<div class="panel" style="max-width:480px">
<label>
Email address
</label>
<input id="subEmail" type="email" placeholder="you@email.com" autocomplete="off">
<button class="btn" style="margin-top:14px" data-a="submit-email">
Submit
</button>
<p class="meta" id="subMsg" style="margin-top:10px">
</p></div>
</section>`;
}

function movie(m) {
  const st = m.story
    ? m.story
        .map(
          (x) =>
            `<h3 style="font-size:18px;margin:20px 0 6px;color:var(--warm)">${x[0]}</h3><p style="color:#d5d3d0;margin:0">${x[1]}</p>`,
        )
        .join("")
    : `<p style="color:#d5d3d0;margin:0">${m.s}</p>`;
  $.innerHTML = `<div class="dh"><div class="hbg" style="background-image:url(${A[m.id].p})"></div><div class="hin"><div class="hp">${poster(m)}</div><div><span class="badge">Now showing</span><h1>${m.t}</h1><div class="meta">${m.g} \u2022 ${m.d} \u2022 Rated ${m.r} \u2022 In cinemas ${m.rel}</div><p><b>${m.tag}</b></p><div class="row"><button class="btn" data-a="trailer" data-id="${m.id}">\u25b6 Watch Trailer</button><button class="btn ghost" data-a="book" data-id="${m.id}">Book Tickets</button></div></div></div></div>
<section><h2>About the <em>Movie</em></h2>${st}</section>
<section id="trailer"><h2>Watch the <em>Trailer</em></h2><video id="tv" src="${A[m.id].v}" controls playsinline preload="metadata" style="width:100%;max-height:72vh;background:#000;border-radius:12px"></video></section>
<section id="cast"><h2>Meet the <em>Cast</em></h2><div class="cast">${m.cast.map((c) => `<div>${CH[c[0]] ? `<img src="${CH[c[0]]}" alt="${c[0]}">` : `<div class="av">${c[0][0]}</div>`}<b>${c[0]}</b><span>${c[1]}</span></div>`).join("")}</div></section>
<section><h2>More <em>Like This</em></h2><p class="meta" style="margin:0 0 14px">Recommended titles for demo purposes.</p><div class="rr">${DUMMY.map(([t, g, img]) => `<div class="rc" style="background-image:url(${img})"><small>SUGGESTED</small><span>${t}<br><span style="font-weight:400;font-size:11px;color:#ffffffbb">${g}</span></span></div>`).join("")}</div></section>
<section><h2>Book Your <em>Tickets</em></h2><p class="meta" style="margin:0 0 14px">Choose your cinema, date and showtime.</p><button class="btn" data-a="book" data-id="${m.id}">Book Tickets</button></section>`;
}

function book(m) {
  const tk = taken([m.id, S.cin, S.date, S.time].join());
  let h = `<section><button class="btn ghost sm" data-a="back-movie" style="margin-bottom:14px">\u2190 Back to Movie</button><div class="meta">Reserve your seat</div><h2>Book Your <em>Tickets</em></h2><div class="two"><div>
<div class="panel"><h3>Select Cinema</h3><select data-a="cin">${CIN.map((c) => `<option${c === S.cin ? " selected" : ""}>${c}</option>`).join("")}</select></div>
<div class="panel"><h3>Select Date</h3><div class="chips">${DATES.map((d) => `<button class="chip${d === S.date ? " on" : ""}" data-a="date" data-v="${d}">${d}</button>`).join("")}</div></div>
<div class="panel"><h3>Select Showtime</h3><div class="chips">${TIMES.map((t) => `<button class="chip${t === S.time ? " on" : ""}" data-a="time" data-v="${t}">${t}</button>`).join("")}</div></div>
<div class="panel"><h3>Select Your Seats</h3>`;
  if (!S.time)
    h += `<p class="meta" style="margin:0">Choose a showtime to see available seats.</p>`;
  else {
    h += `<div class="screen"></div><div class="seats">`;
    for (let r = 0; r < 6; r++) {
      h += `<span>${"ABCDEF"[r]}</span>`;
      for (let c = 0; c < 8; c++) {
        const i = r * 8 + c,
          x = tk.has(i),
          on = S.seats.includes(i);
        h += `<button class="seat${x ? " tk" : ""}${on ? " on" : ""}" ${x ? "disabled" : `data-a="seat" data-v="${i}"`} aria-label="Seat ${seatName(i)}">${c + 1}</button>`;
      }
    }
    h += `</div><div class="leg"><span><i style="background:#3a3a44"></i>Available</span><span><i style="background:var(--red)"></i>Selected</span><span><i style="background:#1b1b20"></i>Taken</span></div><p class="meta" style="text-align:center;margin:10px 0 0">Up to 6 seats. Rs. 1,000 per seat + Rs. 100 booking fee.</p>`;
  }
  const sm = (a, b) =>
    `<div class="sum"><span>${a}</span><span>${b}</span></div>`;
  h += `</div></div><div class="panel sumbox"><h3>Booking Summary</h3>${sm("Movie", "<b>" + m.t + "</b>")}${sm("Cinema", S.cin)}${sm("Date", S.date + " 2026")}${sm("Showtime", S.time || "-")}${sm("Seats", S.seats.length ? S.seats.map(seatName).join(", ") : "None")}${sm("Ticket Price", rs(S.seats.length * PRICE))}${sm("Booking Fee", rs(S.seats.length ? FEE : 0))}<div class="sum"><b>Total</b><b style="color:var(--red)">${rs(total())}</b></div><button class="btn sb" style="width:100%;margin-top:14px" data-a="checkout" ${S.seats.length ? "" : "disabled"}>Continue to Checkout</button></div></div></section><div class="bar"><div><small>${S.seats.length ? S.seats.map(seatName).join(", ") : "No seats selected"}</small><b>${rs(total())}</b></div><button class="btn" data-a="checkout" ${S.seats.length ? "" : "disabled"}>Continue to Checkout</button></div>`;
  $.innerHTML = h;
}

function checkout() {
  const m = find(S.m),
    f = S.f,
    v = (k) => (f[k] || "").replace(/"/g, "&quot;");
  $.innerHTML = `<section><button class="btn ghost sm" data-a="back-book" style="margin-bottom:14px">\u2190 Back to Seats</button><div class="meta">Final step</div><h2>Complete your booking</h2><p class="meta">Review your details and finish the demo payment.</p>
<div class="panel"><h3>Booking summary</h3><div class="sum"><span>Movie</span><b>${m.t}</b></div><div class="sum"><span>Cinema</span><span>${S.cin}</span></div><div class="sum"><span>Date</span><span>${S.date} 2026</span></div><div class="sum"><span>Showtime</span><span>${S.time}</span></div><div class="sum"><span>Seats</span><span>${S.seats.map(seatName).join(", ")}</span></div><div class="sum"><span>Tickets (${S.seats.length})</span><span>${rs(S.seats.length * PRICE)}</span></div><div class="sum"><span>Booking fee</span><span>${rs(FEE)}</span></div><div class="sum"><b>Total</b><b style="color:var(--red)">${rs(total())}</b></div></div>
<div class="panel"><h3>Customer details</h3><label>Full name</label><input data-f="name" value="${v("name")}" placeholder="Your name" autocomplete="off"><label>Email address</label><input data-f="email" type="email" value="${v("email")}" placeholder="example@email.com" autocomplete="off"><label>Phone number</label><input data-f="phone" type="tel" value="${v("phone")}" placeholder="+92 300 1234567" autocomplete="off"></div>
<div class="panel"><h3>Payment method</h3><div class="chips" style="margin-bottom:6px"><button class="chip${S.pay === "card" ? " on" : ""}" data-a="pay" data-v="card">Credit / Debit Card</button><button class="chip${S.pay === "wallet" ? " on" : ""}" data-a="pay" data-v="wallet">Digital Wallet</button></div>
${S.pay === "card" ? `<label>Cardholder name</label><input data-f="cn" value="${v("cn")}" placeholder="Name on card" autocomplete="off"><label>Card number</label><input data-f="num" value="${v("num")}" inputmode="numeric" maxlength="19" placeholder="Demo number only" autocomplete="off"><div class="row" style="flex-wrap:nowrap"><div style="flex:1"><label>Expiry</label><input data-f="exp" value="${v("exp")}" placeholder="MM/YY" maxlength="5" autocomplete="off"></div><div style="flex:1"><label>CVV</label><input data-f="cvv" value="${v("cvv")}" inputmode="numeric" maxlength="3" placeholder="123" autocomplete="off"></div></div>` : `<label>Wallet number</label><input data-f="wal" value="${v("wal")}" inputmode="numeric" placeholder="Demo number only" autocomplete="off">`}
<p class="meta" style="margin:14px 0 0;font-size:13px">Demo payment: nothing is charged and nothing is sent. Please do not enter real card details.</p></div>
<label style="display:flex;gap:10px;align-items:flex-start;color:var(--tx)"><input type="checkbox" data-f="ok" style="width:auto;margin-top:4px"${f.ok ? " checked" : ""}>I confirm the information is correct and I understand this is a demo booking.</label>
<div class="err" id="err">${S.err}</div><button class="btn" style="width:100%;margin-top:14px" data-a="pay-now">Complete Mock Payment</button></section><div class="bar"><div><small>Total</small><b>${rs(total())}</b></div><button class="btn" data-a="pay-now">Complete Mock Payment</button></div>`;
}

function pay() {
  const f = S.f,
    e = [];
  if (!(f.name || "").trim()) e.push("Enter your full name.");
  if (!/^\S+@\S+\.\S+$/.test(f.email || ""))
    e.push("Enter a valid email address.");
  if ((f.phone || "").replace(/\D/g, "").length < 10)
    e.push("Enter a phone number with at least 10 digits.");
  if (S.pay === "card") {
    if (!(f.cn || "").trim()) e.push("Enter the cardholder name.");
    if ((f.num || "").replace(/\D/g, "").length !== 16)
      e.push("Enter a 16-digit demo card number.");
    if (!/^(0[1-9]|1[0-2])\/\d\d$/.test(f.exp || ""))
      e.push("Enter expiry as MM/YY.");
    if (!/^\d{3}$/.test(f.cvv || "")) e.push("Enter a 3-digit CVV.");
  } else if ((f.wal || "").replace(/\D/g, "").length < 10)
    e.push("Enter a demo wallet number.");
  if (!f.ok) e.push("Tick the confirmation box.");
  if (e.length) {
    S.err = e[0];
    document.getElementById("err").textContent = S.err;
    return;
  }
  const m = find(S.m),
    ini =
      m.t
        .split(" ")
        .filter((w) => w.length > 2)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase() || "CB";
  S.done = {
    m,
    code: `CB-${ini}-${Math.floor(10000 + Math.random() * 89999)}`,
    id: "CB" + Date.now().toString().slice(-9),
    cin: S.cin,
    date: S.date,
    time: S.time,
    seats: S.seats.map(seatName).join(", "),
    n: S.seats.length,
    amt: total(),
    name: f.name.trim(),
  };
  S.err = "";
  location.hash = "#/confirm";
}

function confirm() {
  const d = S.done,
    rec = [
      ...M.filter(
        (x) =>
          x.id !== d.m.id && x.g.split(" / ").some((g) => d.m.g.includes(g)),
      ),
      ...M.filter((x) => x.id !== d.m.id),
    ]
      .filter((x, i, a) => a.indexOf(x) === i)
      .slice(0, 2);
  let b = "";
  for (let i = 0; i < 34; i++)
    b += `<i style="width:${((d.code.charCodeAt(i % d.code.length) + i) % 3) + 1}px"></i>`;
  $.innerHTML = `<section><div class="ticket"><div class="ok">\u2713</div><h2 style="text-align:center;font-size:26px">Thank You, ${d.name.split(" ")[0]}!</h2><p class="meta" style="text-align:center">Your booking is confirmed. This is a demo booking, not a valid ticket.</p>
<h3 style="margin:18px 0 8px;font-size:22px">${d.m.t}</h3><div class="sum"><span>Cinema</span><span>${d.cin}</span></div><div class="sum"><span>Date</span><span>${d.date} 2026</span></div><div class="sum"><span>Showtime</span><span>${d.time}</span></div><div class="sum"><span>Seats</span><span>${d.seats}</span></div><div class="sum"><span>Tickets</span><span>${d.n}</span></div><div class="sum"><span>Booking ID</span><span>${d.id}</span></div><div class="sum"><b>Total paid (mock)</b><b style="color:var(--red)">${rs(d.amt)}</b></div>
<div class="code">${d.code}</div><div class="bars">${b}</div><p class="meta" style="font-size:12px;margin:8px 0 0">Mock ticket code. Present at the cinema for demo purposes only.</p>
<div class="row no-print" style="margin-top:18px"><button class="btn sm" data-a="print">Print ticket</button><button class="btn ghost sm" data-a="home">Back to Movies</button></div></div></section>
<section class="no-print"><h2>You Might Also <em>Like</em></h2><div class="grid">${rec.map(card).join("")}</div><div class="rr" style="margin-top:14px">${DUMMY.map(([t, g, img]) => `<div class="rc" style="background-image:url(${img})"><small>SUGGESTED</small><span>${t}<br><span style="font-weight:400;font-size:11px;color:#ffffffbb">${g}</span></span></div>`).join("")}</div><p class="meta" style="margin-top:10px">Suggested using your booked movie\u2019s genre, plus placeholder titles for demo purposes.</p></section>`;
}

function trailer(m) {
  const o = document.createElement("div");
  o.className = "modal";
  o.innerHTML = `<button class="cls" aria-label="Close">\u00d7</button><video src="${A[m.id].v}" controls autoplay playsinline style="max-width:100%;max-height:82vh;border-radius:10px;background:#000"></video>`;
  document.body.appendChild(o);
  const c = () => o.remove();
  o.querySelector(".cls").onclick = c;
  o.onclick = (e) => {
    if (e.target === o) c();
  };
}

function recommended() {
  $.innerHTML = `<section><div class="meta">Suggested for you</div><h2>Top Picks <em>For You</em></h2><p class="meta" style="max-width:560px;margin:0 0 14px">Placeholder titles CineBuzz might suggest next. Demo content, not real or bookable movies.</p><div class="rr">${DUMMY.map(([t, g, img]) => `<div class="rc" style="background-image:url(${img})"><small>SUGGESTED</small><span>${t}<br><span style="font-weight:400;font-size:11px;color:#ffffffbb">${g}</span></span></div>`).join("")}</div></section>
<section><h2>Now <em>Showing</em> on CineBuzz</h2><p class="meta" style="margin:0 0 14px">These three you can actually watch a trailer for and book.</p><div class="rr">${M.map((m) => `<div class="rc" data-a="movie" data-id="${m.id}" style="background-image:url(${A[m.id].p});cursor:pointer"><small>${m.g.toUpperCase()}</small><span>${m.t}<br><span style="font-weight:400;font-size:11px;color:#ffffffbb">${m.d} \u2022 Rated ${m.r}</span></span></div>`).join("")}</div></section>`;
}

function draw() {
  const [, p, id] = location.hash.split("/");
  setNav(p, id);
  if (p === "recommended") return recommended();
  if (p === "movie" && find(id)) return movie(find(id));
  if (p === "book" && find(S.m)) return book(find(S.m));
  if (p === "checkout" && S.m && S.seats.length) return checkout();
  if (p === "confirm" && S.done) return confirm();
  home();
}
function route() {
  const [, p, id] = location.hash.split("/");
  if (p === "book" && find(id) && S.m !== id) {
    S.m = id;
    S.time = "";
    S.seats = [];
    S.done = null;
  }
  scrollTo(0, 0);
  draw();
}
const sc = (t) => {
  const e = document.getElementById(t);
  if (e) e.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-a]");
  if (!el || el.tagName === "SELECT") return;
  const a = el.dataset.a,
    v = el.dataset.v,
    id = el.dataset.id;
  if (a === "home") location.hash = "#/";
  else if (a === "recpage") location.hash = "#/recommended";
  else if (a === "nav") {
    const t = el.dataset.t;
    if (document.getElementById(t)) sc(t);
    else {
      location.hash = "#/";
      setTimeout(() => sc(t), 80);
    }
  } else if (a === "search") filt();
  else if (a === "movie") location.hash = "#/movie/" + id;
  else if (a === "book") location.hash = "#/book/" + id;
  else if (a === "trailer") {
    const go = () => {
      sc("trailer");
      const v = document.getElementById("tv");
      if (v) v.play().catch(() => {});
    };
    if (location.hash === "#/movie/" + id) go();
    else {
      location.hash = "#/movie/" + id;
      setTimeout(go, 150);
    }
  } else if (a === "date") {
    S.date = v;
    S.seats = [];
    draw();
  } else if (a === "time") {
    S.time = v;
    S.seats = [];
    draw();
  } else if (a === "seat") {
    const i = +v,
      k = S.seats.indexOf(i);
    if (k > -1) S.seats.splice(k, 1);
    else if (S.seats.length < 6) S.seats.push(i);
    draw();
  } else if (a === "checkout") location.hash = "#/checkout";
  else if (a === "back-book") location.hash = "#/book/" + S.m;
  else if (a === "back-movie") location.hash = "#/movie/" + S.m;
  else if (a === "pay") {
    S.pay = v;
    S.err = "";
    draw();
  } else if (a === "pay-now") pay();
  else if (a === "print") {
    try {
      window.print();
    } catch (x) {}
  } else if (a === "submit-email") {
    const v = (document.getElementById("subEmail").value || "").trim(),
      m = document.getElementById("subMsg");
    if (/^\S+@\S+\.\S+$/.test(v)) {
      m.style.color = "#5fe08a";
      m.textContent = "Thanks! (Demo only \u2014 no email is actually sent.)";
      document.getElementById("subEmail").value = "";
    } else {
      m.style.color = "#ff6b6b";
      m.textContent = "Enter a valid email address.";
    }
  }
});
document.addEventListener("change", (e) => {
  if (e.target.dataset.a === "cin") {
    S.cin = e.target.value;
    S.seats = [];
    draw();
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "q") return filt();
  const k = e.target.dataset.f;
  if (!k) return;
  if (k === "ok") {
    S.f.ok = e.target.checked;
    return;
  }
  let v = e.target.value;
  if (k === "num") {
    v = v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
    e.target.value = v;
  }
  if (k === "exp") {
    v = v.replace(/[^\d]/g, "").slice(0, 4);
    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
    e.target.value = v;
  }
  S.f[k] = v;
});
addEventListener("hashchange", route);
route();
