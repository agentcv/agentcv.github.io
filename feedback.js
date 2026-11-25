// Builds a pre-filled GitHub issue from the form. Nothing is sent from this page.
(function () {
  var form = document.getElementById("fb");
  if (!form) return;
  var summary = document.getElementById("summary"), err = document.getElementById("summary-err");
  summary.addEventListener("input", function () { err.hidden = true; summary.removeAttribute("aria-invalid"); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var s = summary.value.trim();
    if (!s) { err.hidden = false; summary.setAttribute("aria-invalid", "true"); summary.focus(); return; }
    var kind = form.querySelector("input[name=kind]:checked").value;
    var body = "**Feedback type:** " + kind + "\n" +
      "**Agent:** " + document.getElementById("agent").value + "\n" +
      "**agentCV version:** " + (document.getElementById("version").value.trim() || "not given") + "\n\n" +
      (document.getElementById("details").value.trim() || "(no details)") + "\n\n_Sent from agentcv.github.io/feedback_";
    var url = "https://github.com/duprejohn/agentcv/issues/new?title=" + encodeURIComponent("[" + kind + "] " + s) + "&body=" + encodeURIComponent(body);
    window.location.href = url;
  });
})();
