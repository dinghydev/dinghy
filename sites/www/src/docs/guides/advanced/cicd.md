---
sidebar_position: 52
---

# CI/CD

Dinghy is designed to integrate seamlessly into Continuous Integration and
Continuous Delivery (CI/CD) workflows.

## Github Action

To easily set up the Dinghy CLI in your GitHub Actions workflows, use the
[dinghydev/setup-dinghy](https://github.com/dinghydev/setup-dinghy) action.

If your `.dinghyrc` file defines a `DINGHY_ENGINE_VERSION`, this action will
automatically install the corresponding Dinghy CLI version to ensure a
consistent runtime environment.

### Default Github Action

```yml
- uses: dinghydev/setup-dinghy@v1
```

By default, this action installs the Dinghy CLI and prepares the default engine
image for use.

### For TF Operations Action

```yml
- uses: dinghydev/setup-dinghy@v1
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

### Manual Approval Changes

Set
[GITHUB_CREATE_DEPLOY_ISSUE=true](https://github.com/dinghydev/dinghy-example-cloudfront-sites/blob/main/.github/workflows/drift-detection.yml#L29C11-L29C37)
in your workflow to automatically open a deployment issue when changes are
detected. This allows you to review and approve the proposed changes before they
are applied. To proceed with the deployment, simply add the
`approved-deployment` label to the deployment issue. This will trigger the
[Drift Correction](https://github.com/dinghydev/dinghy-example-cloudfront-sites/blob/main/.github/workflows/drift-correction.yml)
workflow to apply the changes.

## Avaliable images

1. release - the engine image
1. tf - for Terraform/OpenTofu operations
1. drawio - draw.io image to convert `.drawio` file to `.png` file
1. site - to render [docusaurus.io](https://docusaurus.io/) based site
1. awscli - for operations rely on awscli
