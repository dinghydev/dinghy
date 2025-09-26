---
sidebar_position: 10
---

# Installation

## Prerequisites

The prerequisites listed below (Shell environment, unzip or 7z, and Docker) are
commonly used by developers and widely available on most platforms.

### Shell environment

The Shell installer can be used on Windows with
[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about),
[MSYS](https://www.msys2.org) or equivalent set of tools.

### Unzip or 7z

To decompress the `dinghy` archive, one of either
[`unzip`](https://linux.die.net/man/1/unzip) or
[`7z`](https://linux.die.net/man/1/7z) must be available on the target system.
You can install unzip via `brew install unzip` on MacOS or
`sudo apt-get install unzip -y` on Linux.

### Docker

Docker is not required during installation, however it's required during runtime
as it's the fundation of how we delivery the software packages. You may install
Docker from https://docs.docker.com/get-started/get-docker/

## Install

Install the latest Dinghy Cli on your system using the terminal command:

```bash
curl -fsSL https://dinghy.dev/install.sh | sh
```

It will

1. use `curl` to download the platform specific zip package
2. unzip use `unzip` or `7z` to target installation location
3. run `dinghy postinstall` to complete the installation process

### Install options

The installation script taken additional options from environment variables for
advanced use cases e.g. to install specific version of Dinghy Cli:

```bash
curl -fsSL https://dinghy.dev/install.sh | DINGHY_VERSION=1.2.3 sh
```

| Name             | Default         | Description                   |
| ---------------- | --------------- | ----------------------------- |
| `DINGHY_HOME`    | `$HOME/.dinghy` | Installation target folder    |
| `DINGHY_VERSION` | `latest`        | Dinghy Cli version to install |

## Upgrade

To update a previously installed version of Dinghy Cli, you can run:

```
dinghy upgrade
```

This will fetch the latest release, unzip it, and replace your current
executable with it.

### Upgrade options

| Name               | Default  | Description                                                                                                                                                                |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--version`        | `latest` | Dinghy Cli version to upgrade to                                                                                                                                           |
| `--update-project` | `true`   | By default, `dinghy upgrade` will also update your project engine version if `dinghy.config.yaml` exist in current folder. You may pass `--no--update-project` to skip it. |
