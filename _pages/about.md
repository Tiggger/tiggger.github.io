---
permalink: /
title: "Knotted Active Biopolymers"
description: "Explore polymer physics through DNA knotting, entropy, and activity-driven unknotting simulations."
author_profile: false
show_title: false
redirect_from:
  - /about/
  - /about.html
---

<section class="intro-section">
  <h2>Welcome To Polymer Physics!</h2>

<video class="sync-video" muted autoplay loop playsinline preload="auto" style="max-width: 50%; height: auto; display: block; margin: 1rem auto 0;">
  <source src="{{ '/files/publicSummary_a0.mp4' | relative_url }}" type="video/mp4">
</video>

<p>If you ask most sixth formers what they want to do with physics, you'll almost always get the same two answers: astrophysics or particle physics. These are both incredible. But here is something that you may not have realised: they employ a tiny fraction of the physicists out there.</p>

<p>So where is everyone else? A lot of them are working on <strong>soft matter</strong> — the physics of small, squishy, flexible and complex materials that make up most of the world around you. At the end of the day, we are squishy, and most of the things we interact with are. It's important that we understand this!</p>

<p>What makes soft matter different is that you get to <em>build things</em>. Astrophysics asks "what's out there?" Soft matter asks "what can <em>we</em> make?", and then you go and make it. Physicists in this field work across healthcare, sustainable materials, and next-generation technology, often moving between lab bench and theory in the same week.</p>

<p>If you're curious about physics but aren't sure you want to spend your career looking at things you can never touch, soft matter might be exactly what you're looking for. Have a look at what I've been getting up to in my masters project to get an idea of what we get up to.</p>

  </section>

<div class="scroll-sections">
  <section id="what-is-a-polymer" class="scroll-section">
    <h2>What Is a Polymer? A Physicist's View</h2>
    <p>A polymer is a very long molecule built from many identical smaller units, called monomers, joined together end-to-end. You might recognise this from your chemistry classes, and you're right! But where a chemist might focus on how to make them, or their chemical structure, a physicist zooms out to ask: <strong>what physical properties emerge because of their long, bendy structure?</strong> The reason we even care about polymers is that we see them everywhere in nature. For example, DNA is a polymer, and so are proteins!</p>

    <p>To try and better understand polymers, physicists use a beautifully simple model: the <strong>bead-spring chain</strong>.</p>

    <div style="text-align: center;">
        <img src="{{ '/images/polymerFigure.png' | relative_url }}"
             alt="A diagram showing a polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
    </div>

    <p>In this model, each <strong>bead represents a monomer</strong>. In real life monomers are actually made of several atoms, but as physicists, we don't particularly care about these. We only care for the monomer's position. The <strong>spring represents the chemical bond</strong> connecting one monomer to the next. This spring isn't perfectly rigid, it has some flexibility which allows the chain to bend and wiggle. This is a great starting point, but to understand something like DNA we need to think about what a polymer looks like when in a liquid bath. This is because inside of the cell, where DNA lives, is filled with fluid.</p>

    <h3>The Secret Ingredient: Constant Jiggling</h3>
    <p>Polymers in a liquid are not static. They are constantly being kicked around by the thermal motion of the surrounding liquid molecules.</p>
    <p>This constant and random jiggling means a long, flexible polymer in liquid will almost never stretches out. Instead, it curls up into a chaotic, ever-changing ball known as a <strong>random coil</strong>. This coiled-up state is the polymer's natural, most probable state.</p>

    <div class="key-idea" style="background-color: #e7f3ff; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
    <h4 style="margin-top: 0;">💡 The Key Insight: It's About Probability, Not Forces</h4>
    <p>You might have met the idea of <strong>entropy</strong> in thermal physics or in chemistry. It can be quite an intimidating concept, but in its simplest form it is often described as a measuring "disorder" or how many ways you can arrange something to have the same outcome. The more possible arrangements of doing the same thing, the higher the entropy.</p>
    
    <p>Now think about our polymer chain:</p>
    <ul>
        <li><strong>Stretched out:</strong> There's basically only <em>one</em> way for the chain to be completely straight.</li>
        <div style="text-align: center;">
        <img src="{{ '/images/polymerStraight.png' | relative_url }}"
             alt="A diagram showing a polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
        </div>
        <li><strong>Coiled up:</strong> There are billions and billions of different ways to curl and twist the chain into a messy ball. Here are just three to help you think about that.</li>
        <div class="triple-photo">
        <img src="{{ '/images/polymerCoiled1.png' | relative_url }}"
             alt="A diagram showing a coiled polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
        <img src="{{ '/images/polymerCoiled2.png' | relative_url }}"
             alt="A diagram showing a coiled polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
        <img src="{{ '/images/polymerCoiled3.png' | relative_url }}"
             alt="A diagram showing a coiled polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
        </div>
    </ul>
    
    <p>Systems in nature tend to evolve toward states with <strong>higher entropy</strong>, so the polymer naturally spends almost all its time coiled up. We call this coiled state a <strong>random coil</strong>, and it's the polymer's most natural state. The constant jiggling from thermal energy ensures it keeps exploring all these different coiled arrangements.</p>
    
    <p style="margin-bottom: 0;">So when you stretch a polymer, you're not just pulling against bonds but you're forcing it into a much <strong>less probable</strong> state with lower entropy. The polymer "wants" to return to its high-entropy, coiled mess. That desire is what creates the elastic force!</p>
</div>

    <h3>So, What About That Spring?</h3>
    <p>This brings us back to the springs in our model. If you try to stretch a polymer out of its favourite random coil shape, you are fighting against entropy. The chain's constant jiggling will fight to return to its messy, coiled state. This creates a restoring force.</p>
    <p>Remarkably, for small stretches, this force follows the same mathematical rule as a normal spring: <strong>\(F = kx\)</strong> (Hooke's Law). This is why the model works so well! But always remember: a normal metal spring's force comes from deforming atomic bonds (<strong>energetic</strong>). A polymer's elasticity comes from a fight against the natural tendency towards disorder (<strong>entropic</strong>).</p>

    </section>

  <section id="history-of-polymers" class="scroll-section">
    <h2>A Very Short History</h2>

    <p>Most of physics has ancient roots. Newton's mechanics is 350 years old. Thermodynamics was done and dusted by the 1850s. Even quantum mechanics is now a century old. Polymer physics is little different, it's a genuinely young field, and the many of the people who built are still living today.</p>

    <p>The starting point was pretty simple: nobody could explain rubber. It stretches enormously and springs back perfectly, but when physicists tried to apply their usual tools, nothing worked. The answer, it turned out, had nothing to do with forces between atoms. It came from the idea of <strong>entropy</strong> that we talked about before. In the 1930s and 40s, <a href="https://en.wikipedia.org/wiki/Werner_Kuhn_(chemist)" target="_blank" rel="noopener">Werner Kuhn</a> and <a href="https://en.wikipedia.org/wiki/Paul_Flory" target="_blank" rel="noopener">Paul Flory</a> realised that polymers behave statistically, like a gas. Stretch it, and you're not pulling atoms apart instead you're forcing a tangled chain into an unlikely, ordered shape. It snaps back because disorder is always more probable than order. Flory won the Nobel Prize for this work in 1974.</p>

    <p>Another physicist <a href="https://en.wikipedia.org/wiki/Pierre-Gilles_de_Gennes" target="_blank" rel="noopener">Pierre-Gilles de Gennes</a> went further, showing in the 1970s that the mathematics of polymer motion connected to some of the coolest ideas in theoretical physics. He connected polymers to the same tools used to describe changes of states in magnets. He won the Nobel Prize in Physics in 1991. His students are professors now. Their students are the researchers publishing papers today.</p>

    <p>A more recent and living researcher is <a href="https://staff.fnwi.uva.nl/s.jabbarifarouji/" target="_blank" rel="noopener">Dr. Sara Jabbari-Farouji</a>, an Associate Professor at the University of Amsterdam. Her group works on everything from the mechanics of polymers to active matter (matter that moves!). Ultimately she is using polymer physics to understand how living systems <em>move</em> through complex environments. Her research is particularly related to my masters project as she often looks at <strong>active polymers</strong> which you'll hear more about very shortly!</p>


</section>

  <section id="knotted-polymers-my-contribution" class="scroll-section">
    <h2>Knotted Polymers: My Contribution</h2>

    <p>So what have I been up to in my master's project? That's a very good question. I've been working on these polymers, but I'm interested in how they go from being in knotted up to being unknotted. This might sound a bit weird, but there are good reasons to study this phenomenon. </p>

    <p>Remember DNA from biology, and how it is formed of base pairs (repeating units)? Well that is the very definition of a polymer. Some very clever people have measured the distance between base pairs, and have found it to be ~0.34nm. However, in the human genome there are ~6.27 Giga (billion!) base pairs. That means if we were to fully stretch out our DNA, it would be just over 2m long!</p>

    <div style="text-align: center;">
        <img src="{{ '/images/DNA.png' | relative_url }}"
             alt="A diagram showing a DNA double helix structure, base pairs and the typical distance of 0.34nm between adjacent base pairs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0; position: center;">
    </div>

    <p>You might see the issue with that if you think about how small a cell is, and how much smaller the cell's nucleus will be. In fact, the diameter of the nucleus in a human cell is 5-10μm. This means we have a problem, how do we fit over 2m of DNA into such a small space?</p>

    <p>The answer to this is something called chromatin. Chromatin packs DNA into much tighter structures by wrapping it around proteins (histones) that are shaped a little bit like biscuits. These biscuit structures then coil up tighter to form something called chromatin. The problem is that sometimes along the way in this packing process chromatin can get knotted, and that's a problem. It can prevent genes from being accessed on the DNA!</p>
  
    <div style="text-align: center;">
        <img src="{{ '/images/chromatin.png' | relative_url }}"
             alt="A diagram showing a DNA double helix structure, base pairs and the typical distance of 0.34nm between adjacent base pairs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0; position: center;">
    </div>

    <p>Luckily, our cells have ways around this. Molecular motors, tiny machines made of proteins that live inside the nucleus, physically grab the DNA and pull, push, or twist it. This turns DNA into what physicists call an <strong>active polymer</strong>. This is a chain that doesn't just drift randomly, but is constantly being moved by forces. The stronger those forces, the more "active" the polymer. Generally, physicists call this <strong>active matter</strong>, which just describes any system that consumes energy to move, unlike a passive system which would just correspond to thermal energy.</p>

    <!-- <p>I feel that in here I should perhaps tell them what a active polymer looks like for my system?</p> -->

    <p>This is exactly the kind of system Dr. Sara Jabbari-Farouji studies. But here's the problem: we don't yet have a good understanding of how activity affects knotting. Does being driven by molecular motors help DNA unknot faster? Does it make things worse? How does it depend on the strength of the activity? These are open questions and developing simulations to answer them is what my research is about. Check out some of my simulations below! These were performed using a bead-spring model.</p>

    <div class="activity-arrow" aria-label="increasing activity from left to right">
      <span>Increasing Activity</span>
    </div>

    <div class="triple-video">
      <video class="sync-video" muted playsinline preload="auto">
        <source src="{{ '/files/publicSummary_a0.mp4' | relative_url }}" type="video/mp4">
      </video>

      <video class="sync-video" muted playsinline preload="auto">
        <source src="{{ '/files/publicSummary_a60.mp4' | relative_url }}" type="video/mp4">
      </video>

      <video class="sync-video" muted playsinline preload="auto">
        <source src="{{ '/files/publicSummary_a120.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>

    <div class="simulate-wrap">
      <button type="button" id="simulate-videos" class="simulate-btn">Simulate!</button>
    </div>

    <script>
      (function () {
        const vids = Array.from(document.querySelectorAll('#knotted-polymers-my-contribution .sync-video'));
        const btn = document.getElementById('simulate-videos');
        if (!btn || vids.length === 0) return;

        vids.forEach(v => {
          v.controls = false;
          v.removeAttribute('controls');
          const setPreviewFrame = function () {
            if (!Number.isFinite(v.duration) || v.duration <= 0.06) return;
            try {
              v.currentTime = 0.05;
            } catch (e) {}
          };
          if (v.readyState >= 1) {
            setPreviewFrame();
          } else {
            v.addEventListener('loadedmetadata', setPreviewFrame, { once: true });
          }
        });

        btn.addEventListener('click', function () {
          vids.forEach(v => {
            v.currentTime = 0;
          });
          vids.forEach(v => {
            v.play().catch(() => {});
          });
        });

      })();
    </script>

    <p>We have 3 knots, which are identical. The leftmost simulation is for a polymer with no forces acting on it. The middle has moderate forces, and the right has very strong forces acting on it. Notice how with increasing activity, the knotted polymer moves more! Look at how quickly the simulation on the right becomes a straight line versus the middle, and the one on the left doesn't get there within the simulation time! This is because if we include activity on our polymer, it forces it into configurations that would be unlikely under thermal motion alone.</p>

    <p>I've been able to characterise the typical times for a polymer to go from being knotted to unknotted with varying amounts of activity. We see that generally, activity speeds up unknotting time.</p>

    <div style="text-align: center;">
        <img src="{{ '/images/results.png' | relative_url }}"
             alt="A diagram showing a DNA double helix structure, base pairs and the typical distance of 0.34nm between adjacent base pairs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0; position: center;">
    </div>

    <p>Each point represents an average over many simulations, and the error bars show statistical uncertainty. A typical day of work for me looks like: </p> 

    <ul>
      <li>Programming simulations</li>
      <li>Statistical analysis using Python</li>
      <li>Data Management</li>
      <li>Interpreting Data</li>
      <li>Speaking to other scientists</li>
    </ul>
    
    <p>This has been a great stepping stone for my development as a polymer physicist, and a brilliant way for me to exercise all of the skills that I have learned during my physics degree!</p>
  </section>

  <section id="why-would-my-parents-care" class="scroll-section">
    <h2>Why Would My Parents Care?</h2>
    <p>When doing science, I always think it's very important to think about the bigger picture. A good way to think about this is if I went home to my parents, how would I explain what I do and why it is useful? Sometimes when you're deep in the physics, it can be easy to lose sight of why we care. But the physics of polymers is larger than work done at university, in fact it's the hidden science behind a huge number of things your parents (and you!) rely on every single day.</p>

    <p>My research looks at how forces on the polymer affect its unknotting time, inspired by DNA inside cells. DNA is constantly pushed and pulled by molecular machines, which can cause it to knot or unknot. That matters because knots can interfere with how genes are accessed. By simulating these processes, I can measure how physical forces change how quickly knots disappear. That knowledge helps scientists:
    <ul>
      <li>Understand how cells manage and repair DNA <a href="https://www.mdpi.com/2673-8856/4/2/10" target="_blank" rel="noopener">[1]</a></li>
      <li>Predict how tangling changes with different models and systems <a href="https://pubs.rsc.org/en/content/articlepdf/2018/sm/c7sm02195j" target="_blank" rel="noopener">[2]</a></li>
      <li>Inform models of how chromosomes organise themselves and the dynamics of how DNA gets transcribed into proteins <a href="https://pubs.acs.org/doi/pdf/10.1021/acs.macromol.5c01381?ref=article_openPDF" target="_blank" rel="noopener">[3]</a></li>

      
    </ul>
    </p>

    <h3>🌍 The Bigger Picture</h3>
    <p>Polymer physics also has diverse applications outside of DNA!</p>
    <ul>
        <li><strong>🩺 Clever Medical Materials:</strong> Some modern medical dressings are made from polymers engineered to maintain the perfect level of moisture, sometimes even infused with biomolecules to actively help skin regenerate and heal burns faster
        <a href="https://www.sciencedirect.com/org/science/article/abs/pii/S1525779725000832" target="_blank" rel="noopener">[4]</a>.
        <a href="https://pubmed.ncbi.nlm.nih.gov/40588411/" target="_blank" rel="noopener">[5]</a>.
        Polymers are also used in long lasting joint replacements, so understanding its wear and tear at the molecular level helps physicists design joints that can last for decades 
        <a href="https://www.canwellmed.com/the-wear-resistance-of-ultra-high-molecular-weight-polyethylene-implants/" target="_blank" rel="noopener">[6]</a>
        <a href="https://www.sciencedirect.com/science/article/pii/S0883540325013038" target="_blank" rel="noopener">[7]</a>
        .
        Or have you ever seen the glucose monitor patches for diabetes? They're often made of flexible, breathable polymer films that can stick to skin comfortably for days
        <a href="https://www.todaysmedicaldevelopments.com/article/new-medical-polymers-for-smart-sustainable-healthcare-devices/" target="_blank" rel="noopener">[8]</a>.
        </li>

        <li>
        <strong>📱 New Technologies:</strong> Have you seen those fancy folding screen smartphones? That's down to polymers which are transparent and flexible <a href="https://www.sciencedirect.com/science/article/pii/S2666542523000188" target="_blank" rel="noopener">[9]</a>. There are also new types of batteries being developed which make use of polymers for power delivery, which are safer and more powerful than traditional liquid-based batteries <a href="https://www.nature.com/articles/s41586-025-09565-z" target="_blank" rel="noopener">[10]</a>.   
        </li>

        <li>
        <strong>♻️ Sustainability and a Greener Future:</strong> Plastic is really hard to recycle, so scientists are trying to engineer new materials which are better. These are typically polymer materials that are high-performance during use, but can be easily broken down at the end of their life. This includes biodegradable circuit boards made from natural fibres that dissolve in hot water, allowing the valuable components to be recovered and reused <a href="https://eprints.gla.ac.uk/368649/" target="_blank" rel="noopener">[11]</a>. Researchers are also engineering high-performance biobased polymers from renewable sources. These can be used for everything from gears in machines to protective textiles, reducing our dependence on fossil fuels <a href="https://www.plasticsengineering.org/2026/02/research-breakthrough-in-biobased-engineered-plastics-010582/amp/" target="_blank" rel="noopener">[12]</a>
        </li>
    </ul>
    
    <div style="background-color: #e7f3ff; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
        <h4 style="margin-top: 0;">💡 The Takeaway</h4>
        <p>So, when your parents ask why you're learning about bead-spring models and random coils, you can tell them that you're learning the fundamental physics that helps people heal, keeps them connected, and might just help save the planet. That's something worth caring about!</p>
    </div>
</section>

  <section id="how-to-get-involved" class="scroll-section">
    <h2>How Can I Get Involved?</h2>
    
    <p>Hopefully by now you're thinking that this polymer physics stuff is pretty cool. So what's next? How do you go from reading this website to actually <em>doing</em> polymer physics? Here's a roadmap.</p>

    <h3>🎓 Step 1: Choose the Right Degree</h3>
    <p>You don't usually find a degree called simply "Polymer Physics". Instead, polymer physics is typically a specialist topic you'll encounter within broader degrees. Here are the most common routes:</p>
    
    <table style="width:100%; border-collapse: collapse; margin: 1.5rem 0;">
        <thead>
            <tr style="background-color: #e7f3ff; border-bottom: 2px solid #2c5282;">
                <th style="padding: 0.75rem; text-align: left;">Degree Type</th>
                <th style="padding: 0.75rem; text-align: left;">What You'll Study</th>
                <th style="padding: 0.75rem; text-align: left;">Example Course</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 0.75rem;"><strong>Physics BSc or MPhys (Integrated Masters)</strong></td>
                <td style="padding: 0.75rem;">Core physics with optional modules in <strong>soft matter</strong> including <strong>polymers</strong></td>
                <td style="padding: 0.75rem;"> <a href="https://study.ed.ac.uk/programmes/undergraduate/33-physics" target="_blank" rel="noopener">Edinburgh </a>, <a href="https://www.physics.ox.ac.uk/study/undergraduates/ba-physics" target="_blank" rel="noopener">Oxford </a>, <a href="https://www.undergraduate.study.cam.ac.uk/courses/natural-sciences-ba-hons-msci" target="_blank" rel="noopener">Cambridge </a> have particularly strong biophysics departments.
                </td>
            </tr>

            <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 0.75rem;"><strong>Chemistry BSc/MChem</strong></td>
            <td style="padding: 0.75rem;">Core chemistry with dedicated <strong>polymer</strong> or <strong>materials chemistry</strong> modules covering synthesis, characterisation, and structure-property relationships.</td>
            <td style="padding: 0.75rem;">
                <a href="https://www.manchester.ac.uk/study/undergraduate/courses/2026/01449/mchem-chemistry/" target="_blank" rel="noopener">Manchester</a>, 
                <a href="https://www.liverpool.ac.uk/courses/chemistry-mchem-hons" target="_blank" rel="noopener">Liverpool</a>, 
                <a href="https://warwick.ac.uk/study/undergraduate/courses/mchem-chemistry/" target="_blank" rel="noopener">Warwick</a> have strong polymer options.
            </td>
            </tr>

            <!-- <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 0.75rem;"><strong>Materials Science with Polymers</strong></td>
                <td style="padding: 0.75rem;">Dedicated polymer modules throughout, with lab work focused on polymer processing and characterisation</td>
                <td style="padding: 0.75rem;">University of Manchester MEng Materials Science and Engineering with Polymers (AAA entry, 4 years) [citation:1][citation:8]</td>
            </tr>
            <tr>
                <td style="padding: 0.75rem;"><strong>Chemistry with Polymer Specialism</strong></td>
                <td style="padding: 0.75rem;">Synthesis-focused, but with increasing physics content in later years</td>
                <td style="padding: 0.75rem;">Various, including joint honours options</td>
            </tr> -->
        </tbody>
    </table>

    <div style="background-color: #f9f9f9; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
        <h4 style="margin-top: 0;">📊 Typical Entry Requirements (UK)</h4>
        <ul>
            <li><strong>A-Levels:</strong> Typically A*A*A–ABB, including Physics and Mathematics. Some courses may also want Chemistry.</li>
            <li><strong>Scottish Highers/Advanced Highers:</strong> AA/AAB including Physics and Maths [citation:4].</li>
            <li><strong>IB:</strong> 36–39 points with Higher Level Physics and Mathematics.</li>
            <li><strong>Essential skills:</strong> Admissions tutors ultimately look for <strong>motivation</strong>, mathematical ability, reasoning and communication.</li>
        </ul>
        <p>Many universities also offer contextual offers for students from underrepresented backgrounds or certain postcodes, so always check individual course pages.</p>
    </div>

    <h3>🔬 Step 2: Get Hands-On Experience</h3>
    <p>University isn't just about lectures. The really exciting stuff happens when you start doing research. Here's how you can get involved:</p>

    <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
        <div style="flex: 1; min-width: 250px; background-color: white; padding: 1.25rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0; color: #2c5282;">🧪 Undergraduate Research Internships</h4>
            <p>Many universities actively recruit undergraduates to join research labs. This can be a great way to build some real experience researching, and will really strengthen your CV. For example:</p>
            <ul>
                <li><strong><a href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" target="_blank" rel="noopener">Mitacs Globalink Internship:</a></strong> An internship scheme that will take you to Canada, where you can select from a large pool of labs on the exact problems you may want to help solve over 12 weeks. No prior experience is required, just curiosity and motivation.</li>

                <li><strong><a href="https://mattertolife.maxplanckschools.org/uro-research-internship" target="_blank" rel="noopener">Max Planck Matter To Life Internship:</a></strong> An internship scheme that will take you to Germany, where again you can select from a large pool of labs which are researching problems that interest you. This one lasts for 10 weeks. Again no prior experience is required, but good grades will help you out!</li>

                <li><strong>Asking around:</strong> I often live by the motto – don't ask don't get. There are lots of exciting opportunities around us, and when you go to university, it goes a long way to speak to people including your lecturers and tutors. You never know what opportunities you could open by simply showing enthusiasm and getting to know people in the field!</li>
            </ul>
        </div>
        
        <!-- <div style="flex: 1; min-width: 250px; background-color: white; padding: 1.25rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0; color: #2c5282;">💼 Industry Placements and Scholarships</h4>
            <p>University research isn't the only path. Programs like the <strong>Michelin Science Scholars Program</strong> connect undergraduates directly with industry. Students receive a $2,000 stipend, work on real-world problems (like sustainable alternatives to polyethylene), and tour industrial facilities. As one scholar put it: "There's always this misconception that academic research is completely separate from industry research. Michelin has shown me it's all one science." [citation:9]</p>
        </div> -->
    </div>

    <div style="background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
        <h4 style="margin-top: 0;">✨ The Takeaway from Someone Who's Done It</h4>
        <p>
        <a href="https://www.linkedin.com/in/harrison-squires-4331043a6/" target="_blank" rel="noopener">Harrison Squires</a>, an MPhys student at the University of Edinburgh, now pursuing a PhD involving polymers, offers this advice to students considering this path:</p>
        <blockquote style="font-style: italic; margin: 1rem 0; padding-left: 1rem; border-left: 4px solid #2c5282;">
            "Take every opportunity to learn new things – there is so much that you don't know that you don't know."
        </blockquote>
        <p style="margin-bottom: 0;">He also notes that getting "experience outside of the degree was essential" for his "exposure to new and exciting areas of research, that weren't immediately obvious" when he began studying physics at university.</p>
    </div>

    The best preparation is curiosity. Keep asking "why" about the materials around you, and you're already thinking like a physicist.

</section>
</div>
