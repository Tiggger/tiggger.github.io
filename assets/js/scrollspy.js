document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("#site-nav");
  if (!nav) return;

  var navLinks = Array.prototype.slice.call(
    nav.querySelectorAll('.visible-links a[href*="#"]')
  );
  if (!navLinks.length) return;

  function setActive(hash) {
    navLinks.forEach(function (link) {
      var li = link.closest("li");
      if (!li) return;
      var isActive = link.getAttribute("href").endsWith(hash);
      li.classList.toggle("selected", isActive);
    });
  }

  var sectionById = {};
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href") || "";
    var idx = href.indexOf("#");
    if (idx === -1) return;
    var hash = href.slice(idx);
    var section = document.querySelector(hash);
    if (section) sectionById[hash] = section;
  });

  var sections = Object.keys(sectionById).map(function (hash) {
    return sectionById[hash];
  });
  if (!sections.length) return;

  var ticking = false;
  function updateActiveFromScroll() {
    var masthead = document.querySelector(".masthead");
    var mastheadHeight = masthead ? masthead.offsetHeight : 84;
    var marker = window.scrollY + mastheadHeight + 12;
    var active = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= marker) active = section;
    });

    if (active && active.id) setActive("#" + active.id);
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActiveFromScroll);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var href = link.getAttribute("href") || "";
      var idx = href.indexOf("#");
      if (idx === -1) return;
      var hash = href.slice(idx);
      setActive(hash);
    });
  });

  if (window.location.hash && sectionById[window.location.hash]) {
    setActive(window.location.hash);
  } else if (sections[0] && sections[0].id) {
    setActive("#" + sections[0].id);
  }
  onScroll();
});
