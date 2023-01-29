const { By, Key, Builder } = require("selenium-webdriver")
require("chromedriver")

async function searchOnGoogle(keyword) {
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://google.com")

    await driver.findElement(By.name("q")).sendKeys(keyword, Key.RETURN)

    setInterval(() => {
        driver.quit()
    }, 10000)
}

searchOnGoogle("Passionate Technologist in Afghanistan")
