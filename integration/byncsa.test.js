describe('byncsa', () => {
it('visually looks correct', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:8080/iframe.html?id=assets-license-badge--by-nc-sa');
  const image = await page.screenshot();

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});
});
