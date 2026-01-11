# Vercel Deployment Not Triggering - Troubleshooting Guide

**Date**: 2025-01-10  
**Issue**: Deployments are not triggering on Vercel despite git pushes succeeding

---

## Current Status

✅ **Code Fixes Applied**:
- ESLint configuration fixed (commit `fe2c50a`)
- Vercel config cleaned up (commit `b72ddab`)
- All changes pushed to GitHub

❌ **Issue**: Deployments still not triggering

This indicates a **Vercel Dashboard configuration issue**, not a code problem.

---

## Step-by-Step Troubleshooting

### Step 1: Verify Vercel Project Connection ✅

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your project (should be named something like "lonemountainvistas" or "lone-mountain-vistas")
3. Click on the project
4. Go to **Settings** → **Git**
5. Verify the following:

   **Check Repository Connection**:
   - Repository should be: `DrJanDuffy/lonemountainvistas.com`
   - Git Provider: GitHub
   - Production Branch: `main`
   
   **If the repository is wrong**:
   - Click "Disconnect"
   - Click "Connect Git Repository"
   - Select: `DrJanDuffy/lonemountainvistas.com`
   - Select branch: `main`
   - Click "Connect"

---

### Step 2: Verify Auto-Deploy Settings ✅

1. In the same **Settings** → **Git** page
2. Look for "Deploy Hooks" or "Production Branch" section
3. Verify:
   - ✅ "Auto-deploy on Git push" is **ENABLED**
   - ✅ Production branch is set to: `main`
   - ✅ No deployment restrictions are set

**If auto-deploy is disabled**:
   - Toggle it **ON**
   - Save changes

---

### Step 3: Check Recent Deployments 🔍

1. Go to the **Deployments** tab in your Vercel project
2. Check the latest deployments:
   - Do you see ANY deployments at all?
   - If yes, what status are they (Ready, Failed, Building)?
   - What commit hash do they show?
   
3. **Expected commits to see**:
   - `c1e4a5f` - Add deployment fixes summary document
   - `b72ddab` - Cleanup: Remove deprecated git.deploymentEnabled
   - `fe2c50a` - Fix: Remove unused eslint-plugin-html

**If no deployments appear**:
   - Vercel is not receiving webhook events from GitHub
   - Go to Step 4

**If deployments appear but failed**:
   - Click on the failed deployment
   - Check the build logs for errors
   - Share the error message

---

### Step 4: Verify GitHub Webhook ✅

1. Go to your GitHub repository: `https://github.com/DrJanDuffy/lonemountainvistas.com`
2. Go to **Settings** → **Webhooks**
3. Look for a webhook from Vercel (should show `api.vercel.com` in the URL)
4. Check:
   - ✅ Webhook exists
   - ✅ Status is "Active" (green)
   - ✅ Recent deliveries show successful (200 OK)

**If webhook doesn't exist**:
   - Vercel project needs to be reconnected
   - Go back to Step 1 and reconnect

**If webhook exists but shows errors**:
   - Click on the webhook
   - Check "Recent Deliveries"
   - Look for failed requests (not 200 OK)
   - Check the response body for error messages

**Common webhook errors**:
   - 401/403: Authentication/permission issue
   - 404: Repository not found
   - 500: Vercel service error

---

### Step 5: Check Project Settings ✅

1. In Vercel Dashboard → Project → **Settings** → **General**
2. Verify:
   - Framework Preset: `Next.js` (or auto-detected)
   - Root Directory: `./` (should be empty, or set if project is in subfolder)
   - Build Command: `npm run build` (or leave empty for auto-detection)
   - Output Directory: `.next` (auto-detected for Next.js)
   - Install Command: `npm install` (or leave empty for auto-detection)

**Note**: Since you have `next.config.js` with `output: 'export'`, the output directory should be `out` for static exports.

---

### Step 6: Manual Trigger Test 🔧

Try triggering a deployment manually:

1. In Vercel Dashboard → **Deployments** tab
2. Click "Redeploy" or "Create Deployment"
3. Select branch: `main`
4. Click "Redeploy"

**If manual deployment works**:
   - Code and build configuration are fine
   - Issue is with automatic deployment triggers (webhook/connection)
   - Focus on Steps 1-4

**If manual deployment fails**:
   - Check build logs for errors
   - There may be a build configuration issue
   - Share the error message

---

### Step 7: Verify Repository Permissions 🔐

1. Go to GitHub → Repository → **Settings** → **Collaborators & teams**
2. Verify your GitHub account has admin access
3. Go to GitHub → **Settings** (your account) → **Applications** → **Authorized OAuth Apps**
4. Find "Vercel" in the list
5. Check:
   - ✅ Vercel is authorized
   - ✅ Repository access is granted
   - ✅ Permissions include: `repo` (full repository access)

**If Vercel is not authorized**:
   - Reconnect the project in Vercel Dashboard
   - You'll be prompted to authorize Vercel

---

## Common Issues & Solutions

### Issue #1: Repository Not Connected
**Symptoms**: No deployments, project shows "Not connected to Git"
**Solution**: Reconnect repository in Vercel Dashboard → Settings → Git

### Issue #2: Wrong Repository Connected
**Symptoms**: Deployments not triggering, but old repository still connected
**Solution**: Disconnect and reconnect to correct repository (`DrJanDuffy/lonemountainvistas.com`)

### Issue #3: Auto-Deploy Disabled
**Symptoms**: Manual deployments work, but automatic ones don't trigger
**Solution**: Enable "Auto-deploy on Git push" in Settings → Git

### Issue #4: Wrong Branch
**Symptoms**: Deployments triggering for wrong branch
**Solution**: Set Production Branch to `main` in Settings → Git

### Issue #5: Webhook Failed
**Symptoms**: No deployments, webhook shows errors in GitHub
**Solution**: Reconnect repository to regenerate webhook, check permissions

### Issue #6: Build Command Issues
**Symptoms**: Deployments trigger but fail during build
**Solution**: Check build logs, verify `package.json` scripts are correct

---

## Diagnostic Information

**Latest Commits Pushed**:
- `c1e4a5f` - Add deployment fixes summary document
- `b72ddab` - Cleanup: Remove deprecated git.deploymentEnabled
- `fe2c50a` - Fix: Remove unused eslint-plugin-html

**Repository**: `https://github.com/DrJanDuffy/lonemountainvistas.com.git`  
**Branch**: `main`  
**Framework**: Next.js 15  
**Build Command**: `npm run build` (from package.json)  
**Output**: Static export (`output: 'export'` in next.config.js)

---

## Next Steps

1. **Start with Step 1** - Verify project connection
2. **Check Step 2** - Ensure auto-deploy is enabled
3. **Review Step 3** - Check recent deployments for clues
4. **Verify Step 4** - Confirm webhook is working
5. **Try Step 6** - Test manual deployment

**If after all steps deployments still don't trigger**:
- Contact Vercel support with:
  - Project name/URL
  - Repository: `DrJanDuffy/lonemountainvistas.com`
  - Screenshots of Settings → Git page
  - Webhook delivery logs from GitHub

---

**Last Updated**: 2025-01-10  
**Status**: Waiting for Vercel Dashboard verification
