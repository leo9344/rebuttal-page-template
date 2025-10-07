(() => {
  const init = () => {
    if (typeof window.markdownit === "undefined") {
      console.error("Markdown-it failed to load");
      return;
    }

    const md = window
      .markdownit({
        html: false,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
          if (lang && window.hljs && window.hljs.getLanguage(lang)) {
            try {
              return window.hljs.highlight(str, { language: lang }).value;
            } catch (err) {
              console.warn("Highlight error", err);
            }
          }
          return md.utils.escapeHtml(str);
        },
      })
      .use(window.markdownitFootnote || (() => {}));

    if (window.texmath && window.katex) {
      const tm = window.texmath.use(window.katex);
      md.use(tm, {
        delimiters: "dollars",
        katexOptions: {
          macros: {
            "\\RR": "\\mathbb{R}",
            "\\CC": "\\mathbb{C}",
          },
        },
      });
    }

    const editors = Array.from(document.querySelectorAll(".markdown-editor"));
    const previews = Array.from(document.querySelectorAll(
      ".markdown-preview"
    ));

    const renderPreview = (textarea, preview) => {
      if (!preview) return;
      const rendered = md.render(textarea.value);
      preview.innerHTML = rendered;
    };

    editors.forEach((textarea, index) => {
      const preview = previews[index];
      renderPreview(textarea, preview);

      textarea.addEventListener("input", () => {
        renderPreview(textarea, preview);
      });
    });

    // Copy to clipboard buttons
    document.querySelectorAll(".card").forEach((card) => {
      const button = card.querySelector(".copy-button");
      const textarea = card.querySelector(".markdown-editor");
      if (!button || !textarea) return;

      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(textarea.value);
          button.classList.add("copied");
          setTimeout(() => button.classList.remove("copied"), 2000);
        } catch (error) {
          console.error("Clipboard copy failed", error);
          button.textContent = "Copy failed";
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
