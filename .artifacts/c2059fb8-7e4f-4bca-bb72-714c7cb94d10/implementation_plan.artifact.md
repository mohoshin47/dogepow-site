# Implementation Plan - Switch to "Deploy from Branch"

Switch the deployment method from GitHub Actions to the traditional "Deploy from branch" method using the `gh-pages` package.

## Proposed Changes

### 1. Remove GitHub Actions Workflow
- Delete `.github/workflows/deploy.yml` as it's no longer needed for this method.

### 2. Configure `gh-pages` for Deployment
#### [MODIFY] [package.json](file:///I:/AndroidStudioProjects2/DogePow/web/package.json)
- Add `gh-pages` to `devDependencies`.
- Add `predeploy` and `deploy` scripts.
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d dist`

## Manual Steps Required

1. **Install the new dependency**:
   Run `npm install` in your terminal.
2. **Deploy for the first time**:
   Run `npm run deploy`. This will create a new `gh-pages` branch on your GitHub repository.
3. **Change GitHub Settings**:
   - Go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **"Deploy from a branch"**.
   - Under **Branch**, select **"gh-pages"** and the **"/(root)"** folder.

## Verification Plan
- Verify `package.json` has the correct scripts.
- Ensure the workflow file is removed.
