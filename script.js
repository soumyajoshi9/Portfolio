(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ============================================================
     ICONS (inline, category-based — no external icon library)
     ============================================================ */
  const ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 16.5v-12z"/><path d="M4 16.5A2.5 2.5 0 016.5 19H20"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v12M6 12h12"/><rect x="3" y="3" width="18" height="18" rx="3"/></svg>',
    rover: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="10" width="18" height="7" rx="1.5"/><circle cx="7" cy="19" r="1.7"/><circle cx="17" cy="19" r="1.7"/><path d="M8 10V6a2 2 0 012-2h4a2 2 0 012 2v4M12 4V2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 3.5v6c0 5-3.4 8.6-8 10.5-4.6-1.9-8-5.5-8-10.5v-6L12 2z"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3a3 3 0 00-3 3v.3A3 3 0 004 9v1a3 3 0 001 2.2V14a3 3 0 003 3h1M15 3a3 3 0 013 3v.3A3 3 0 0120 9v1a3 3 0 01-1 2.2V14a3 3 0 01-3 3h-1M9 3v16M15 3v16"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5L2 12l6 7M16 5l6 7-6 7"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6.1 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.1-4-9s1.5-6.3 4-9z"/></svg>',
  };
  const CERT_ICON = { "Cybersecurity": "shield", "AI / ML": "brain", "Programming": "code", "Web Development": "globe" };
  const PROJECT_ICON = { "library-management-system": "book", "hospital-management-system": "cross", "rc-car-pragyan": "rover" };

  /* ============================================================
     RENDER: HERO TERMINAL TYPING
     ============================================================ */
  function initTerminalTyping() {
    const el = $("#terminal-typed");
    const lines = [
      "> Soumya Joshi",
      "> B.Tech CSE @ LNCTS Bhopal (2028)",
      "> Focus: DSA · OOP · DBMS",
      "> Stack: Python · C/C++ · MySQL",
      "> Status: open to SWE internships",
    ];
    let li = 0, ci = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) { el.textContent = lines.join("\n"); return; }

    function typeLine() {
      if (li >= lines.length) { setTimeout(() => { li = 0; ci = 0; el.textContent = ""; typeLine(); }, 2400); return; }
      const line = lines[li];
      if (ci <= line.length) {
        el.textContent = lines.slice(0, li).join("\n") + (li > 0 ? "\n" : "") + line.slice(0, ci);
        ci++;
        setTimeout(typeLine, 26);
      } else {
        li++; ci = 0;
        setTimeout(typeLine, 420);
      }
    }
    typeLine();
  }

  /* ============================================================
     RENDER: HERO ROLE (from data)
     ============================================================ */
  function renderHeroRole() {
    $("#heroRole").textContent = PROFILE.title;
  }

  /* ============================================================
     RENDER: ABOUT
     ============================================================ */
  function renderAbout() {
    const textEl = $("#aboutText");
    textEl.innerHTML = PROFILE.summary
      .split(". ")
      .reduce((acc, sentence, i, arr) => {
        acc.buf += sentence + (i < arr.length - 1 ? ". " : "");
        if (acc.buf.length > 260 || i === arr.length - 1) {
          acc.html += `<p>${acc.buf.trim()}</p>`;
          acc.buf = "";
        }
        return acc;
      }, { buf: "", html: "" }).html;

    const statGrid = $("#statGrid");
    statGrid.innerHTML = PROFILE.stats
      .map(s => `<div class="stat-cell"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`)
      .join("");
  }

  /* ============================================================
     RENDER: SKILLS
     ============================================================ */
  function renderSkills() {
    $("#skillsGrid").innerHTML = SKILLS.map(group => `
      <div class="skill-card reveal">
        <h3>${group.category}</h3>
        <div class="skill-tags">
          ${group.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* ============================================================
     RENDER: PROJECTS + FILTER
     ============================================================ */
  function renderProjects(filter = "All") {
    const grid = $("#projectGrid");
    const items = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
    grid.innerHTML = items.map(p => `
      <article class="project-card reveal is-visible">
        <div class="project-glyph">${ICONS[PROJECT_ICON[p.id]] || ICONS.code}</div>
        <h3>${p.name}</h3>
        <div class="project-tagline">${p.tagline}</div>
        <p class="project-desc">${p.description}</p>
        <ul class="project-features">
          ${p.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-tech">${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("")}</div>
        <div class="project-links">
          <a class="btn btn-ghost btn-sm" href="${p.github || '#'}" ${p.github ? 'target="_blank" rel="noopener"' : 'disabled aria-disabled="true"'}>${p.github ? "Code" : "Code — private"}</a>
          <a class="btn btn-ghost btn-sm" href="${p.demo || '#'}" ${p.demo ? 'target="_blank" rel="noopener"' : 'disabled aria-disabled="true"'}>${p.demo ? "Live Demo" : "No demo yet"}</a>
        </div>
      </article>
    `).join("");
  }

  function initProjectFilters() {
    const cats = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
    const row = $("#projectFilters");
    row.innerHTML = cats.map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`).join("");
    row.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", row).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  }

  /* ============================================================
     RENDER: CERTIFICATIONS + FILTER + MODAL
     ============================================================ */
  function renderCerts(filter = "All") {
    const grid = $("#certGrid");
    const items = filter === "All" ? CERTIFICATES : CERTIFICATES.filter(c => c.category === filter);
    grid.innerHTML = items.map((c, i) => `
      <button class="cert-card reveal is-visible" data-cert-index="${CERTIFICATES.indexOf(c)}">
        <div class="cert-top">
          <div class="cert-icon">${ICONS[CERT_ICON[c.category]] || ICONS.code}</div>
          <span class="cert-cat">${c.category}</span>
        </div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-view">View details →</div>
      </button>
    `).join("");

    $$(".cert-card", grid).forEach(card => {
      card.addEventListener("click", () => openCertModal(CERTIFICATES[+card.dataset.certIndex]));
    });
  }

  function initCertFilters() {
    const cats = ["All", ...Array.from(new Set(CERTIFICATES.map(c => c.category)))];
    const row = $("#certFilters");
    row.innerHTML = cats.map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`).join("");
    row.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", row).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCerts(btn.dataset.filter);
    });
  }

  function openCertModal(cert) {
    $("#certModalTitle").textContent = cert.title;
    $("#certModalIssuer").textContent = cert.issuer;
    $("#certModalPreview").textContent = cert.image
      ? ""
      : "Certificate image not yet uploaded — add an image path in data.js to display a preview here.";
    if (cert.image) {
      $("#certModalPreview").innerHTML = `<img src="${cert.image}" alt="${cert.title} certificate" style="border-radius:8px;max-height:320px;" />`;
    }
    const meta = [];
    if (cert.date) meta.push(["Issued", cert.date]);
    if (cert.credentialId) meta.push(["Credential ID", cert.credentialId]);
    $("#certModalMeta").innerHTML = meta.map(([k, v]) => `<div class="modal-meta-row"><span>${k}</span><span>${v}</span></div>`).join("");

    if (cert.verificationUrl) {
      $("#certModalMeta").innerHTML += `<a class="btn btn-primary btn-sm" style="margin-top:6px;justify-content:center" href="${cert.verificationUrl}" target="_blank" rel="noopener">Verify Credential</a>`;
    }

    const overlay = $("#certModal");
    overlay.classList.add("open");
    lastFocused = document.activeElement;
    $("#certModalClose").focus();
  }
  let lastFocused = null;
  function closeCertModal() {
    $("#certModal").classList.remove("open");
    if (lastFocused) lastFocused.focus();
  }

  function initModal() {
    $("#certModalClose").addEventListener("click", closeCertModal);
    $("#certModal").addEventListener("click", (e) => { if (e.target.id === "certModal") closeCertModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("#certModal").classList.contains("open")) closeCertModal(); });
  }

  /* ============================================================
     RENDER: EDUCATION TIMELINE + ACTIVITIES
     ============================================================ */
  function renderEducation() {
    $("#timeline").innerHTML = EDUCATION.map(e => `
      <div class="timeline-node reveal is-visible">
        <div class="node-card">
          <div class="node-top">
            <h3>${e.degree}</h3>
            <span class="node-duration">${e.duration}</span>
          </div>
          <div class="node-inst">${e.institution} — ${e.location}</div>
          <div class="node-detail">${e.detail}</div>
        </div>
      </div>
    `).join("");
  }

  function renderActivities() {
    $("#activityGrid").innerHTML = ACTIVITIES.map(a => `
      <div class="activity-card reveal is-visible">
        <h4>${a.title}</h4>
        <p>${a.detail}</p>
      </div>
    `).join("");
  }

  /* ============================================================
     RENDER: CONTACT INFO + FOOTER SOCIAL
     ============================================================ */
  function renderContactInfo() {
    const rows = [
      { icon: "envelope", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
      { icon: "phone", label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
      { icon: "pin", label: PROFILE.location, href: null },
      { icon: "github", label: "github.com/soumyajoshi9", href: PROFILE.github },
      { icon: "linkedin", label: "linkedin.com/in/soumya-joshi", href: PROFILE.linkedin },
    ];
    const iconSvg = {
      envelope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
      phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8.1 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.9 2.2z"/></svg>',
      pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      github: ICONS.code,
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z"/></svg>',
    };
    $("#contactInfoList").innerHTML = rows.map(r => `
      <div class="contact-info-item">
        <span class="ci-icon">${iconSvg[r.icon]}</span>
        ${r.href ? `<a href="${r.href}" target="${r.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">${r.label}</a>` : `<span>${r.label}</span>`}
      </div>
    `).join("");

    $("#footerSocial").innerHTML = `
      <a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${iconSvg.github}</a>
      <a href="${PROFILE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${iconSvg.linkedin}</a>
      <a href="mailto:${PROFILE.email}" aria-label="Email">${iconSvg.envelope}</a>
    `;
  }

  /* ============================================================
     NAVBAR: scroll state, active link, mobile menu
     ============================================================ */
  function initNavbar() {
    const nav = $("#navbar");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });

    const hamburger = $("#hamburger");
    const mobileNav = $("#mobileNav");
    hamburger.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
    $$("#mobileNav a").forEach(a => a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }));

    // active-section indicator
    const sections = $$("main section[id]");
    const navLinks = $$("[data-nav]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => obs.observe(s));
  }

  /* ============================================================
     THEME TOGGLE
     ============================================================ */
  function initTheme() {
    const root = document.documentElement;
    const toggle = $("#themeToggle");
    const stored = null; // no localStorage per artifact constraints; session-only in-memory default
    let theme = "dark";
    root.setAttribute("data-theme", theme);
    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
    });
  }

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  function initReveal() {
    const els = $$(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
  }

  /* ============================================================
     CONTACT FORM VALIDATION
     ============================================================ */
  function initContactForm() {
    const form = $("#contactForm");
    const fields = {
      "cf-name": v => v.trim().length >= 2 ? "" : "Please enter your name.",
      "cf-email": v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address.",
      "cf-subject": v => v.trim().length >= 3 ? "" : "Please add a short subject.",
      "cf-message": v => v.trim().length >= 10 ? "" : "Message should be at least 10 characters.",
    };

    function validateField(id) {
      const input = $("#" + id);
      const errorEl = $(`[data-error-for="${id}"]`);
      const msg = fields[id](input.value);
      input.classList.toggle("invalid", !!msg);
      errorEl.textContent = msg;
      return !msg;
    }

    Object.keys(fields).forEach(id => {
      $("#" + id).addEventListener("blur", () => validateField(id));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = Object.keys(fields).map(validateField);
      const allValid = results.every(Boolean);
      $("#formSuccess").classList.toggle("show", allValid);
      if (allValid) {
        // No backend/email service is connected. Structure kept ready
        // for e.g. Formspree / EmailJS / a serverless function.
        form.reset();
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    renderHeroRole();
    initTerminalTyping();
    renderAbout();
    renderSkills();
    initProjectFilters();
    renderProjects();
    initCertFilters();
    renderCerts();
    initModal();
    renderEducation();
    renderActivities();
    renderContactInfo();
    initNavbar();
    initTheme();
    initContactForm();
    initReveal();
  });
})();
