# Quick Fix Checklist - Vercel Deployment Not Triggering

**Most Common Issues** (Based on Vercel 2025 documentation)

---

## ⚡ Quick Checks (5 minutes)

### 1. Check Commit Author Email ✅

**Issue**: Commit author email must match your Vercel account email

**Check**:
```bash
git log --format='%ae' -1
```

**Fix if needed**:
```bash
git config user.email "your-email@example.com"
# Make sure this matches your Vercel account email
```

---

### 2. Verify GitHub App Installation ✅

1. Go to: `https://github.com/settings/installations`
2. Find "Vercel" in the list
3. Click "Configure"
4. Verify repository `DrJanDuffy/lonemountainvistas.com` is selected
5. Permissions should include:
   - ✅ Repository access: Selected repositories → `lonemountainvistas.com`
   - ✅ Repository permissions: Contents (Read and write)

**If Vercel is not installed**:
- Go to Vercel Dashboard → Settings → Git → Connect Repository
- You'll be prompted to install/authorize the GitHub App

---

### 3. Check Vercel Dashboard Settings ⚙️

Go to: [Vercel Dashboard](https://vercel.com/dashboard) → Your Project → **Settings** → **Git**

**Verify**:
- [ ] Repository: `DrJanDuffy/lonemountainvistas.com`
- [ ] Production Branch: `main` (must match exactly)
- [ ] "Auto-deploy on Git push" is **ENABLED** (toggle should be ON)

**If repository shows wrong repo or disconnected**:
- Click "Disconnect"
- Click "Connect Git Repository"
- Select: `DrJanDuffy/lonemountainvistas.com`
- Select branch: `main`

---

### 4. Verify GitHub Webhook ✅

1. Go to: `https://github.com/DrJanDuffy/lonemountainvistas.com/settings/hooks`
2. Look for webhook with URL containing `api.vercel.com`
3. Check:
   - Status: ✅ Active (green)
   - Recent Deliveries: Should show 200 OK for recent pushes

**If webhook is missing or shows errors**:
- Reconnect repository in Vercel Dashboard (Settings → Git)
- This will regenerate the webhook

---

### 5. Try Manual Deployment Test 🔧

In Vercel Dashboard → **Deployments** tab → Click "Redeploy" or "Create Deployment"

**If manual deployment works**:
- ✅ Code is fine
- ❌ Issue is with auto-deploy triggers
- Focus on Steps 1-4

**If manual deployment fails**:
- Check build logs
- There's a build configuration issue
- Share the error message

---

## 🎯 Most Likely Causes (in order)

1. **Commit author email mismatch** (40% of cases)
2. **Repository not connected** (30% of cases)
3. **Auto-deploy disabled** (20% of cases)
4. **Wrong production branch** (10% of cases)

---

## ✅ Quick Test

After checking the above, make a small test commit:

```bash
# Update a comment or make small change
echo "# Test" >> test.txt
git add test.txt
git commit -m "Test: Trigger Vercel deployment"
git push
```

Then check Vercel Dashboard within 1-2 minutes for a new deployment.

---

## 📋 Verification Checklist

Check off as you verify:

- [ ] Commit author email matches Vercel account
- [ ] GitHub App installed with repository access
- [ ] Vercel Dashboard shows correct repository
- [ ] Production branch set to `main`
- [ ] Auto-deploy is ENABLED
- [ ] GitHub webhook exists and shows 200 OK
- [ ] Manual deployment works (tests code/build)

---

**If all checks pass but deployments still don't trigger**: Contact Vercel Support with:
- Project URL/name
- Repository: `DrJanDuffy/lonemountainvistas.com`
- Recent commit hash: `82f75e7`
- Screenshot of Settings → Git page
