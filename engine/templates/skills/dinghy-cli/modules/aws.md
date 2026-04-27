# aws

Run aws command with awscli image

## Usage

```sh
$ dinghy aws [command] [options]
```

## Commands

- aws bash
- aws connect
- aws list

## Examples

To execute `aws s3 ls`, run:

```sh
dinghy aws s3 ls
```

## aws bash

Run bash command with awscli image

### Usage

```sh
$ dinghy aws bash [options]
```

## aws connect

Connect to a specific instance in the stack

### Usage

```sh
$ dinghy aws connect [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name               | Description                                                                         | Default |
| ------------------ | ----------------------------------------------------------------------------------- | ------- |
| `-i, --id=<value>` | The id to connect to, could be sequence number, instance id (EC2), or task id (ECS) | `1`     |

## aws list

List connectable instances in the stack

### Usage

```sh
$ dinghy aws list [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |
