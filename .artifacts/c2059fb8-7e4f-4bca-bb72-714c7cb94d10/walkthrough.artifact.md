# "Deploy from Branch" Switch Walkthrough

I have removed the GitHub Actions workflow and configured your project to use the traditional "Deploy from branch" method using the `gh-pages` package.

## ✅ Changes Made

### 1. Workflow Removal
- Deleted `.github/workflows/deploy.yml`. GitHub will no longer try to build your site using Actions.

### 2. Package Configuration
- Updated `package.json` to include:
    - `gh-pages` in `devDependencies`.
    - `predeploy` script: Automatically builds your site (`npm run build`) before deploying.
    - `deploy` script: Pushes the contents of your `dist` folder to a new `gh-pages` branch.

---

## 🚀 Final Steps (Action Required)

To finish the setup and make your site live, please follow these steps:

### Step 1: Install & Build
Run these commands in your terminal:
```bash
npm install
npm run build
```

### Step 2: Deploy to GitHub
Run the deploy command:
```bash
npm run deploy
```
> [!NOTE]
> This command will create a new branch named `gh-pages` in your repository and upload your built site there.

### Step 3: Update GitHub Settings
1. Go to your repository settings: [GitHub Pages Settings](https://github.com/mohoshin47/dogepow-site/settings/pages)
2. Under **Build and deployment** > **Source**, select **"Deploy from a branch"**.
3. Under **Branch**, click the dropdown and select **`gh-pages`**.
4. Click **Save**.

Your site should be live at: `https://mohoshin47.github.io/dogepow-site/` within a few minutes.
