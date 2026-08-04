# Playwright Test Scenario

This repository includes a TypeScript Playwright test scenario that automates the following interaction in Microsoft Edge:

1. Navigate to https://www.epam.com/
2. Select **Services** from the header menu
3. Click **Explore Our Client Work**
4. Verify that **Client Work** is visible on the page

## Run locally

```bash
npx playwright install msedge
npx playwright test tests/epam-client-work.spec.ts
```
