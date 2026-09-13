import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', title: /Nils' notes/ },
  { path: '/blog/', title: /Blog \| Nils' notes/ },
  { path: '/posts/scaling-stories-from-discord/', title: /Scaling Stories from Discord/ },
  { path: '/posts/gap-attribute-is-not-grid-exclusive/', title: /gap.*property.*Grid|CSS.*gap/i },
];

test.describe('static site smoke tests', () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.path} loads with canonical and noindex metadata`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await expect(page).toHaveTitle(pageInfo.title);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/nilsandrey\.com\//);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
      await expect(page.locator('body')).toContainText("Nils' notes");
    });
  }

  test('homepage assets load', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="stylesheet"]')).toHaveAttribute('href', '/assets/css/site.css');
    await expect(page.locator('img[alt="Hacker News"]')).toHaveAttribute('src', '/img/hn.svg');
    await expect(page.locator('img[alt="Bluesky"]')).toHaveAttribute('src', '/img/bsky.svg');
  });

  test('blog links to post pages', async ({ page }) => {
    await page.goto('/blog/');
    await expect(page.getByRole('link', { name: 'Scaling Stories from Discord' })).toHaveAttribute('href', '/posts/scaling-stories-from-discord/');
    await expect(page.getByRole('link', { name: 'The CSS "gap" property is not only for Grid' })).toHaveAttribute('href', '/posts/gap-attribute-is-not-grid-exclusive/');
  });
});
