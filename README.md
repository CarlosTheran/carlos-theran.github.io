# Carlos A. Theran-Suarez — Academic Portfolio

This repository contains the static professional portfolio and IIHA Lab website for:

**Carlos A. Theran-Suarez, Ph.D.**  
Assistant Professor, Department of Computer and Information Sciences  
Florida A&M University

Planned public URL:

```text
https://carlos-theran.github.io
```

## Website sections

- Home
- About
- Intelligent Imaging and Health Analytics Lab
- Research
- Students and collaborators
- Publications
- Funding and student support
- Teaching
- Research opportunities
- Contact

## File structure

```text
.
├── index.html
├── README.md
├── DEPLOYMENT.md
├── LICENSE
├── .nojekyll
├── assets
│   ├── css/styles.css
│   ├── images/favicon.svg
│   └── js/main.js
└── data
    ├── courses.json
    ├── grants.json
    ├── people.json
    ├── projects.json
    └── publications.json
```

## Editing content

Most recurring content is stored in JSON files under `data/`.

- `projects.json`: research projects and themes
- `people.json`: students, alumni, and collaborators
- `publications.json`: selected publications
- `grants.json`: sponsored projects and student support
- `courses.json`: courses taught

Open a JSON file in a text editor, copy an existing object, edit its values, and keep valid JSON syntax.

## Add a professional photograph

1. Place the image in `assets/images/`, for example:

```text
assets/images/carlos-theran.jpg
```

2. In `index.html`, replace the `portrait-placeholder` block with:

```html
<img
  class="professional-photo"
  src="assets/images/carlos-theran.jpg"
  alt="Dr. Carlos A. Theran-Suarez">
```

3. Add this rule to `assets/css/styles.css`:

```css
.professional-photo {
  width: 100%;
  aspect-ratio: 4 / 4.7;
  object-fit: cover;
  border-radius: 13px;
}
```

## Preview locally

Because the site loads JSON with JavaScript, do not open `index.html` directly using a `file://` URL. Start a local web server.

### Python

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Visual Studio Code

Install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md).
