# Rebuttal Page Template

This repository contains a single-page workspace tailored for paper rebuttals. It
provides live Markdown previews, KaTeX math rendering, syntax-highlighted code
listings, and organized reviewer response lanes so you can stay coordinated
through the rebuttal window.

## Features

- **Reviewer threads** &mdash; Dedicated cards to draft and iterate on answers for
  each reviewer, complete with Markdown editors and live previews plus follow-up
  conversation logs per reviewer.
- **Math typesetting** &mdash; Write inline or display math (including `\mathbb` and
  macros such as `\RR`) using KaTeX through the `markdown-it-texmath` plugin.
- **Tables and listings** &mdash; Render Markdown and LaTeX-style tables plus
  syntax-highlighted code blocks via Highlight.js.
- **Evidence figure trays** &mdash; Each reviewer lane includes ready-to-swap
  figure placeholders so you can drop in plots or diagrams that support the
  rebuttal narrative.
- **Reviewer quick links** &mdash; Use the jump bar to open any reviewer lane
  instantly without scrolling.
- **Quick copy** &mdash; Export any response with a single click using the copy
  buttons in each reviewer card.
- **Discussion log** &mdash; Capture clarifications or internal decisions in a
  separate notes panel.

## Getting started

1. Clone or download this repository.
2. Open `index.html` in your browser. No build step is required.
3. Edit the Markdown in each panel; the preview updates instantly.

> Tip: Use the "Copy Markdown" button on any card to paste the prepared answer
> directly into OpenReview or your submission portal.

## Deploying on GitHub Pages

The project is a plain static site, so it can be published on GitHub Pages with
no additional tooling:

1. Commit the contents of this repository to your `main` (or `master`) branch.
2. In your GitHub project, navigate to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your
   default branch, and set the folder to `/ (root)`.
4. Save the configuration—Pages will build the site automatically and serve it
   at `https://<username>.github.io/<repo>/` within a couple of minutes.

Because the template uses relative paths for local assets (`styles.css` and
`script.js`) and loads all libraries from public CDNs over HTTPS, no further
configuration is required for GitHub Pages.

## Customization

- Duplicate reviewer cards in `index.html` to track additional discussions.
- Update the placeholder Markdown to match your paper details and reviewer
  comments.
- Replace the evidence figure data URIs with local paths (e.g., `figures/plot.png`)
  to embed your own visuals in each reviewer lane.
- Adjust the appearance in `styles.css` if you prefer a different theme.

## Acknowledgements

This template uses the following open-source libraries via CDN:

- [markdown-it](https://github.com/markdown-it/markdown-it) with the footnote and
  texmath plugins
- [KaTeX](https://katex.org/) for math rendering
- [Highlight.js](https://highlightjs.org/) for syntax highlighting
