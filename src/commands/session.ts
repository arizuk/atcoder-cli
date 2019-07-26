import {Command} from '@oclif/command'
import got = require('got')

import {ATCODER_URL} from '../consts'
import {restoreCookieJar} from '../login'

export default class Session extends Command {
  static description = `show current session status
`

  static examples = [
    '$ atcoder session'
  ]

  static args = []

  async run() {
    const cookieJar = restoreCookieJar()
    try {
      const res = await got(ATCODER_URL, {cookieJar})
      const body = res.body
      const match = body.match(/userScreenName\s*=\s*"(.*)"/)
      const screenName = match ? match[1] : null
      if (screenName) {
        this.log(`You are logged in as ${screenName}.`)
      } else {
        this.log('You are not authenticated.')
      }
    } catch (err) {
      this.error(err.response.body)
    }
  }
}
