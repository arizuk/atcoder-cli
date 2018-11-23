# atcoder-cli
atcoder-cli is a my utility tool to support daily practice in the atcoder.

# Usage
<!-- usage -->
```sh-session
$ npm install -g atcoder
$ atcoder COMMAND
running command...
$ atcoder (-v|--version|version)
atcoder/0.0.0 linux-x64 node-v10.8.0
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

## `atcoder download_testcases URL_OR_FILE`

parse and save testcases from given problem resource

```
USAGE
  $ atcoder download_testcases URL_OR_FILE

ARGUMENTS
  URL_OR_FILE  A problem page url or a local file path

EXAMPLE
  $ atcoder download_testcases https://beta.atcoder.jp/contests/agc020/tasks/agc020_a
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

login to specified url.

```
USAGE
  $ atcoder login [URL]

DESCRIPTION
  Currently only beta.atcoder.jp is supported as the url.

EXAMPLE
  $ atcoder login
```

_See code: [src/commands/login.ts](https://github.com/arizuk/atcoder-cli/blob/v0.0.0/src/commands/login.ts)_
<!-- commandsstop -->
