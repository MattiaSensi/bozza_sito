// Shared navigation and footer for the static copy of the MSE site.
(function () {
  var NAV = [
    ["Home", "index.html"],
    ["Members", "membri.html"],
    ["Seminars", "online-seminars.html"],
    ["Activities", "attivita.html"],
    ["Publications", "pubblicazioni.html"],
    ["Science to Public", "divulgazione.html"],
    ["Contacts", "contatti.html"],
    ["News & Events", "news.html"],
    ["Open Positions", "open-positions.html"],
    ["Workshop MSE", "workshop-mse.html"]
  ];

  var here = (location.pathname.split("/").pop() || "index.html");

  function menuHTML() {
    var items = NAV.map(function (n) {
      var cls = n[1] === here ? ' class="current"' : "";
      return '<li><a href="' + n[1] + '"' + cls + ">" + n[0] + "</a></li>";
    }).join("");
    return '<nav class="menu"><ul>' + items + "</ul></nav>";
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap">' +
      '<a class="site-title" href="index.html">Modellistica Socio-Epidemiologica</a>' +
      menuHTML() +
      "</div>";
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap">' +
      menuHTML() +
      '<p class="note"><a href="index.html">Modellistica Socio-Epidemiologica</a>, UMI-Group.</p>' +
      '<p class="note">MSE Focus newsletter: <a href="https://open.substack.com/pub/gruppomseumi/p/mse-focus-2">MSE Focus on Substack</a>.</p>' +
      "</div>";
  }
})();
