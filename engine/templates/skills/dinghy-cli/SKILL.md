---
name: dinghy-cli
description: Help with Dinghy CLI commands. Use when the user asks how to use a dinghy command, needs command options, or wants to know what commands are available.
argument-hint: [command name or question]
---

Dinghy CLI runs commands locally and delegates to the Engine (a Docker
container) for most operations. All commands follow the pattern
`dinghy <command> [subcommand] [options]`.

## Loading Command Details

When the user asks about a specific command, read the corresponding module file
from the `modules/` subdirectory of this skill directory. Each module contains
the full reference: usage, arguments, options, and subcommands.

## Command Catalog

| Command               | Description                                                          | Module                    |
| --------------------- | -------------------------------------------------------------------- | ------------------------- |
| `dinghy` (cli)        | CLI tool for local development — devcontainer, docker, info, upgrade | `modules/cli.md`          |
| `dinghy aws`          | Run AWS CLI commands                                                 | `modules/aws.md`          |
| `dinghy bash`         | Run bash in engine container                                         | `modules/bash.md`         |
| `dinghy check`        | Static code analysis (fmt, lint, type, test, git)                    | `modules/check.md`        |
| `dinghy deno`         | Run deno commands in engine container                                | `modules/deno.md`         |
| `dinghy devcontainer` | Start project in VSCode devcontainer                                 | `modules/devcontainer.md` |
| `dinghy diagram`      | Render draw.io diagrams and export PNG                               | `modules/diagram.md`      |
| `dinghy gh`           | GitHub related operations                                            | `modules/gh.md`           |
| `dinghy info`         | Show runtime environment and project config                          | `modules/info.md`         |
| `dinghy init`         | Create a new Dinghy project                                          | `modules/init.md`         |
| `dinghy render`       | Render TSX files to target formats                                   | `modules/render.md`       |
| `dinghy site`         | Documentation site (Docusaurus) — start, build, deploy               | `modules/site.md`         |
| `dinghy skill`        | Install or update Dinghy skills                                      | `modules/skill.md`        |
| `dinghy slide`        | RevealJS presentations — start, build, serve                         | `modules/slide.md`        |
| `dinghy tf`           | Terraform/OpenTofu — diff, deploy, destroy, plan, init               | `modules/tf.md`           |
| `dinghy upgrade`      | Upgrade or lock Dinghy version                                       | `modules/upgrade.md`      |

## Global Options

These options are available on all commands:

| Option               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `-h, --help`         | Show help                                        |
| `--app-home=<value>` | Path to the Dinghy app home directory            |
| `--debug`            | Enable debug mode                                |
| `--output=<value>`   | Path to the output directory (default: `output`) |
