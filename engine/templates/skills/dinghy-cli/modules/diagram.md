# diagram

Render drawio files and generate png outputs

## Usage

```sh
$ dinghy diagram [command] [STACK] [options]
```

## Commands

- diagram png

## Arguments

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| `stack` | Stack name or tsx file name. If not specified, all stacks will be rendered |

## Options

| Name                                | Description                                                     |
| ----------------------------------- | --------------------------------------------------------------- |
| `--delete-drawio-file-after-render` | Delete the drawio file after successful generation the png file |

## diagram png

Generate png from drawio file

### Usage

```sh
$ dinghy diagram png [STACK] [options]
```

### Arguments

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| `stack` | Stack name or tsx file name. If not specified, all stacks will be rendered |

### Options

| Name                                | Description                                                     |
| ----------------------------------- | --------------------------------------------------------------- |
| `[-f, --file=<value>]`              | Path to the drawio file                                         |
| `--delete-drawio-file-after-render` | Delete the drawio file after successful generation the png file |
