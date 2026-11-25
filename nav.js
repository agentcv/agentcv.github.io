// Mobile menu: the links stay visible without JavaScript; with it, small screens get a Menu button.
(function () {
  var header = document.querySelector("header.site"), btn = header && header.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  header.classList.add("js-nav");
  btn.hidden = false;
  function setOpen(open, focusBtn) {
    btn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    if (!open && focusBtn) btn.focus();
  }
  btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") setOpen(false, true);
  });
  document.addEventListener("click", function (e) {
    if (btn.getAttribute("aria-expanded") === "true" && !header.contains(e.target)) setOpen(false);
  });
})();
