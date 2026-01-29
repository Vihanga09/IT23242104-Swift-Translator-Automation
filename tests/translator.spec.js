import { test, expect } from '@playwright/test';
import { scenarios } from './test-data';

test.describe('Swift Translator Automation - IT23242104', () => {
  for (const scenario of scenarios) {
    test(`Test Case ${scenario.id}`, async ({ page }) => {  // ← මේ line එක හරි කරලා තියෙනවා
      // Max timeout per test: 30 seconds
      test.setTimeout(30000);
      
      // 1. Go to the site
      await page.goto('https://www.swifttranslator.com/', {
        waitUntil: 'domcontentloaded'
      });
      
      // 2. Wait for input TextArea to be visible
      const inputField = page.locator('textarea').first();
      await inputField.waitFor({ state: 'visible', timeout: 15000 });
      
      // 3. Output field selector
      const outputField = page.locator('div.bg-slate-50.rounded-lg').first();
      
      // --- UI Special Test Cases ---
      // Case: Clear Button
      if (scenario.input === "Click 'Clear' button") {
        await inputField.fill('Sample text');
        await page.click('button:has-text("Clear"), [class*="clear"]');
        expect(await inputField.inputValue()).toBe('');
        return;
      }
      
      // Case: Paragraph > 5000 chars
      if (scenario.input === '(Paragraph > 5000 chars)') {
        await inputField.fill('a'.repeat(5005));
        // Verify input was accepted (site doesn't show warning)
        const inputValue = await inputField.inputValue();
        expect(inputValue.length).toBeGreaterThanOrEqual(5000);
        return;
      }
      
      // Case: HTML tags
      if (scenario.input === 'Text with HTML tags') {
        await inputField.fill('<b>Test</b>');
        await expect(outputField).toHaveText('<b>Test</b>', { timeout: 10000 });
        return;
      }
      
      // Case: Empty input
      if (scenario.input === '') {
        await inputField.fill('');
        await expect(outputField).toHaveText('', { timeout: 5000 });
        return;
      }
      
      // --- Functional Test Cases ---
      await inputField.fill(scenario.input);
      
      // Wait for translation to complete
      await page.waitForTimeout(3000);
      
      // Wait until output text appears
      await expect(outputField).toHaveText(scenario.expected, { timeout: 20000 });
    });
  }
});