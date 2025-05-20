# PROJECT_NAME_PLACE_HOLDER - A ReactIAC Project

## Local Development

### Install ReactIAC Cli

Need only once if not already done:

    curl -fsSL https://play.reactiac.dev/download/install.sh | sh

### To develop with devcontainer

    reactiac devcontainer

### To render all output fomrats

    reactiac render

### To render drawio diagram and generate png

    reactiac diagram

### To perform tf actions

    reactiac tf init
    reactiac tf plan
    reactiac tf apply

### Combined tf action

    reactiac tf diff

Which does following:
1. render --format tf 
2. tf init
3. tf plan
4. Additional CICD notification and manual job triggering