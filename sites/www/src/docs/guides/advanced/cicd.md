---
sidebar_position: 52
---

# CI/CD

Dinghy is designed to integrate seamlessly into Continuous Integration and
Continuous Delivery (CI/CD) workflows.

## Github Action

To easily set up the Dinghy CLI in your GitHub Actions workflows, use the
[dinghydev/install-dinghy-cli](https://github.com/dinghydev/install-dinghy-cli)
action.

If your `.dinghyrc` file defines a `DINGHY_ENGINE_VERSION`, this action will
automatically install the corresponding Dinghy CLI version to ensure a
consistent runtime environment.

### Default Github Action

```yml
- uses: dinghydev/install-dinghy-cli@v1
```

By default, this action installs the Dinghy CLI and prepares the default engine
image for use.

### For TF Operations Action

```yml
- uses: dinghydev/install-dinghy-cli@v1
  with:
    prepare-images: release,tf
```

If your job will use tf operations, it's recommended to prepare the image
beforehand. This allows you to obtain more accurate timing information for the
tf operations themselves.

### CI/CD Demo Project

You can view a practical example of a CI/CD pipeline using Dinghy in the
[dinghydev/dinghy-example-cloudfront-sites](https://github.com/dinghydev/dinghy-example-cloudfront-sites/actions)
demo project.

## Avaliable images

1. release - the engine image
1. tf - for Terraform/OpenTofu operations
1. drawio - draw.io image to convert `.drawio` file to `.png` file
1. site - to render [docusaurus.io](https://docusaurus.io/) based site
1. awscli - for operations rely on awscli
