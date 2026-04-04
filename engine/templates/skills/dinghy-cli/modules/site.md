# site

Run docusaurus command with arbitrary arguments.

## Usage

```sh
$ dinghy site [command] [options]
```

## Commands

- site bash
- site build
- site deploy
- site serve
- site start

## Global Options

| Name                              | Description                                                                                                   | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| `[--site-docker-options=<value>]` | Additional options to pass to the docker run command `DINGHY_SITE_DOCKER_OPTIONS`                             |         |
| `--site-dir=<value>`              | Path to the site base directory, default to site directory in app home if exists, otherwise current directory |         |
| `--site-build-dir=<value>`        | The build directory in output directory                                                                       | `site`  |
| `--port=<value>`                  | Port to listen on                                                                                             |         |

## Examples

To execute `docusaurus swizzle --list`, run:

```sh
dinghy site swizzle --list
```

## site bash

Run bash in the docusaurus container

### Usage

```sh
$ dinghy site bash [options]
```

## site build

Build site into static files

### Usage

```sh
$ dinghy site build [options]
```

## site deploy

Deploy site

### Usage

```sh
$ dinghy site deploy [options]
```

## site serve

Serve built static site

### Usage

```sh
$ dinghy site serve [options]
```

### Options

| Name             | Description       | Default |
| ---------------- | ----------------- | ------- |
| `--port=<value>` | Port to listen on | `3000`  |

## site start

Start site in development mode

### Usage

```sh
$ dinghy site start [options]
```

### Options

| Name             | Description       | Default |
| ---------------- | ----------------- | ------- |
| `--port=<value>` | Port to listen on | `3000`  |
