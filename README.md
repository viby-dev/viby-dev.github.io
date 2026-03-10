# empty branch
# 🌐 Personal Website – viby-dev.github.io

This repository contains the source code and deployment setup for my personal website hosted on **GitHub Pages**.

The project is built using **React** and deployed as a static website.

---

# 🚀 Repository Structure

The repository uses **two branches**:

```
main       → Source code (React project)
gh-pages   → Built static website served by GitHub Pages
```

### `main` branch

Contains the development source code.

```
src/
public/
package.json
package-lock.json
craco.config.js
tailwind.config.js
```

### `gh-pages` branch

Contains the static build served by GitHub Pages.

```
index.html
static/
asset-manifest.json
```

---

# 🛠️ Local Development

Clone the repository:

```bash
git clone https://github.com/viby-dev/viby-dev.github.io.git
cd viby-dev.github.io
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

# 🏗️ Building the Website

Generate the production build:

```bash
npm run build
```

This creates:

```
build/
 ├── index.html
 ├── static/
 └── asset-manifest.json
```

---

# 🌍 Deployment Workflow

The deployment process pushes the build output to the **gh-pages branch**.

### 1. Switch to source branch

```bash
git checkout main
```

---

### 2. Make changes and commit

```bash
git add .
git commit -m "update website"
git push origin main
```

---

### 3. Build the website

```bash
npm run build
```

---

### 4. Switch to deployment branch

```bash
git checkout gh-pages
```

---

### 5. Copy build files to root

```bash
cp -r build/* .
```

---

### 6. Deploy the website

```bash
git add .
git commit -m "deploy updated website"
git push origin gh-pages
```

---

# ⚙️ GitHub Pages Configuration

Repository settings must be configured as:

```
Settings → Pages
Source → Deploy from branch
Branch → gh-pages
Folder → / (root)
```

---

# 🌐 Live Website

```
https://viby-dev.github.io
```

---

# 📌 Quick Deployment Commands

```bash
git checkout main
npm run build
git checkout gh-pages
cp -r build/* .
git add .
git commit -m "deploy update"
git push
```

---

# 👤 Author

**Bhavish Rai B**

Robotics & Autonomous Systems
ROS2 | Multi-Robot Systems | Autonomous Robotics
