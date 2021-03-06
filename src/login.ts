import cheerio = require('cheerio')
import fs = require('fs')
import got = require('got')
import path = require('path')
import {CookieJar} from 'tough-cookie'

const COOKIE_STORE_PATH = path.join(process.env.HOME as string, '.atcoder.json')

function parseCsrfToken(body: string): string {
  const $ = cheerio.load(body)
  return $('input[name="csrf_token"]').val()
}

function saveSession(jar: CookieJar, url: string) {
  const json = JSON.stringify(jar.toJSON())
  fs.writeFileSync(COOKIE_STORE_PATH, json)
}

export function restoreCookieJar(): CookieJar {
  let jar = new CookieJar()
  try {
    const json = fs.readFileSync(COOKIE_STORE_PATH, 'utf8')
    jar = CookieJar.fromJSON(json)
  } catch (e) {}
  return jar
}

interface LoginCredentials {
  username: string
  password: string,
}

function getLoginCredentials(): LoginCredentials {
  const username = process.env.ATCODER_USER
  const password = process.env.ATCODER_PASSWORD

  if (!username || !password) {
    const message = `
    Couldn't read credential!

    You must set ATCODER_USER and ATCODER_PASSWORD environment variables.
    `
    throw new Error(message)
  }

  return {username, password}
}

export async function login(loginUrl: string) {
  const cookieJar = new CookieJar()

  const res = await got.get(loginUrl, {cookieJar})
  if (res.statusCode !== 200) {
    throw new Error(`The server returns ${res.statusCode}`)
  }

  const loginCredential = getLoginCredentials()
  const csrfToken = parseCsrfToken(res.body)
  const formBody = {
    csrf_token: csrfToken,
    ...loginCredential
  }

  // XXX. Following code dit not work..
  // const postRe = await got.post(..)
  got.post(loginUrl, {
    form: true,
    body: formBody,
    throwHttpErrors: false,
    cookieJar
  })
    .then((postResponse: any) => {
      if (postResponse.statusCode === 302) {
        saveSession(cookieJar, loginUrl)
        console.log(`Hi ${loginCredential.username}, You have logged in successfully.`)
      } else {
        throw new Error(`Login failed! body=${JSON.stringify(formBody)}`)
      }
    })
}
