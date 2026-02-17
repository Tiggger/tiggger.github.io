document.addEventListener("DOMContentLoaded", function () {
  try {
    localStorage.setItem("theme", "light");
  } catch (e) {
    // Ignore storage errors.
  }
  document.documentElement.removeAttribute("data-theme");
});
