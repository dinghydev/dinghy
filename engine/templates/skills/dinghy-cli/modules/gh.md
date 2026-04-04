# gh

GitHub related operations

## Usage

```sh
$ dinghy gh <command>
```

## Commands

- gh prepare

## gh prepare

Prepares the GitHub workflow based on incoming event data. Extracts the issue
number and action run ID from the event payload and sets them as environment
variables. This is utilized by the
[dinghydev/setup-dinghy](https://github.com/dinghydev/setup-dinghy/blob/main/action.yml)
GitHub Action.

### Usage

```sh
$ dinghy gh prepare [options]
```
