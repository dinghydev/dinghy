# slide

Slide related operations

## Usage

```sh
$ dinghy slide <command>
```

## Commands

- slide bash
- slide build
- slide serve
- slide start

## Global Options

| Name                         | Description                                                                               | Default       |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ------------- |
| `[--docker-options=<value>]` | Additional options to pass to the docker run command `DINGHY_SLIDE_DOCKER_OPTIONS`        |               |
| `--slides-dir=<value>`       | Path to the slides directory `DINGHY_SLIDE_SLIDES_DIR`                                    | `slides`      |
| `--output-dev=<value>`       | The directory name for slide dev server in output directory `DINGHY_SLIDE_OUTPUT_DEV_DIR` | `slide-dev`   |
| `--output-build=<value>`     | The directory name for slide build in output directory `DINGHY_SLIDE_OUTPUT_BUILD_DIR`    | `slide-build` |

## slide bash

Run bash in the slide container

### Usage

```sh
$ dinghy slide bash [options]
```

## slide build

Build slides into distribution files

### Usage

```sh
$ dinghy slide build [options]
```

## slide serve

Serve built slides

### Usage

```sh
$ dinghy slide serve [options]
```

### Options

| Name             | Description       | Default |
| ---------------- | ----------------- | ------- |
| `--port=<value>` | Port to listen on | `3000`  |

## slide start

Start slides in development mode

### Usage

```sh
$ dinghy slide start [options]
```

### Options

| Name             | Description       | Default |
| ---------------- | ----------------- | ------- |
| `--port=<value>` | Port to listen on | `3000`  |
