import {Command} from '@oclif/command'

import {ATCODER_URL} from '../consts'
import {login} from '../login'

export default class Login extends Command {
  static description = `login to AtCoder website.
`

  static examples = [
    '$ atcoder login'
  ]

  static args = [
    {
      name: 'url',
      required: false,
      default: `${ATCODER_URL}/login`,
    }
  ]

  async run() {
    const {args} = this.parse(Login)

    const url = args.url
    this.log(`Trying to login to ${url}.`)
    await login(url)
  }
}
