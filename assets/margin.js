(() => {
  "use strict";

  // The model converged. Management remains under review.
  console.log("%cTHE NONPROFIT MARGIN", "font-weight:700; letter-spacing:.12em; color:#1d604f");
  console.log("You inspected the console. Your curiosity has a statistically significant effect on our morale.");

  const toast = document.querySelector("[data-toast]");
  let timer;
  const reveal = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(timer);
    timer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
  };

  let keys = "";
  document.addEventListener("keyup", (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    keys = (keys + event.key.toLowerCase()).slice(-8);
    if (keys.endsWith("990")) {
      reveal("Form received. Please allow 6–11 months for the present to become historical data.");
      keys = "";
    } else if (keys.endsWith("shap")) {
      reveal("SHAP happens. Causality does not necessarily follow.");
      keys = "";
    }
  });

  const footerSecret = document.querySelector("[data-footer-secret]");
  let footerClicks = 0;
  footerSecret?.addEventListener("click", () => {
    footerClicks += 1;
    if (footerClicks === 3) {
      footerSecret.textContent = "Null hypothesis: nobody reads footers. Rejected.";
      reveal("You found a result we are willing to publish.");
    }
  });
})();
