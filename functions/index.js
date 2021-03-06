const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

const config = {
  dev: false,
  buildDir: 'ssr',
}

const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

const devPortfolioEnvs = functions.config().dev_portfolio

if (devPortfolioEnvs.portfolio_env === 'dev') {
  app.all('/*', basicAuth(devPortfolioEnvs.basic_auth_username, devPortfolioEnvs.basic_auth_password))
}

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
