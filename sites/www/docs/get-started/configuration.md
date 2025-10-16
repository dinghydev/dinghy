---
sidebar_position: 90
---

# Configuration

We strive to offer zero configuration out of box to get started. So all options
optimimised with sensible default values. When you want more control, we do
offer flexible configuration options.

## Run control files

Dinghy Cli/Engine will load key value pairs (KEY=VALUE) into process
envivironment variables if not already defined from following files in order:

1. `.dinghyrc.local`
1. `.dinghyrc`
1. `~/.dinghyrc`

The loaded environment variable can be used by Cli/Engine or application in
later stages.

## Config priority

We take the global option `--engine-version` as an example to illustrate the
format and location you can provide config, the smaller number has higher
priority:

1. Command line options: `--engine-version 1`
1. Environment variables: `export DINGHY_ENGINE_VERSION=2`
1. `.dinghyrc.local`: `DINGHY_ENGINE_VERSION=3`
1. `.dinghyrc`: `DINGHY_ENGINE_VERSION=4`
1. `~/.dinghyrc`: `DINGHY_ENGINE_VERSION=5`
1. `dinghy.config.yaml`: `engine.version: 6`

## Useful config options

### engine.version

The Dinghy Cli will use Engine from same release as the Cli by default.

It's recommended to lock Engine version once development settled to have stable
operation for long term maintainance.

Once the version been locked, the Cli will alway use the same Engine always. So
you can expect nothing will change by running the same command even with
different Cli version.

### engine.repo

The Dinghy docker images can be cloned with `dinghy docker clone` to a private
docker registry for increased reliability or custom network topology. You may
override the default Engine docker repository `dinghydev/dinghy` if you have the
image cloned.
