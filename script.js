/* ------------------------------------------------------------------
   PORTFOLIO DATA
   To add a video, add one line to the right section below.

   shape:    "tall" (9:16 card) or "wide" (16:9 card)
   youtube:  YouTube video ID   (youtube.com/shorts/<ID> or youtu.be/<ID>)
   vimeo:    Vimeo video ID
   video:    path to a video file in this repo (for work not on YouTube/Vimeo)
   image:    full-size image to open instead of a video (for still renders)
   portrait: true if the video itself is vertical (Shorts / Reels)
   tag:      optional small label on the card, e.g. "3D · Blender"
   credit:   optional small line under the title, e.g. a director credit
   preview:  optional short muted .mp4 that loops on the card
------------------------------------------------------------------- */

const DRIVE_MORE = "https://drive.google.com/drive/folders/1ZRE2_v_KeEJZPHe1dDRby61h2jbglBjo?usp=sharing";

const WORK = {

  ads: [
    { title: "Orthopedic Brand Ad",    shape: "tall", youtube: "ZhJrXDuJHRg", portrait: true, thumb: "assets/thumbnails/aapson-ad-01.webp" },
    { title: "Beauty Brand Ad",        shape: "tall", youtube: "gTLRYoeX6Io", portrait: true, thumb: "assets/thumbnails/twam-ad.webp" },
    { title: "Orthopedic Brand Ad 02", shape: "tall", youtube: "xCy9uix_vGU", portrait: true, thumb: "assets/thumbnails/aapson-ad-02.webp" },
    { title: "Education Institute Ad", shape: "tall", youtube: "4MD74iupZss", portrait: true, thumb: "assets/thumbnails/accountable-institute-01.webp" },
    { title: "Skincare Brand Ad",      shape: "tall", youtube: "COmKbkeHtrw", portrait: true, thumb: "assets/thumbnails/skincare-ad.webp" },
    { title: "Food & Catering Ad",     shape: "tall", youtube: "Cn7dylZmSr8", portrait: true, thumb: "assets/thumbnails/friends-caterers-ad.webp" },
    { more: "More Edits", shape: "tall", href: DRIVE_MORE }
  ],

  motion: [
    { title: "3D Wedding Envelope Animation",    shape: "tall", youtube: "12pw4gR33Fs", portrait: true, tag: "3D · Blender", thumb: "assets/thumbnails/envelope-3d.webp" },
    { title: "3D Retail Display Rack Render",    shape: "tall", image: "assets/thumbnails/retail-rack-3d-full.webp", tag: "3D · Blender", thumb: "assets/thumbnails/retail-rack-3d.webp", light: true },
    { title: "Ajjer – Short Film Motion Poster", shape: "tall", video: "assets/video/ajjer-motion-poster.mp4", portrait: true, tag: "Motion", credit: "Directed by Pradeep Naik", thumb: "assets/thumbnails/ajjer-motion-poster.webp" },
    { title: "Wedding Invite Product Promo",     shape: "tall", youtube: "rB-D8zLevVU", portrait: true, tag: "Motion", thumb: "assets/thumbnails/wedding-invite-promo.webp" },
    { title: "SaaS Product Explainer",           shape: "tall", youtube: "yWb1O6ejut4", portrait: true, tag: "Motion", thumb: "assets/thumbnails/saas-explainer.webp" },
    { title: "Education Explainer Reel",         shape: "tall", youtube: "4_PDqbUO6xk", portrait: true, tag: "Motion", thumb: "assets/thumbnails/education-explainer.webp" },
    { title: "Jewellery Brand Educational Reel", shape: "tall", youtube: "X3LkLqSz47s", portrait: true, tag: "Motion", thumb: "assets/thumbnails/jewellery-educational.webp" },
    { title: "Interior Design Lead-Gen Reel",    shape: "tall", youtube: "WgogRhhssa8", portrait: true, tag: "Motion", thumb: "assets/thumbnails/interior-leadgen.webp" },
    { title: "Festival LED Display Animation",   shape: "wide", youtube: "h3xqnu74UjE", tag: "Motion", thumb: "assets/thumbnails/festival-led.webp" }
  ],

  cinematic: [
    { title: "Kambala Highlights", shape: "wide", youtube: "lPjhXQBf6wg", thumb: "assets/thumbnails/kambala.webp" },
    { title: "Wedding Highlights", shape: "wide", vimeo: "1151887511",   thumb: "assets/thumbnails/video2.webp" },
    { title: "Event Highlights",   shape: "wide", vimeo: "1151793986",   thumb: "assets/thumbnails/video1.webp" },
    { title: "Pooja Highlights",   shape: "wide", youtube: "so8PqWt3xgo", thumb: "assets/thumbnails/pooja.webp" },
    { title: "House Highlights",   shape: "wide", youtube: "za8lvaE7s7I", thumb: "assets/thumbnails/house.webp" },
    { more: "More Videos", shape: "wide", href: DRIVE_MORE }
  ],

  social: [
    { title: "Fast Cut Edit",        shape: "tall", vimeo: "1151797279",   thumb: "assets/thumbnails/video3.webp" },
    { title: "YouTube Long Form",    shape: "tall", youtube: "vvrLCvXiBUE", thumb: "assets/thumbnails/video4.webp" },
    { title: "YouTube Short",        shape: "tall", youtube: "RBfPjq5NYC8", thumb: "assets/thumbnails/video5.webp" },
    { title: "Promo Edit 01",        shape: "tall", youtube: "QXZXUwXBlpc", thumb: "assets/thumbnails/promo1.webp" },
    { title: "Motion Graphics Edit", shape: "tall", youtube: "Abb5JV3-ifQ", thumb: "assets/thumbnails/motion.webp" },
    { title: "Promo Edit 02",        shape: "tall", youtube: "5XJrji11N9U", thumb: "assets/thumbnails/promo2.webp" },
    { title: "Promo Edit 03",        shape: "tall", youtube: "2j7xVE3llQI", thumb: "assets/thumbnails/promo3.webp" },
    { title: "Announcement Reel",    shape: "tall", youtube: "TzQaFSPRdbc", portrait: true, thumb: "assets/thumbnails/cricket-screening-announcement.webp" },
    { title: "Wishing Edit",         shape: "tall", youtube: "Qq_kNKjTbzA", portrait: true, thumb: "https://img.youtube.com/vi/Qq_kNKjTbzA/hqdefault.jpg" },
    { more: "More Edits", shape: "tall", href: DRIVE_MORE }
  ]

};


/* ------------------------------------------------------------------
   RENDER CARDS
------------------------------------------------------------------- */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  children.forEach(child => child && node.appendChild(child));
  return node;
}

function buildCard(item) {

  if (item.more) {
    return el("a", { class: `video-card ${item.shape} more-card`, href: item.href, target: "_blank", rel: "noopener" }, [
      el("div", { class: "card-media" }, [
        el("div", { class: "more-content" }, [
          el("span", { class: "plus", "aria-hidden": "true", text: "+" }),
          el("span", { class: "more-label", text: item.more })
        ])
      ]),
      el("h3", { text: "View on Drive" })
    ]);
  }

  const media = el("div", { class: "card-media" + (item.light ? " light" : "") }, [
    el("img", { src: item.thumb, alt: item.title, loading: "lazy", decoding: "async" })
  ]);

  if (item.preview && !reduceMotion) {
    const video = el("video", { src: item.preview, poster: item.thumb, muted: "", loop: "", playsinline: "", autoplay: "", preload: "metadata", "aria-hidden": "true" });
    video.muted = true;
    media.appendChild(video);
  }

  if (item.tag) media.appendChild(el("span", { class: "card-tag", text: item.tag }));
  media.appendChild(el("span", { class: "play-icon", "aria-hidden": "true" }));

  const card = el("button", {
    class: `video-card ${item.shape}`,
    type: "button",
    "aria-label": `${item.image ? "View" : "Play"}: ${item.title}${item.credit ? `, ${item.credit}` : ""}`
  }, [media, el("h3", { text: item.title }), item.credit && el("p", { class: "card-credit", text: item.credit })]);

  card.addEventListener("click", () => openModal(item, card));
  return card;
}

function buildRow(wrapper, items) {
  const row = el("div", { class: "scroll-row" });
  items.forEach(item => row.appendChild(buildCard(item)));

  const left  = el("button", { class: "scroll-btn left",  type: "button", "aria-label": "Scroll left" });
  const right = el("button", { class: "scroll-btn right", type: "button", "aria-label": "Scroll right" });
  left.innerHTML = "&#10094;";
  right.innerHTML = "&#10095;";

  wrapper.append(left, row, right);

  const step = () => Math.max(row.clientWidth * 0.8, 240);
  left.addEventListener("click",  () => row.scrollBy({ left: -step(), behavior: "smooth" }));
  right.addEventListener("click", () => row.scrollBy({ left:  step(), behavior: "smooth" }));

  /* Show each arrow only when there is something to scroll to */
  const update = () => {
    const max = row.scrollWidth - row.clientWidth;
    wrapper.classList.toggle("can-left",  row.scrollLeft > 4);
    wrapper.classList.toggle("can-right", row.scrollLeft < max - 4);
  };
  row.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  row.querySelectorAll("img").forEach(img => img.addEventListener("load", update));
  update();
}

document.querySelectorAll("[data-row]").forEach(wrapper => {
  const items = WORK[wrapper.dataset.row];
  if (items) buildRow(wrapper, items);
});


/* ------------------------------------------------------------------
   HERO BACKGROUND
   Fills 7 drifting columns with the portfolio thumbnails. Each column
   holds its images twice so the loop is seamless.
------------------------------------------------------------------- */

const heroBg = document.getElementById("heroBg");

if (heroBg) {
  const thumbs = Object.values(WORK).flat()
    .filter(item => item.thumb && !item.light && !item.thumb.startsWith("http"))
    .map(item => item.thumb);

  const COLS = 7, PER_COL = 4;
  for (let c = 0; c < COLS; c++) {
    const col = el("div", { class: "hero-col" });
    col.style.setProperty("--dur", `${50 + (c % 3) * 12}s`);
    const imgs = [];
    for (let i = 0; i < PER_COL; i++) imgs.push(thumbs[(c * PER_COL + i) % thumbs.length]);
    [...imgs, ...imgs].forEach(src => col.appendChild(el("img", { src, alt: "", decoding: "async" })));
    heroBg.appendChild(col);
  }
}


/* ------------------------------------------------------------------
   MODAL PLAYER
------------------------------------------------------------------- */

const modal = document.getElementById("videoModal");
const container = document.getElementById("videoContainer");
const modalContent = modal.querySelector(".modal-content");
const closeBtn = modal.querySelector(".close");
let lastTrigger = null;

function openModal(item, trigger) {
  let src = "";
  if (item.youtube) src = `https://www.youtube.com/embed/${item.youtube}?autoplay=1&rel=0`;
  if (item.vimeo)   src = `https://player.vimeo.com/video/${item.vimeo}?autoplay=1`;

  container.innerHTML = "";
  if (item.image) {
    container.appendChild(el("img", { src: item.image, alt: item.title }));
  } else if (item.video) {
    const video = el("video", { src: item.video, poster: item.thumb, controls: "", autoplay: "", playsinline: "", title: item.title });
    container.appendChild(video);
  } else {
    container.appendChild(el("iframe", {
      src,
      title: item.title,
      allow: "autoplay; fullscreen; picture-in-picture",
      allowfullscreen: ""
    }));
  }

  modalContent.classList.toggle("portrait", !!item.portrait);
  modalContent.classList.toggle("image", !!item.image);

  lastTrigger = trigger;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  container.innerHTML = "";
  document.body.style.overflow = "";
  if (lastTrigger) lastTrigger.focus();
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });


/* ------------------------------------------------------------------
   BIO TOGGLE
------------------------------------------------------------------- */

const bioToggle = document.getElementById("bioToggle");
const bioPanel  = document.getElementById("bioPanel");

if (bioToggle && bioPanel) {
  bioToggle.addEventListener("click", () => {
    const isOpen = bioPanel.classList.toggle("open");
    bioToggle.classList.toggle("open", isOpen);
    bioToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
