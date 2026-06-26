const buttons = document.querySelectorAll("[data-copy]");

for (const button of buttons) {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") || "";
    const original = button.textContent;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 1600);
    } catch {
      button.textContent = "Copy failed";
      setTimeout(() => {
        button.textContent = original;
      }, 1600);
    }
  });
}
