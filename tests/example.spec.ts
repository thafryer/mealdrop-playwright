import { test, expect } from '@chromatic-com/playwright'

test('visit categories', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?args=&id=pages-categorydetailpage--default&viewMode=story'
  )

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/categories/)).toBeVisible()
})

test('start checkout', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?args=&id=pages-checkoutpage--with-items&viewMode=story'
  )

  // Click the get started link.
  await page.getByRole('button', { name: 'Next' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Delivery details' })).toBeVisible()
})
