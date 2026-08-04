import { test, expect } from '@playwright/test';

test.use({ channel: 'msedge' });

test('EPAM client work navigation in Microsoft Edge', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/EPAM/i);

  const servicesTrigger = page
    .locator('header')
    .getByText(/^Services$/i)
    .first();

  await expect(servicesTrigger).toBeVisible();
  await servicesTrigger.hover();

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText(/Client Work/i)).toBeVisible();
});
