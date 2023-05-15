document
  .getElementById("save-pdf-button")
  .addEventListener("click", function () {
    html2pdf()
      .from(document.body)
      .set({
        filename: "webpage.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: {
          unit: "in",
          format: "letter",
          orientation: "portrait",
          fontSize: 10,
        },
      })
      .save();
  });
