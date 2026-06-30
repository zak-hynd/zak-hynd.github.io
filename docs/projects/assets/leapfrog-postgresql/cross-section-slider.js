<script>
(function () {
  const STEPS = [
    {
      filename: "01-Fault-model.svg",
      label: "01 – Fault model",
      caption: "The fault model is built first. In Leapfrog, faults define the blocks that all older geology must be modelled within – build order is a tool constraint, not a geological sequence."
    },
    {
      filename: "02-Faulted-BRI-model.svg",
      label: "02 – BRI model",
      caption: "The bedrock interface (BRI) model captures the contact between bedrock units below and valley-fill sediments above, resolved independently within each fault block."
    },
    {
      filename: "03-Contiguous-BRI-surface.svg",
      label: "03 – Unioned BRI surface",
      caption: "The BRI volumes are unioned into one contiguous surface that carries the fault scarps with it. Downstream teams (geotech, resource modelling, etc.), need that surface whole."
    },
    {
      filename: "04-Faulted-Bedrock-units.svg",
      label: "04 – Faulted bedrock units",
      caption: "Bedrock units modelled within the fault blocks: Oracle Granite (host rock), Diabase dikes (older intrusions), and porphyritic intrusions linked to the mineralised system. The dikes share one offset surface as reference geometry – adjust its orientation, and the fifty-odd dikes follow."
    },
    {
      filename: "05-Unfaulted-Basalt-dikes.svg",
      label: "05 – Basalt dikes",
      caption: "Basalt dikes, considered contemporaneous with Basin & Range extensional faulting."
    },
    {
      filename: "06-Sediments.svg",
      label: "06 – Valley fill",
      caption: "Valley-fill sediments and overburden: Basal Conglomerate, Mafic Conglomerate, Mass-wasting boulders of bedrock (colluvium), Whitetail Conglomerate, Gila Conglomerate, Lacustrine deposits, and Alluvium – several built in their own models when necessary."
    },
    {
      filename: "07-Final-combined-model.svg",
      label: "07 – Combined model with fault planes overlaid",
      caption: "Fault planes overlaid on the complete geology. The faults were built first (Step 1) but are shown last here so the units they displace are visible beneath them."
    }
  ];

  const INITIAL_STEP = 3;
  const IMG_BASE = "assets/leapfrog-postgresql/";

  function applyStep(stepIndex) {
    const step = STEPS[stepIndex];
    document.getElementById("cs-img").src = IMG_BASE + step.filename;
    document.getElementById("cs-label").textContent = step.label;
    document.getElementById("cs-caption").textContent = step.caption;
  }

  function updateTrackFill(rangeEl) {
    const min = parseFloat(rangeEl.min);
    const max = parseFloat(rangeEl.max);
    const val = parseFloat(rangeEl.value);
    const pct = ((val - min) / (max - min)) * 100;
    rangeEl.style.background = `linear-gradient(to right, #3eb4ad 0%, #3eb4ad ${pct}%, #444 ${pct}%, #444 100%)`;
  }

  function init() {
    const range = document.getElementById("cs-range");
    range.value = INITIAL_STEP;
    applyStep(INITIAL_STEP);
    updateTrackFill(range);
    range.addEventListener("input", function () {
      applyStep(parseInt(this.value, 10));
      updateTrackFill(this);
    });
  }

  window.addEventListener("load", init);
})();
</script>