import { test, expect } from '@playwright/test';

test.use({ channel: 'msedge' });

test('EPAM client work navigation in Microsoft Edge', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  const servicesMenu = page.getByRole('menuitem', { name: /^Services$/i });
  await servicesMenu.hover();

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
