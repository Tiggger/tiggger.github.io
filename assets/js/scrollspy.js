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

  var observer = new IntersectionObserver(
    function (entries) {
      var mostVisible = null;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
          mostVisible = entry;
        }
      });
      if (!mostVisible) return;
      setActive("#" + mostVisible.target.id);
    },
    {
      root: null,
      threshold: [0.35, 0.5, 0.65, 0.8]
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

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
});
