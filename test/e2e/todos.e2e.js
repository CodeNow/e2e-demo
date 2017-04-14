const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until
const Key = webdriver.Key
const TimeUnit = webdriver.TimeUnit

const chai = require('chai')
const expect = chai.expect
let driver

if (process.env.NODE_ENV === 'docker') {
  driver = new webdriver.Builder()
    .usingServer('http://chrome:4444/wd/hub/')
    .forBrowser('chrome')
    .build()
} else {
  driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()
}


describe('todo app', () => {
  before(function () {
    this.timeout(10000)
    return driver.navigate().to(process.env.WEB_URL || 'http://localhost')
  })

  it('renders the proper notification', () => {
    return Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  })

  it('can add a todo', () => {
    return Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  })

  it('can remove a todo', () => {
    return Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  })

  after(() => {
    return driver.quit()
  })
})
