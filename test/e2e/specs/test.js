module.exports = {
  'Happy scenario' :browser => {
    browser
      .url('http://localhost:80')
      .waitForElementVisible('#app', 1000)
      .assert.containsText('h2', 'Welcome to')
      .assert.hidden('p')
      .click('button')
      .waitForElementVisible('p', 1000)
      .assert.containsText('p', 'Nightwatch')
      .end()
  }
}
