# PROJECT_NAME_PLACE_HOLDER - A DIaC Project

## Local Development

### Install DIaC Cli

Need only once if not already done:

    curl -fsSL https://play.diac.dev/download/install.sh | sh

### To develop with devcontainer

    diac devcontainer

### To render all output fomrats

    diac render

### To render drawio diagram and generate png

    diac diagram

### To perform tf actions

    diac tf init
    diac tf plan
    diac tf apply

### Combined tf action

    diac tf diff

Which does following:
1. render --format tf
2. tf init
3. tf plan
4. Additional CICD notification and manual job triggering
