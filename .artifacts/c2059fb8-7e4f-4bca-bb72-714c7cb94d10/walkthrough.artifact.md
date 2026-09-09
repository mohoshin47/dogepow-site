# GitHub Pages Deployment Fix Walkthrough

I have automated the deployment process for your DogPow website. Now, every time you push changes to GitHub, the site will automatically build and update.

## ✅ Changes Made

### 1. Vite Configuration
- Updated `vite.config.ts` to include the `base: '/dogepow-site/'` setting. This ensures that assets like images and CSS load correctly from the GitHub project URL.

### 2. Automated Build & Deploy
- Created `.github/workflows/deploy.yml`. This is a **GitHub Actions** script that:
    - Runs whenever you push to `main`.
    - Installs your project dependencies.
    - Builds the production version of your site.
    - Uploads the final files to GitHub Pages.

---

## 🚀 Final Step Required (Manual)

To make the site live, you **MUST** do this once:

1. Open your browser and go to: [https://github.com/mohoshin47/dogepow-site/settings/pages](https://github.com/mohoshin47/dogepow-site/settings/pages)
2. Under **Build and deployment** > **Source**, click the dropdown and select **"GitHub Actions"**.

![GitHub Pages Settings](https://github.blog/wp-content/uploads/2022/07/github-actions-pages-dropdown.png?w=600)

Once you select "GitHub Actions", your site will start building automatically. You can watch the progress in the **Actions** tab of your repository.
