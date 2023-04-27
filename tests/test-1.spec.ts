import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'How to run the example test' }).click();
  await page.getByText('npx playwright').nth(1).click();
  await page.getByRole('img', { name: 'HTML Reporter' }).click();
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await page.getByRole('link', { name: 'Test configuration', exact: true }).click();
  await page.getByRole('link', { name: 'Test configuration', exact: true }).click();
  await page.getByText('Test configurationTest use optionsAnnotationsCommand lineEmulationFixturesGlobal').click();

});