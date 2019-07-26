# atcoder-cli
atcoder-cli is a my utility tool to support daily practice in atcoder.

# Usage
<!-- usage -->
```sh-session
$ npm install -g atcoder
$ atcoder COMMAND
running command...
$ atcoder (-v|--version|version)
atcoder/0.0.0 darwin-x64 node-v12.4.0
$ atcoder --help [COMMAND]
USAGE
  $ atcoder COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`atcoder download_testcases URL_OR_FILE`](#atcoder-download-testcases-url-or-file)
* [`atcoder help [COMMAND]`](#atcoder-help-command)
* [`atcoder login [URL]`](#atcoder-login-url)
* [`atcoder session`](#atcoder-session)

## `atcoder download_testcases URL_OR_FILE`

extarct and save the test cases from a given problem url

```
USAGE
  $ atcoder download_testcases URL_OR_FILE

ARGUMENTS
  URL_OR_FILE  A problem page url or a local file path

EXAMPLE
  $ atcoder download_testcases https://atcoder.jp/contests/agc020/tasks/agc020_a
```

_See code: [src/commands/download_testcases.ts](https://github.com/arizuk/atcoder-cli/blob/v0.0.0/src/commands/download_testcases.ts)_

## `atcoder help [COMMAND]`

display help for atcoder

```
USAGE
  $ atcoder help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `atcoder login [URL]`

login to AtCoder website.

```
USAGE
  $ atcoder login [URL]

EXAMPLE
  $ atcoder login
```

_See code: [src/commands/login.ts](https://github.com/arizuk/atcoder-cli/blob/v0.0.0/src/commands/login.ts)_

## `atcoder session`

show current session status

```
USAGE
  $ atcoder session

EXAMPLE
  $ atcoder session
```

_See code: [src/commands/session.ts](https://github.com/arizuk/atcoder-cli/blob/v0.0.0/src/commands/session.ts)_
<!-- commandsstop -->
