# Welcome to Dinghy

Dinghy is an open source toolchain designed for your Diagram as Code and
Infrastructure as Code workflows.

## Download and install

All those powerful technologies are delivered via a simple Cli through Docker.
Under the hood, the stable Cli drive the versioned Engine to perform critical
operations in a fast, reliable and predicatable way, all based on Deno runtime
with zero language configuration.

The project embraces the spirit of a dinghy: simple, reliable and fun to sail
with.

## Prerequisites

Install the latest Dinghy Cli on your system using the terminal command:

```sh
curl -fsSL https://dinghy.dev/install.sh | sh
```

More options on the [installation](./installation.md) page

## Updating

To update a previously installed version of Dinghy Cli, you can run:

```
dinghy upgrade
```

This will fetch the latest release, unzip it, and replace your current
executable with it.

You can also use this utility to install a specific version of Deno:

```
dinghy upgrade --version 1.0.0
```
