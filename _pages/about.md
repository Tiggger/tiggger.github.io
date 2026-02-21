---
permalink: /
title: "Knotted Active Biopolymers"
author_profile: false
show_title: false
redirect_from:
  - /about/
  - /about.html
---

<div class="scroll-sections">
  <section id="what-is-a-polymer" class="scroll-section">
    <h2>What Is a Polymer?</h2>
    <p>A polymer is a very long molecule made from many repeating building blocks called monomers.</p>
    <p>Replace this text with your own definition, examples, and diagrams.</p>
    <p>Testing writing a new section in</p>
    <p>Inline example: \( R_g \sim N^\nu \)</p>
    <div style="text-align: center;">
      <img src="{{ '/images/polymerFigure.png' | relative_url }}"
       alt="Polymer diagram"
       style="max-width: 80%; height: auto;">
    </div>

  </section>

  <section id="history-of-polymers" class="scroll-section">
    <h2>History of Polymers</h2>
    <p>Polymer physics developed from chemistry and statistical physics to explain materials like rubber, plastics, and biological filaments.</p>
    <p>Replace this with your own timeline and key milestones.</p>
    <p>Here I want to make reference to thermal physics topic as much as possible and the idea that thermodynamics means uncertainties and looking at statistical behaviour is how we deal with polymer physics. I want to paint the picture as to why polymer physics is interesting.</p>
  </section>

  <section id="knotted-polymers-my-contribution" class="scroll-section">
    <div class="triple-video">
  <video class="sync-video" controls playsinline preload="metadata">
    <source src="{{ '/files/unwrapped_particle_animation.mp4' | relative_url }}" type="video/mp4">
  </video>

  <video class="sync-video" controls playsinline preload="metadata">
    <source src="{{ '/files/am120KnotTightening.mp4' | relative_url }}" type="video/mp4">
  </video>

  <video class="sync-video" controls playsinline preload="metadata">
    <source src="{{ '/files/allSimsSnapshot.mp4' | relative_url }}" type="video/mp4">
  </video>
</div>

<script>
  (function () {
    const vids = Array.from(document.querySelectorAll('#knotted-polymers-my-contribution .sync-video'));
    if (vids.length < 2) return;

    let lock = false;
    const forOthers = (src, fn) => vids.forEach(v => { if (v !== src) fn(v); });

    vids.forEach(v => {
      v.addEventListener('play', async () => {
        if (lock) return;
        lock = true;
        forOthers(v, o => { o.currentTime = v.currentTime; o.play().catch(() => {}); });
        lock = false;
      });

      v.addEventListener('pause', () => {
        if (lock) return;
        lock = true;
        forOthers(v, o => o.pause());
        lock = false;
      });

      v.addEventListener('seeking', () => {
        if (lock) return;
        lock = true;
        forOthers(v, o => { o.currentTime = v.currentTime; });
        lock = false;
      });
    });
  })();
</script>

  </section>

  <section id="why-would-my-parents-care" class="scroll-section">
    <h2>Why Would My Parents Care?</h2>
    <p>This section can explain the real-world value of your work in plain language: health, materials, technology, and education.</p>
    <p>Replace this with impact-focused examples for non-specialists.</p>
  </section>

  <section id="about-a-physics-degree" class="scroll-section">
    <h2>How Can I Get Involved</h2>
    <p>Use this section to describe routes into physics: courses, skills, projects, and opportunities.</p>
    <p>Replace this with your advice for students considering a physics degree.</p>
  </section>

  <section id="untitled-section" class="scroll-section">
    <h2>''</h2>
    <p>This is a placeholder section. Rename and update as needed.</p>
  </section>
</div>
