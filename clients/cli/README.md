mynewcli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @reactiac/cli
$ reactiac COMMAND
running command...
$ reactiac (--version)
@reactiac/cli/0.0.0 linux-arm64 node-v22.14.0
$ reactiac --help [COMMAND]
USAGE
  $ reactiac COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`reactiac diagram gen`](#reactiac-diagram-gen)
* [`reactiac diagram generate`](#reactiac-diagram-generate)
* [`reactiac hello PERSON`](#reactiac-hello-person)
* [`reactiac hello world`](#reactiac-hello-world)
* [`reactiac help [COMMAND]`](#reactiac-help-command)
* [`reactiac json gen`](#reactiac-json-gen)
* [`reactiac json generate`](#reactiac-json-generate)
* [`reactiac plugins`](#reactiac-plugins)
* [`reactiac plugins add PLUGIN`](#reactiac-plugins-add-plugin)
* [`reactiac plugins:inspect PLUGIN...`](#reactiac-pluginsinspect-plugin)
* [`reactiac plugins install PLUGIN`](#reactiac-plugins-install-plugin)
* [`reactiac plugins link PATH`](#reactiac-plugins-link-path)
* [`reactiac plugins remove [PLUGIN]`](#reactiac-plugins-remove-plugin)
* [`reactiac plugins reset`](#reactiac-plugins-reset)
* [`reactiac plugins uninstall [PLUGIN]`](#reactiac-plugins-uninstall-plugin)
* [`reactiac plugins unlink [PLUGIN]`](#reactiac-plugins-unlink-plugin)
* [`reactiac plugins update`](#reactiac-plugins-update)
* [`reactiac tf apply [FILE]`](#reactiac-tf-apply-file)
* [`reactiac tf gen [FILE]`](#reactiac-tf-gen-file)
* [`reactiac tf generate [FILE]`](#reactiac-tf-generate-file)
* [`reactiac tf gip [FILE]`](#reactiac-tf-gip-file)
* [`reactiac tf init [FILE]`](#reactiac-tf-init-file)
* [`reactiac tf plan [FILE]`](#reactiac-tf-plan-file)

## `reactiac diagram gen`

Generate drawio diagram from app

```
USAGE
  $ reactiac diagram gen [--app-home <value>] [--app-file <value>] [--app-options <value>] [--app-output-dir
    <value>] [--png] [--drawio-cmd <value>]

FLAGS
  --app-file=<value>        [default: App.js]
  --app-home=<value>
  --app-options=<value>     [default: app.yaml]
  --app-output-dir=<value>  [default: output]
  --drawio-cmd=<value>      drawio command full path
  --[no-]png                generate png diagram

DESCRIPTION
  Generate drawio diagram from app

ALIASES
  $ reactiac diagram gen
```

## `reactiac diagram generate`

Generate drawio diagram from app

```
USAGE
  $ reactiac diagram generate [--app-home <value>] [--app-file <value>] [--app-options <value>] [--app-output-dir
    <value>] [--png] [--drawio-cmd <value>]

FLAGS
  --app-file=<value>        [default: App.js]
  --app-home=<value>
  --app-options=<value>     [default: app.yaml]
  --app-output-dir=<value>  [default: output]
  --drawio-cmd=<value>      drawio command full path
  --[no-]png                generate png diagram

DESCRIPTION
  Generate drawio diagram from app

ALIASES
  $ reactiac diagram gen
```

_See code: [src/commands/diagram/generate.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/diagram/generate.ts)_

## `reactiac hello PERSON`

Say hello

```
USAGE
  $ reactiac hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ reactiac hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/hello/index.ts)_

## `reactiac hello world`

Say hello world

```
USAGE
  $ reactiac hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ reactiac hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/hello/world.ts)_

## `reactiac help [COMMAND]`

Display help for reactiac.

```
USAGE
  $ reactiac help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for reactiac.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.26/src/commands/help.ts)_

## `reactiac json gen`

Generate json model from app

```
USAGE
  $ reactiac json gen [--app-home <value>] [--app-file <value>] [--app-options <value>] [--app-output-dir
    <value>] [--png] [--drawio-cmd <value>]

FLAGS
  --app-file=<value>        [default: App.js]
  --app-home=<value>
  --app-options=<value>     [default: app.yaml]
  --app-output-dir=<value>  [default: output]
  --drawio-cmd=<value>      drawio command full path
  --[no-]png                generate png diagram

DESCRIPTION
  Generate json model from app

ALIASES
  $ reactiac json gen
```

## `reactiac json generate`

Generate json model from app

```
USAGE
  $ reactiac json generate [--app-home <value>] [--app-file <value>] [--app-options <value>] [--app-output-dir
    <value>] [--png] [--drawio-cmd <value>]

FLAGS
  --app-file=<value>        [default: App.js]
  --app-home=<value>
  --app-options=<value>     [default: app.yaml]
  --app-output-dir=<value>  [default: output]
  --drawio-cmd=<value>      drawio command full path
  --[no-]png                generate png diagram

DESCRIPTION
  Generate json model from app

ALIASES
  $ reactiac json gen
```

_See code: [src/commands/json/generate.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/json/generate.ts)_

## `reactiac plugins`

List installed plugins.

```
USAGE
  $ reactiac plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ reactiac plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/index.ts)_

## `reactiac plugins add PLUGIN`

Installs a plugin into reactiac.

```
USAGE
  $ reactiac plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into reactiac.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the REACTIAC_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the REACTIAC_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ reactiac plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ reactiac plugins add myplugin

  Install a plugin from a github url.

    $ reactiac plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ reactiac plugins add someuser/someplugin
```

## `reactiac plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ reactiac plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ reactiac plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/inspect.ts)_

## `reactiac plugins install PLUGIN`

Installs a plugin into reactiac.

```
USAGE
  $ reactiac plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into reactiac.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the REACTIAC_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the REACTIAC_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ reactiac plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ reactiac plugins install myplugin

  Install a plugin from a github url.

    $ reactiac plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ reactiac plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/install.ts)_

## `reactiac plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ reactiac plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ reactiac plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/link.ts)_

## `reactiac plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ reactiac plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reactiac plugins unlink
  $ reactiac plugins remove

EXAMPLES
  $ reactiac plugins remove myplugin
```

## `reactiac plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ reactiac plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/reset.ts)_

## `reactiac plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ reactiac plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reactiac plugins unlink
  $ reactiac plugins remove

EXAMPLES
  $ reactiac plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/uninstall.ts)_

## `reactiac plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ reactiac plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reactiac plugins unlink
  $ reactiac plugins remove

EXAMPLES
  $ reactiac plugins unlink myplugin
```

## `reactiac plugins update`

Update installed plugins.

```
USAGE
  $ reactiac plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/update.ts)_

## `reactiac tf apply [FILE]`

describe the command here

```
USAGE
  $ reactiac tf apply [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ reactiac tf apply
```

_See code: [src/commands/tf/apply.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/tf/apply.ts)_

## `reactiac tf gen [FILE]`

describe the command here

```
USAGE
  $ reactiac tf gen [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

ALIASES
  $ reactiac tf gen

EXAMPLES
  $ reactiac tf gen
```

## `reactiac tf generate [FILE]`

describe the command here

```
USAGE
  $ reactiac tf generate [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

ALIASES
  $ reactiac tf gen

EXAMPLES
  $ reactiac tf generate
```

_See code: [src/commands/tf/generate.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/tf/generate.ts)_

## `reactiac tf gip [FILE]`

describe the command here

```
USAGE
  $ reactiac tf gip [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ reactiac tf gip
```

_See code: [src/commands/tf/gip.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/tf/gip.ts)_

## `reactiac tf init [FILE]`

describe the command here

```
USAGE
  $ reactiac tf init [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ reactiac tf init
```

_See code: [src/commands/tf/init.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/tf/init.ts)_

## `reactiac tf plan [FILE]`

describe the command here

```
USAGE
  $ reactiac tf plan [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ reactiac tf plan
```

_See code: [src/commands/tf/plan.ts](https://github.com/reactiac/reactiac/blob/v0.0.0/src/commands/tf/plan.ts)_
<!-- commandsstop -->
