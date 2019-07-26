import {Command} from '@oclif/command'
import fs = require('fs')
import got = require('got')

import {restoreCookieJar} from '../login'
import {parseBodyAndSaveTestcases} from '../testcase'

function handleLocalFile(path: string) {
  const body = fs.readFileSync(path, 'utf8')
  parseBodyAndSaveTestcases(body)
}

async function handleUrl(url: string) {
  console.log(`Download testcases from ${url}.`)
  const cookieJar = restoreCookieJar()
  const res = await got(url, {cookieJar})
  if (res.statusCode == 200) {
    parseBodyAndSaveTestcases(res.body)
  } else {
    throw new Error(`The server returns ${res.statusCode}`)
  }
}

export default class Login extends Command {
  static description = 'extarct and save the test cases from a given problem url'

  static examples = [
    '$ atcoder download_testcases https://atcoder.jp/contests/agc020/tasks/agc020_a'
  ]

  static args = [
    {
      name: 'url_or_file',
      required: true,
      description: 'A problem page url or a local file path'
    }
  ]

  async run() {
    const {args} = this.parse(Login)
    const urlOrFile = args.url_or_file
    if (urlOrFile.match(/^http/)) {
      await handleUrl(urlOrFile)
    } else {
      handleLocalFile(urlOrFile)
    }
  }
}
