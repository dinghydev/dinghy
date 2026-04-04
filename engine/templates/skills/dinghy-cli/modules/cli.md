# Cli

Dinghy CLI is a command-line tool for running Dinghy in local development to
interact with Dinghy Engine

## Usage

```sh
$ dinghy [command] [options]
```

## Commands

- devcontainer
- docker
- info
- upgrade

## Options

| Name            | Description  |
| --------------- | ------------ |
| `-v, --version` | Show version |

## Global Options

| Name                       | Description                                                                                     | Default  |
| -------------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `-h, --help`               | Show help                                                                                       |          |
| `--app-home=<value>`       | The path to the Dinghy app home directory `APP_HOME`                                            |          |
| `--engine-version=<value>` | The Dinghy Engine version to use `DINGHY_ENGINE_VERSION`                                        |          |
| `--engine-command`         | Force to run commands inside Dinghy Engine                                                      |          |
| `--debug`                  | Enable [debug](https://github.com/debug-js/debug?tab=readme-ov-file#environment-variables) mode |          |
| `--output=<value>`         | The path to the output directory                                                                | `output` |

## devcontainer

Start the project in devcontainer

### Usage

```sh
$ dinghy devcontainer [options]
$ dinghy dc [options]
```

### Options

| Name          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `--engine`    | Ignore the image detection and use the default engine image    |
| `--site`      | Ignore the image detection and use the site image              |
| `--slide`     | Ignore the image detection and use the slide image.            |
| `--skip-open` | Do not open the devcontainer. Generate .devcontainer.json only |

## docker

Docker related operations

### Usage

```sh
$ dinghy docker <command>
```

### Commands

- docker cache
- docker republish

### docker cache

Cache all related docker images locally

#### Usage

```sh
$ dinghy docker cache [options]
$ dinghy docker populate-local-cache [options]
```

#### Options

| Name                       | Description                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--include-images=<value>` | Only include these images, comma separated list of image names. If not provided, all images will be cached. |

### docker republish

Republish all related docker images from official registry to target docker
registry.

#### Usage

```sh
$ dinghy docker republish [options]
```

#### Options

| Name                    | Description                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| `--target-repo=<value>` | Target docker registry to republish images to. `DINGHY_ENGINE_REPO`                                     |         |
| `--[no]-push`           | Push the images to the target registry, otherwise the image will only be built and can be used locally. | `true`  |

## info

Show information about runtime environment and project configuration

### Usage

```sh
$ dinghy info [options]
```

## init

Create a new Dinghy project with recommended files.

### Usage

```sh
$ dinghy init [PROJECT] [options]
$ dinghy create-project [PROJECT] [options]
```

### Arguments

| Name      | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| `project` | The target folder of the project, if not provided, the current folder will be used |

### Options

| Name         | Description                       | Default |
| ------------ | --------------------------------- | ------- |
| `--[no]-git` | Init git repository if not exists | `true`  |
| `--gitlab`   | Generate GitLab .gitlab-ci.yml    |         |
| `--github`   | Generate GitHub Actions           |         |
| `--quiet`    | Quiet mode                        |         |

## upgrade

Upgrade Dinghy Cli to latest or specified version.

### Usage

```sh
$ dinghy upgrade [options]
$ dinghy up [options]
```

### Options

| Name                    | Description                                                                                              | Default  |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | -------- |
| `--version=<value>`     | The version to upgrade to                                                                                | `latest` |
| `--skip-update-project` | By default, upgrade will also update your project engine version if `.dinghyrc` exist in current folder. |          |
