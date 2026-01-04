# PROJECT_NAME_PLACE_HOLDER - A Dinghy Project

## Local Development

### Install Dinghy Cli

Need only once if not already done:

    curl -fsSL https://get.dinghy.dev/install.sh | sh

### To develop with devcontainer

    dinghy devcontainer

### To render all output fomrats

    dinghy render

### To perform basic tf actions

    dinghy tf init
    dinghy tf plan
    dinghy tf apply

### tf diff

    dinghy tf diff

Which does following:
1. render --format tf
2. tf init
3. tf plan
4. Additional CICD notification and manual job triggering

### tf deploy

    dinghy tf deploy

Which does following:
1. tf init
2. tf apply
3. Additional CICD notification

## Dinghy documentation

For detailed documentation and usage examples, visit: https://dinghy.dev