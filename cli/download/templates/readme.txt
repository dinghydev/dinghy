# PROJECT_NAME_PLACE_HOLDER - A Dinghy Project

## Local Development

### Install Dinghy Cli

Need only once if not already done:

    curl -fsSL https://play.dinghy.dev/download/install.sh | sh

### To develop with devcontainer

    dinghy devcontainer

### To render all output fomrats

    dinghy render

### To render drawio diagram and generate png

    dinghy diagram

### To perform tf actions

    dinghy tf init
    dinghy tf plan
    dinghy tf apply

### Combined tf action

    dinghy tf diff

Which does following:
1. render --format tf
2. tf init
3. tf plan
4. Additional CICD notification and manual job triggering
