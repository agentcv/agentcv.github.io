// Points "Download the latest release" straight at the newest agentcv-<version>.zip.
// Without JavaScript, or if GitHub doesn't answer, the button opens the release page instead.
(function () {
  var links = document.querySelectorAll("[data-latest-zip]");
  if (!links.length || !window.fetch) return;
  fetch("https://api.github.com/repos/duprejohn/agentcv/releases/latest", { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (rel) {
      var zip = (rel.assets || []).filter(function (a) { return /^agentcv-.*\.zip$/.test(a.name); })[0];
      if (!zip) return;
      var version = (rel.tag_name || "").replace(/^v/, "");
      links.forEach(function (a) {
        a.href = zip.browser_download_url;
        a.textContent = "Download agentCV " + version + " (zip)";
      });
      document.querySelectorAll("[data-latest-note]").forEach(function (n) {
        n.textContent = zip.name + " · " + Math.round(zip.size / 1024) + " KB · from GitHub";
      });
    })
    .catch(function () { /* keep the release-page fallback */ });
})();
