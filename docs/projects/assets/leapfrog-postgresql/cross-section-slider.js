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
      caption: "The bedrock interface (BRI) model captures the contact between bedrock units below and valley-fill sediments above, formed independently within each fault block."
    },
    {
      filename: "03-Contiguous-BRI-surface.svg",
      label: "03 – Unioned BRI surface",
      caption: "The BRI volumes are unioned into one contiguous surface that includes the fault scarps. Downstream teams (geotech, resource modelling, etc.), need that surface whole."
    },
    {
      filename: "04-Faulted-Bedrock-background.svg",
      label: "04 – Faulted host rock",
      caption: "Older host rock units: Oracle Granite, and Pinal Schist; straightforward volumes built within the fault blocks."
    },
    {
      filename: "05-Faulted-Bedrock-dikes.svg",
      label: "05 – Faulted intrusives",
      caption: "Intrusives modelled within the fault blocks: Diabase dikes (older), and porphyritic intrusives linked to the mineralised system. These all share offset surfaces as reference geometry – adjust one orientation, and the ~40 bodies follow."
    },
    {
      filename: "06-Unfaulted-Basalt-dikes.svg",
      label: "06 – Basalt dikes",
      caption: "Basalt dikes, considered contemporaneous with Basin & Range extensional faulting so built in a separate 'unfaulted' model."
    },
    {
      filename: "07-Main-sediments.svg",
      label: "07 – Overburden and valley fill",
      caption: "Valley‑fill and overburden units built above the BRI: Basal Conglomerate, Whitetail Conglomerate, Gila Conglomerate, and Alluvium. Straightforward stratigraphic volumes."
    },
    {
      filename: "08-All-sediments.svg",
      label: "08 – All sediments",
      caption: "Additional sedimentary units requiring more manual modelling techniques to separate layers: Mafic Conglomerate, mass‑wasting bedrock boulder deposits, and Lacustrine sediments."
    },
    {
      filename: "09-Final-combined-model.svg",
      label: "09 – Combined model with fault planes overlaid",
      caption: "The faults were built first (Step 1) but clipped and included as part of the 'complete model' to illustrate how far up the sediment sequence the offset might reach."
    }
  ];

  const INITIAL_STEP = 4;
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