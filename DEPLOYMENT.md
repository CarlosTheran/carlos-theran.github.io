# Deploying `https://carlos-theran.github.io`

The website is a static GitHub Pages user site. No paid hosting service or build framework is required.

## Important repository-name requirement

For the exact address:

```text
https://carlos-theran.github.io
```

your GitHub username must be:

```text
carlos-theran
```

and the repository must be named exactly:

```text
carlos-theran.github.io
```

GitHub permits one user or organization Pages site per account. If your actual GitHub username is different, use:

```text
YOUR-USERNAME.github.io
```

as both the repository name and the website address.

---

## Method 1 — Upload through the GitHub website

### 1. Create or verify the GitHub account

1. Visit GitHub and sign in.
2. Confirm that the username is `carlos-theran`.
3. When the username is unavailable or your existing username differs, the resulting URL must use the actual username.

### 2. Create the repository

1. Select **New repository**.
2. Repository name:

```text
carlos-theran.github.io
```

3. Set visibility to **Public**.
4. Do not add a README, `.gitignore`, or license during repository creation because these files are already included.
5. Select **Create repository**.

### 3. Upload the website files

1. Open the new repository.
2. Select **Add file → Upload files**.
3. Upload the contents of this project folder—not the outer ZIP file.
4. Verify that `index.html` appears at the repository root.
5. Commit the upload to the `main` branch.

The correct repository root should look like:

```text
index.html
README.md
DEPLOYMENT.md
.nojekyll
assets/
data/
```

### 4. Enable GitHub Pages

1. Open the repository.
2. Select **Settings**.
3. In the left sidebar, select **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **main**.
6. Select folder **/(root)**.
7. Select **Save**.

GitHub will publish the content from the root of the `main` branch. The Pages settings screen will display the public URL after deployment.

### 5. Open the site

Visit:

```text
https://carlos-theran.github.io
```

A deployment may require a short processing period after the first commit. Refresh the Pages settings or inspect the repository **Actions** tab when troubleshooting.

---

## Method 2 — Deploy with Git commands

### 1. Extract the website folder

Open a terminal in the extracted `carlos-theran.github.io` directory.

### 2. Initialize Git

```bash
git init
git add .
git commit -m "Create academic portfolio website"
git branch -M main
```

### 3. Create the empty GitHub repository

Create a public repository named:

```text
carlos-theran.github.io
```

Do not initialize it with other files.

### 4. Connect and push

```bash
git remote add origin https://github.com/carlos-theran/carlos-theran.github.io.git
git push -u origin main
```

### 5. Configure Pages

In GitHub:

```text
Repository → Settings → Pages
```

Choose:

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

Select **Save**.

---

## Method 3 — GitHub Desktop

1. Install and sign in to GitHub Desktop.
2. Select **File → Add Local Repository**.
3. Select the extracted `carlos-theran.github.io` folder.
4. When prompted, create a repository for the folder.
5. Commit all files.
6. Publish the repository as a **public** repository named `carlos-theran.github.io`.
7. In the browser, open **Settings → Pages**.
8. Publish from `main` and `/(root)`.

---

## Updating the website

After editing files locally:

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Pages redeploys after the push.

For website-based editing:

1. Open the file in GitHub.
2. Select the pencil icon.
3. Make the change.
4. Select **Commit changes**.

---

## Recommended first edits

1. Replace the professional-photo placeholder.
2. Update GitHub, LinkedIn, and CV links in `index.html`.
3. Verify the FAMU email address.
4. Replace placeholder publications in `data/publications.json`.
5. Add students to `data/people.json`.
6. Add grants to `data/grants.json`.
7. Add project URLs and verified descriptions to `data/projects.json`.
8. Add any courses not listed in `data/courses.json`.

---

## Common problems

### The website displays a 404 error

Verify:

- The repository is public.
- The repository name exactly matches `carlos-theran.github.io`.
- `index.html` is at the top level of the selected publishing source.
- Pages is configured for `main` and `/(root)`.
- The GitHub username is actually `carlos-theran`.

### Data sections are empty during local preview

Opening `index.html` directly can block JSON requests. Use:

```bash
python3 -m http.server 8000
```

and visit `http://localhost:8000`.

### Changes do not appear

- Confirm that the changes were committed and pushed.
- Inspect the repository **Actions** tab for deployment errors.
- Force-refresh the browser.
- Confirm the Pages source branch and folder.

### The exact URL is unavailable

The URL is tied to the GitHub account username. A repository named `carlos-theran.github.io` under a different username will not create the requested user-site URL. Rename the GitHub username or use the actual username in the repository and URL.
