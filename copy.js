document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var text = document.getElementById(btn.dataset.copy).textContent;
    var status = btn.closest(".prompt").querySelector(".status");
    function selectIt() {
      var r = document.createRange(); r.selectNodeContents(document.getElementById(btn.dataset.copy));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      status.textContent = "Selected. Press Cmd+C (Mac) or Ctrl+C (Windows) to copy.";
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () { status.textContent = "Copied. Paste it into your agent."; }, selectIt);
    } else { selectIt(); }
  });
});
