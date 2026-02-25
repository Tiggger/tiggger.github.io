---
permalink: /
title: "Knotted Active Biopolymers"
author_profile: false
show_title: false
redirect_from:
  - /about/
  - /about.html
---

<section class="intro-section">
  <h2>Welcome To Polymer Physics!</h2>
  <!-- <p>Here I will say some words on the fact that there is more to physics than astrophysics and particle physics and why its important to consider these other options.</p>
  <p>I think havin a really nice high quality video of the simulation here would be really cool. Play it high quality, high frame rate, large dimensions.</p> -->

  <video class="sync-video" muted autoplay loop playsinline preload="auto" style="max-width: 50%; height: auto; display: block; margin: 1rem auto 0;">
        <source src="{{ '/files/publicSummary_a0.mp4' | relative_url }}" type="video/mp4">
  </video>

  <p><strong>Theres more to physics than stars and particles</strong>. Ask any sixth former what they want to do with physics, and the answers are almost always "astrophysics" or "particle physics." They're fascinating fields but they employ a tiny fraction of professional physicists.</p>
  
  <p><strong>Soft matter physics</strong> — the study of polymers, colloids, and gels offers something different. They offer chance to <em>design and build</em> the materials of the future.</p>
  
  <h3>Everyday Physics</h3>
  <ul>
      <li><strong>Foldable phone screens?</strong> Polymer physics </li>
      <li><strong>Continuous glucose monitors?</strong> Flexible polymer electronics </li>
      <li><strong>Why your yogurt lid won't recycle?</strong> Mixing of polymers </li>
  </ul>
  
  <h3>Where Soft Matter Physicists Work</h3>
  <ul>
      <li><strong>Healthcare:</strong> Drug delivery, wound dressings, biodegradable implants </li>
      <li><strong>Sustainability:</strong> Bioplastics, recyclable packaging, circular economy </li>
      <li><strong>Technology:</strong> Batteries, flexible displays, 5G/6G materials </li>
  </ul>
  
  <p>Astrophysics asks "what's out there?" Soft matter asks "what can <em>we</em> make?" Both are deep, both are challenging, but only one lets you hold the answer in your hands.</p>

  </section>

<div class="scroll-sections">
  <section id="what-is-a-polymer" class="scroll-section">
    <h2>What Is a Polymer? A Physicist's View</h2>
    <p>A polymer is a very long molecule built from many identical smaller units, called monomers, joined together end-to-end. You might recognise this from your chemistry classes, and you're right! But where a chemist might focus on how to make them or their chemical structure, a physicist zooms out to ask: <strong>what remarkable physical properties emerge simply because they are so long?</strong></p>

    <p>To answer this, physicists use a beautifully simple model: the <strong>bead-spring chain</strong>.</p>

    <div style="text-align: center;">
        <img src="{{ '/images/polymerFigure.png' | relative_url }}"
             alt="A diagram showing a polymer chain modelled as a series of beads connected by springs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0;">
    </div>

    <p>In this model, each <strong>bead represents an entire monomer unit</strong>. We don't care about the individual atoms inside it, just the monomer's position. The <strong>spring represents the chemical bond</strong> connecting one monomer to the next. This spring isn't perfectly rigid; it has some flexibility, allowing the chain to bend and wiggle. This is a good starting point, but it's only half the story.</p>

    <h3>The Secret Ingredient: Constant Jiggling</h3>
    <p>The real magic happens when we remember that polymers (especially in a liquid) are not static. They are constantly being kicked around by the thermal motion of the surrounding molecules. Imagine our bead-spring chain placed in a turbulent storm – it would be tossed and turned into a million different shapes.</p>
    <p>This constant, random jiggling means a long, flexible polymer in solution almost never stretches out. Instead, it curls up into a chaotic, ever-changing ball known as a <strong>random coil</strong>. This coiled-up state is the polymer's natural, most probable state. It's a core idea in physics and explains a huge amount of polymer behaviour.</p>

    <div class="key-idea" style="background-color: #e7f3ff; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
    <h4 style="margin-top: 0;">💡 The Key Insight: It's About Probability, Not Forces</h4>
    <p>You might have met the idea of <strong>entropy</strong> in thermal physics or in chemistry. Its quite a scary concept, but in its simplest form it is often described as a measuring "disorder" or how many ways you can arrange something. The more possible arrangements, the higher the entropy.</p>
    
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
    
    <p>It is fact that nature always evolves towards states with <strong>higher entropy</strong> (more probable arrangements), the polymer naturally spends almost all its time coiled up. We can call this coiled state is called a <strong>random coil</strong>, and it's the polymer's default, most natural state. The constant jiggling from thermal energy ensures it keeps exploring all these different coiled arrangements.</p>
    
    <p style="margin-bottom: 0;">So when you stretch a polymer, you're not just pulling against bonds but you're forcing it into a much <strong>less probable</strong> state with lower entropy. The polymer "wants" to return to its high-entropy, coiled mess. That desire is what creates the elastic force!</p>
</div>

    <h3>So, What About That Spring?</h3>
    <p>This brings us back to the springs in our model. If you try to stretch a polymer out of its favourite random coil shape, you are fighting against entropy. The chains constant jiggling will fight to return to its messy, coiled state. This creates a restoring force.</p>
    <p>Remarkably, for small stretches, this force follows the same mathematical rule as a normal spring: <strong>\(F = kx\)</strong> (Hooke's Law). This is why the model works so well! But always remember: a normal metal spring's force comes from bending atomic bonds (<strong>energetic</strong>). A polymer's elasticity comes from a fight against the natural tendency towards disorder (<strong>entropic</strong>).</p>

</section>

  <section id="history-of-polymers" class="scroll-section">
    <h2>A Very Short History: Why Physics Needed a New Approach</h2>
    
    <p>In the 19th century, physicists were very successful at describing the motion of planets and the behaviour of simple gases. But when they turned their attention to strange, stretchy materials like natural rubber, their traditional methods failed. Rubber didn't obey simple, predictable laws. It needed a new way of thinking.</p>
    
    <h3>The Chemistry View: Long Chains</h3>

    <p>
    The first breakthrough came from chemistry. For a long time, scientists thought materials like rubber were just random "goo" which were made from small molecules that stick together. Then, in 1920, the German chemist Hermann Staudinger proposed an idea that these were actually <strong>enormous molecules</strong> with small repeating units joined by chemical bonds to form long chains, or polymers. It took over a decade for his idea to be accepted. He was finally awarded the Nobel Prize in Chemistry in 1953 for this work
    <a href="https://en.wikipedia.org/wiki/Hermann_Staudinger" target="_blank" rel="noopener">[1]</a>.
    </p>

    <div style="display: flex; flex-direction: column; align-items: center; width: 100%; margin: 1.25rem 0;">
    <div style="max-width: 25%;">
        <img src="{{ '/images/Hermann_Staudinger.jpg' | relative_url }}"
             alt="A portrait photograph of the chemist Hermann Staudinger."
             style="width: 100%; height: auto; display: block;">
        <p style="margin-top: 0.5rem; font-style: italic; color: #555; font-size: 0.9rem; text-align: center;">
            <strong>Hermann Staudinger</strong> (1881–1965) in 1953, the same year he won the Nobel Prize in Chemistry for proposing the existence of macromolecules.
        </p>
    </div>
    </div>

    
    <div class="key-idea" style="background-color: #e7f3ff; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
        <h4 style="margin-top: 0;">🔬 Chemistry to Physics</h4>
        <p>Knowing chemical structure was one thing, but explaining the behaviour of rubber and why it <em>stretched and sprang back</em> was a different problem. This is where physicists got involved, and it's where your knowledge of thermal physics will be useful.</p>
        <p>A normal solid (like a metal spring) returns to its original shape because stretching it pulls atoms apart. This means you're fighting against the electrostatic forces holding the material together—the same kind of forces you meet in metallic bonding or the Coulomb force between charged particles.</p>

        <p>But rubber? When you stretch it, something completely different happens. Remarkably, the <strong>internal energy</strong> of the rubber barely changes at all. So if you're not storing energy by pulling atoms apart... <strong>what provides the restoring force?</strong></p>
    </div>
    
    <h3>The Physics View: Enter Statistics and Entropy</h3>
    <p>In the 1930s and 40s, scientists like Werner Kuhn
    <a href="https://en.wikipedia.org/wiki/Werner_Kuhn_(chemist)" target="_blank" rel="noopener">[2]</a>   
    and Paul Flory
    <a href="https://en.wikipedia.org/wiki/Paul_Flory" target="_blank" rel="noopener">[3]</a>
     realised they had to treat polymers using <strong>statistical mechanics</strong>. This is the same tool used we describe gases, i.e. using statistics to <em>describe the behaviour of a system</em>, rather than individual particles. Why? Because a polymer suspended in some liquid or a piece of rubber is not a static object. Rather it is a long, flexible chain made of many monomers that are constantly being <strong>jiggled by thermal energy</strong> (<em>sound familiar from the Kinetic Theory of Gases?</em>).</p>

     <div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; margin: 2rem 0;">
    
    <!-- Left image and caption -->
    <div style="flex: 1; min-width: 200px; max-width: 300px;">
        <div style="width: 100%; height: 400px; overflow: hidden; border-radius: 4px;">
            <img src="{{ '/images/Werner_Kuhn.jpg' | relative_url }}"
                 alt="A portrait photograph of the chemist Werner Kuhn."
                 style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
        <p style="margin-top: 0.5rem; font-style: italic; color: #555; font-size: 0.9rem; text-align: center;">
            <strong>Werner Kuhn</strong> (1899–1963), a pioneer of polymer physics who first applied statistical mechanics to polymer chains.
        </p>
    </div>
    
    <!-- Right image and caption -->
    <div style="flex: 1; min-width: 200px; max-width: 300px;">
        <div style="width: 100%; height: 400px; overflow: hidden; border-radius: 4px;">
            <img src="{{ '/images/Paul_Flory.jpg' | relative_url }}"
                 alt="A portrait photograph of the chemist Paul Flory."
                 style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
        <p style="margin-top: 0.5rem; font-style: italic; color: #555; font-size: 0.9rem; text-align: center;">
            <strong>Paul Flory</strong> (1910–1985) who won the Nobel Prize in Chemistry in 1974 for his fundamental work in polymer physics.
        </p>
    </div>
  
</div>
    
    <p>Here's the link to your A-Level thermal physics:</p>
    <ul>
        <li><strong>In a gas:</strong> You have billions of molecules zooming around randomly. Its impossible and unnecessary need to track every molecule. Instead, you use statistics to describe the <em>average</em> behaviour. The pressure on the walls of a container isn't caused by any single molecule, but by the <strong>average effect</strong> of many collisions. This is why we use quantities like \(c_\mathrm{rms}\), as they describe the <em>typical</em> behaviour of the whole system.</li>
        <li><strong>In a polymer:</strong> A single polymer chain is constantly being jiggled by thermal energy, exploring thousands of different shapes every second. Again, its impossible and unnecessary to track every shape. Instead, you use statistics to describe its <em>average</em> shape: the random coil. The elastic force when you stretch it doesn't come from any single configuration, but from the <strong>average tendency</strong> of the chain to return to its most probable, coiled-up state.</li>
    </ul>
    
    <p>This was a revolutionary shift. Paul Flory, who won the Nobel Prize in Chemistry in 1974, essentially founded the field of polymer physics by showing that the behaviour of polymers could be predicted using statistical methods <a href="https://en.wikipedia.org/wiki/Paul_Flory" target="_blank" rel="noopener">[3]</a>. He introduced concepts like the "random coil" we met earlier, showing that the chain's natural state is a messy ball, simply because that's the statistically most probable arrangement.</p>
    
    <h3>Thermodynamics & Uncertainty</h3>
    <p>So why is polymer physics so cool? Because it shows that <strong>uncertainty and randomness aren't weaknesses</strong> of our measurement but they're the <strong>origin of a material's properties!</strong></p>
    
    <p>In the 1970s, the French physicist Pierre-Gilles de Gennes, who won the Nobel Prize in Physics in 1991
    <a href="https://en.wikipedia.org/wiki/Pierre-Gilles_de_Gennes" target="_blank" rel="noopener">[4]</a>, took this even further. He showed that the mathematics describing how a polymer chain moves (its "reptation": slithering like a snake through a tangle of other chains) was the same mathematics used to describe phase transitions in magnets
    <a href="https://www.nature.com/articles/nmat2155" target="_blank" rel="noopener">[5]</a>
    . He helped connect polymer physics to the rest of physics, showing it was a deep and fundamental subject.</p>

    <div style="display: flex; flex-direction: column; align-items: center; width: 100%; margin: 1.25rem 0;">
    <div style="max-width: 25%;">
        <img src="{{ '/images/Pierre_DeGennes.jpg' | relative_url }}"
             alt="A portrait photograph of the physicist Pierre-Gilles de Gennes."
             style="width: 100%; height: auto; display: block;">
        <p style="margin-top: 0.5rem; font-style: italic; color: #555; font-size: 0.9rem; text-align: center;">
            <strong>Pierre-Gilles de Gennes</strong> (1932–2007) who won the Nobel Prize in Physics in 1991 for discovering that methods developed for studying order phenomena in simple systems can be generalized to polymers and liquid crystals.
        </p>
    </div>
    </div>
    
    <!-- <div style="background-color: #f0f0f0; padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
        <h4 style="margin-top: 0;">📚 References and Further Reading</h4>
        <p>If you want to explore further, here are some of the key resources that cover this history:</p>
        <ul>
            <li><strong>Hermann Staudinger and the Foundation of Polymer Science:</strong> American Chemical Society National Historic Chemical Landmarks [citation:4].</li>
            <li><strong>Paul J. Flory and his contributions:</strong> Nobel Prize in Chemistry 1974 [citation:4].</li>
            <li><strong>Pierre-Gilles de Gennes and his generalized theory of phase transitions:</strong> Nobel Prize in Physics 1991 [citation:4].</li>
            <li><strong>Wikipedia contributors. (2025). Polymer physics.</strong> Wikipedia, The Free Encyclopedia [citation:2]. (A great overview for keen students).</li>
            <li><strong>A Discussion on the Origins and Development of Polymer Physics</strong> by Yuliang Yang, Acta Polymerica Sinica (2020) [citation:7]. (A more advanced, but fascinating, deep dive).</li>
        </ul>
        <p style="margin-bottom: 0;">The textbooks by Flory, de Gennes, and Doi & Edwards are the classic, more advanced texts that built the field [citation:2][citation:5]. You'll find them very challenging to follow at this stage but its good to keep in mind that they exist.</p>
    </div> -->

</section>

  <section id="knotted-polymers-my-contribution" class="scroll-section">
    <h2>Knotted Polymers: My Contribution</h2>

    <p>So what have I been up to in my master's project? Thats a very good question. I've been working on these funny polymers, but I'm interested in how they go from being in a knotted state to unkotted state. This might sound a bit weird, but there are good reasons for why we might be interested in this phenomena. </p>

    <p>Remember DNA from biology, and how it is formed of base pairs (or repeating units)? Well that is the very definition of a polymer. Some clever people have measured the distance between adjacent base pairs, and have found it to be ~0.34nm. However, in the human genome there are ~6.27 Giga base pairs. That means if we were to stretch out DNA such that it forms a straight line, it would be just over 2m long!</p>

    <div style="text-align: center;">
        <img src="{{ '/images/DNA.png' | relative_url }}"
             alt="A diagram showing a DNA double helix structure, base pairs and the typical distance of 0.34nm between adjacent base pairs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0; position: center;">
    </div>

    <p>You might see the issue with that if you think about how small a cell is, and how much smaller the cell's nucleus will be. In fact, the diametre of the nucleus in a human cell is 5-10μm. This means we have a problem, how do we fit over 2m of DNA into such a small space?</p>

    <p>The answer to this is something called chromatin. Chromatin packs DNA into much tighter structures by wrapping it around proteins (histones) that are shaped a little bit like biscuits. These biscuit structures then coil up tighter to form something called chromatin. The problem is that sometimes chromatin gets knotted along the way, and thats a problem. It can prevent certain genes from accessed on the DNA.</p>
  
    <div style="text-align: center;">
        <img src="{{ '/images/chromatin.png' | relative_url }}"
             alt="A diagram showing a DNA double helix structure, base pairs and the typical distance of 0.34nm between adjacent base pairs."
             style="max-width: 60%; height: auto; margin: 1.25rem 0; position: center;">
    </div>

    <p>Luckily, our internal machinery have ways to get around this by exerting some form of forces on the DNA, which we will call 'activity'. The way this works is very poorly characterised. Therefore my job has been to help develop simulations of polymers to better understand what the process of polymer unknotting with activity.</p>
    
    <!-- <p>A great analogy to this would be thinking about how when you tie your shoelace in the morning, sometimes it gets unknotted just from walking around. </p> -->

    <p>To achieve this, I knot a polymer, and then simulate it in a fluid to try and replicate the environment that chromatin would live in within the cell. Check out some videos of the simulations below!</p>
    
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
            v.controls = true;
            v.currentTime = 0;
          });
          vids.forEach(v => {
            v.play().catch(() => {});
          });
        });

      })();
    </script>

    <p>Notice how with increasing activity, the knotted polymer moves more! Look at how quickly the simulation on the right becomes a straight line versus the middle, and the one on the left never even gets there! This is because if we include activity on our polymer, it forces it into configurations nature doesn't usually favour.</p>

    <p>I've been able to charaterise the typical times for a polymer to go from being knotted to unknotted with varying amounts of activity. This has been a great stepping stone for polymer physics in the lab, and a brilliant way for me to exercise all of the skills that I have learned during my physics degree!</p>
  </section>

  <section id="why-would-my-parents-care" class="scroll-section">
    <h2>Why Would My Parents Care?</h2>
    <p>When doing science, I always think its very important to think about the bigger picture. A good way to think about this is if I went home to my parents, how would I explain what I do and why it is useful? Sometimes when you're deep in the maths of statistical mechanics, it can be easy to lose sight of the bigger picture. But the physics of polymers is larger than work at univeristy, in fact it's a hidden science behind a huge number of things your parents (and you!) rely on every single day.</p>

    <h3>🏥 1. Health and Medicine</h3>
    <p>Good health is important! Polymer physics is helping to improve medicine.</p>
    <ul>
        <li><strong>Clever Wound Dressings:</strong> Modern dressings aren't just cloth. They're made from polymers engineered to maintain the perfect level of moisture, some even infused with biomolecules to actively help skin regenerate and heal burns faster
        <a href="https://www.sciencedirect.com/org/science/article/abs/pii/S1525779725000832" target="_blank" rel="noopener">[1]</a>
        <a href="https://pubmed.ncbi.nlm.nih.gov/40588411/" target="_blank" rel="noopener">[2]</a>.</li>
        <li><strong>Long Lasting Joint Replacements:</strong> When older folk may need a new hip or knee, the implant is often made from ultra-high-molecular-weight polyethylene (UHMWPE). Understanding its wear and tear at the molecular level helps physicists design joints that can last for decades 
        <a href="https://www.canwellmed.com/the-wear-resistance-of-ultra-high-molecular-weight-polyethylene-implants/" target="_blank" rel="noopener">[3]</a>
        <a href="https://www.sciencedirect.com/science/article/pii/S0883540325013038" target="_blank" rel="noopener">[4]</a>
        .</li>
        <li><strong>Wearable Health Monitors:</strong> Have you ever seen the continuous glucose monitors for diabetes? They're sometimes made by flexible, breathable polymer films that can stick to skin comfortably for days
        <a href="https://www.todaysmedicaldevelopments.com/article/new-medical-polymers-for-smart-sustainable-healthcare-devices/" target="_blank" rel="noopener">[5]</a>.
         We're moving towards next generation versions that are stretchable, using polymers that can bend and move with the body without breaking <a href="https://www.nature.com/articles/s41928-024-01174-4" target="_blank" rel="noopener">[6]</a>.
        </li>
    </ul>

    <h3>📱 2. Technology</h3>
    <p>Polymers can be found within the devices we use all the time and with research we are making them more flexible, durable, and powerful.</p>
    <ul>
        <li><strong>Foldable Screens:</strong> The fact that a phone screen can bend without shattering is down to advanced polymers that are both transparent and flexible <a href="https://www.sciencedirect.com/science/article/pii/S2666542523000188" target="_blank" rel="noopener">[7]</a>.</li>
        <li><strong>Better Batteries:</strong> Researchers are using fluorinated polymers to create solid-state batteries for electric vehicles and phones. These are safer (less likely to catch fire) and more powerful than traditional liquid-based batteries
        <a href="https://www.nature.com/articles/s41586-025-09565-z" target="_blank" rel="noopener">[8]</a>. Longer-lasting, safer batteries? That's something we can all get behind.</li>
        <li><strong>Faster Internet:</strong> The rollout of 5G and future 6G networks requires new materials that can handle high-frequency signals with minimal loss. Scientists are designing polymers with ultra-low "dielectric loss" to make this happen, helping to keep us all connected, faster
        <a href="https://www.waseda.jp/top/en/news/85947" target="_blank" rel="noopener">[9]</a>.
        
        .</li>
    </ul>

    <h3>♻️ 3. Sustainability and a Greener Future</h3>
    <p>This is probably the biggest one. We often see the news about plastic waste and worry about longevity of our planet Polymer physics is helping us to fix this crisis.</p>
    <ul>
        <li><strong>Recycling:</strong> Plastic is very hard to recycle. It involves the physics of co-polymers, that is the mixing of polymer components. When different monomers are combined to create a yogurt lids or a squeezy bottles, they become a molecular blend that standard recycling plants can't separate <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2508921122" target="_blank" rel="noopener">[10]</a>. This "friction" in the recycling system often means waste ends up in landfill <a href="https://www.sciencedirect.com/science/article/pii/S2753812525002952" target="_blank" rel="noopener">[11]</a>. Understanding this is the first step to designing better ones.</li>
        <li><strong>Designing for a Circular Economy:</strong> Scientists are now working on "designed for disassembly" polymers. These are materials that are high-performance during use, but can be easily broken down at the end of their life. This includes <strong>biodegradable circuit boards</strong> made from natural fibres that dissolve in hot water, allowing the valuable components to be recovered and reused <a href="https://eprints.gla.ac.uk/368649/" target="_blank" rel="noopener">[12]</a>.</li>
        <li><strong>Plastics from Plants, Not Oil:</strong> Researchers are engineering high-performance biobased polymers from renewable sources like terpenes from pine trees. These can be used for everything from gears in machines to protective textiles, reducing our dependence on fossil fuels <a href="https://www.plasticsengineering.org/2026/02/research-breakthrough-in-biobased-engineered-plastics-010582/amp/" target="_blank" rel="noopener">[13]</a>.</li>
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

                <li><strong><a href="https://mattertolife.maxplanckschools.org/uro-research-internship" target="_blank" rel="noopener">Max Planck Matter To Life Internship:</a></strong> An internship scheme that will take you to Germany, where you again you can select from a large pool of labs which are researching problems that interest you. This one lasts for 10 weeks. Again no prior experience is required, but good grades will help you out!</li>

                <li><strong>Asking around:</strong> I often live by the motto – don't ask don't get. There are lots of exciting opportunities around us, and when you go to univeristy it goes a long way if you speak to your lectures and tutors. You never know what opportunities you could open by simply showing enthusiasm and getting to know people in the field!</li>
            </ul>
        </div>
        
        <!-- <div style="flex: 1; min-width: 250px; background-color: white; padding: 1.25rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="margin-top: 0; color: #2c5282;">💼 Industry Placements and Scholarships</h4>
            <p>University research isn't the only path. Programs like the <strong>Michelin Science Scholars Program</strong> connect undergraduates directly with industry. Students receive a $2,000 stipend, work on real-world problems (like sustainable alternatives to polyethylene), and tour industrial facilities. As one scholar put it: "There's always this misconception that academic research is completely separate from industry research. Michelin has shown me it's all one science." [citation:9]</p>
        </div> -->
    </div>

    <!-- <h3>🌍 Step 3: Explore the Range of Careers</h3>
    <p>Physics graduates—especially those with polymer or materials experience—are in high demand across multiple sectors [citation:3]. Here's where you could end up:</p>

    <ul>
        <li><strong>Research and Development (R&D):</strong> Designing new materials for electronics, healthcare, or sustainable packaging. Think polymer solar cells [citation:1], flexible displays, or biodegradable plastics [citation:9].</li>
        <li><strong>Medical Physics and Healthcare:</strong> Working with imaging technologies (MRI, ultrasound), radiation therapy, or developing polymer-based drug delivery systems [citation:2][citation:3].</li>
        <li><strong>Electronics and Semiconductor Industry:</strong> Polymer physicists work on organic light-emitting devices (OLEDs), solar cells, and next-generation batteries [citation:1][citation:3].</li>
        <li><strong>Manufacturing and Process Engineering:</strong> Optimising how polymers are processed into real products—from car tyres to medical implants [citation:3].</li>
        <li><strong>Academia and Education:</strong> Teaching and research at universities, often after completing a PhD [citation:3].</li>
    </ul> -->

    <div style="background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
        <h4 style="margin-top: 0;">✨ The Takeaway from Someone Who's Done It</h4>
        <p>
        <a href="https://www.linkedin.com/in/harrison-squires-4331043a6/" target="_blank" rel="noopener">Harrison Squires</a>, an MPhys student at the Univeristy of Edinburgh, now persuing a PhD involving polymers, offers this advice to students considering this path:</p>
        <blockquote style="font-style: italic; margin: 1rem 0; padding-left: 1rem; border-left: 4px solid #2c5282;">
            "Take every opportunity to learn new things – there is so much that you don't know that you don't know."
        </blockquote>
        <p style="margin-bottom: 0;">He also notes that getting "experience outside of the degree was essential" for his "exposure to new and exciting areas of research, that weren't immediately obvious" when he began studying physics at university.</p>
    </div>

    The best preparation is curiosity. Keep asking "why" about the materials around you, and you're already thinking like a physicist

</section>
</div>
