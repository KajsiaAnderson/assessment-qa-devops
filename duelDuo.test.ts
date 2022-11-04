
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = title.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(3000)
})

test("draw button displays choices id", async () => {
    await driver.findElement(By.id('draw')).click()
    const robots = await driver.findElement(By.id('choices'))
    const displayed = robots.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(3000)
})

test("add duo button displays id", async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const display = playerDuo.isDisplayed()
    expect(display).toBeTruthy()
    await driver.sleep(3000)
})
