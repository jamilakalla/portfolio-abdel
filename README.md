# Abdellah Ait Messaoud Portfolio

Editable React + Vite recreation of the deployed portfolio at `https://abdellahaitmessaoudpf.pages.dev/`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually `http://localhost:5173`.

## Folder structure

```text
abdellah-portfolio-vite/
  .gitignore
  index.html
  package.json
  package-lock.json
  README.md
  vite.config.js
  public/
    abdellah-cv.pdf
    abdellah-profile.jpg
    luxury-interior-hero.png
    projects/
      decorative-painting-commercial-04.jpg
      decorative-painting-pattern-03.jpg
      decorative-painting-texture-01.jpg
      decorative-painting-wall-02.jpg
  src/
    App.jsx
    main.jsx
    styles.css
    components/
      Footer.jsx
      Header.jsx
      ProjectCard.jsx
      SectionHeading.jsx
    data/
      portfolio.js
    pages/
      Home.jsx
      Projects.jsx
```

## Edit guide

- Main content, contact details, skills, services, education, and projects: `src/data/portfolio.js`
- Home page layout: `src/pages/Home.jsx`
- Separate Projects page: `src/pages/Projects.jsx`
- Header and mobile menu: `src/components/Header.jsx`
- Colors, spacing, mobile layout, and portrait/project image sizing: `src/styles.css`

The Projects section has been moved from the home page into `/projects`, and the mobile portrait is visible in the hero area.
