import {Command} from '@oclif/command'

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
      default: 'https://atcoder.jp/login',
    }
  ]

  async run() {
    const {args} = this.parse(Login)

    const url = args.url
    this.log(`Login to ${url}`)
    await login(url)
  }
}
