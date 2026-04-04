# tf

Terraform/OpenTofu related operations

## Usage

```sh
$ dinghy tf <command>
```

## Commands

- tf apply
- tf bash
- tf deploy
- tf destroy
- tf diff
- tf init
- tf plan
- tf render
- tf up

## Global Options

| Name                            | Description                                                                        |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `[--tf-docker-options=<value>]` | Additional options to pass to the tf docker run command `DINGHY_TF_DOCKER_OPTIONS` |

## tf apply

Run `terraform apply` command for selected stacks

### Usage

```sh
$ dinghy tf apply [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                               | Description                | Default |
| ---------------------------------- | -------------------------- | ------- |
| `--diff-changes-max-lines=<value>` | Max lines of diff changes  | `10`    |
| `--lock`                           | Lock the state during plan | `true`  |

## tf bash

Run bash/tofu/terraform with tf image on selected stack

### Usage

```sh
$ dinghy tf bash [STACK] [options]
$ dinghy tf tofu [STACK] [options]
$ dinghy tf terraform [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Examples

To execute `tofu state list`, run:

```sh
dinghy tf tofu -- state list
```

The `--` is used to pass arguments to the tofu command otherwise it will be
interpreted as a dinghy parameters.

## tf deploy

Combined init and apply commands.

### Usage

```sh
$ dinghy tf deploy [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                               | Description                                                                         | Default |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `--auto-create-backend`            | Auto create backend bucket if it doesn't exist `DINGHY_TF_INIT_AUTO_CREATE_BACKEND` |         |
| `--diff-changes-max-lines=<value>` | Max lines of diff changes                                                           | `10`    |
| `--lock`                           | Lock the state during plan                                                          | `true`  |

## tf destroy

Run `terraform destroy` command for selected stacks

### Usage

```sh
$ dinghy tf destroy [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                 | Description                        |
| -------------------- | ---------------------------------- |
| `-a, --auto-approve` | Auto approve the destroy operation |

## tf diff

Combined render, init and plan commands.

### Usage

```sh
$ dinghy tf diff [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                               | Description                                                                         | Default |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `--auto-create-backend`            | Auto create backend bucket if it doesn't exist `DINGHY_TF_INIT_AUTO_CREATE_BACKEND` |         |
| `--diff-changes-max-lines=<value>` | Max lines of diff changes                                                           | `10`    |
| `--lock`                           | Lock the state during plan                                                          | `false` |

## tf init

Run `terraform init` command for selected stacks

### Usage

```sh
$ dinghy tf init [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                    | Description                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `--auto-create-backend` | Auto create backend bucket if it doesn't exist `DINGHY_TF_INIT_AUTO_CREATE_BACKEND` |

## tf plan

Run `terraform plan` command for selected stacks

### Usage

```sh
$ dinghy tf plan [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                               | Description                | Default |
| ---------------------------------- | -------------------------- | ------- |
| `--diff-changes-max-lines=<value>` | Max lines of diff changes  | `10`    |
| `--lock`                           | Lock the state during plan | `false` |

## tf render

Render tf.json files for selected stacks

### Usage

```sh
$ dinghy tf render [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

## tf up

Combined render, init, plan and apply commands.

### Usage

```sh
$ dinghy tf up [STACK] [options]
```

### Arguments

| Name    | Description |
| ------- | ----------- |
| `stack` | Stack name  |

### Options

| Name                               | Description                                                                         | Default |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------- |
| `--auto-create-backend`            | Auto create backend bucket if it doesn't exist `DINGHY_TF_INIT_AUTO_CREATE_BACKEND` |         |
| `--diff-changes-max-lines=<value>` | Max lines of diff changes                                                           | `10`    |
| `--lock`                           | Lock the state during plan                                                          | `true`  |
