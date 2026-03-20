import type { CmdInput, OptionInput } from '@dinghy/cli'

export const schema: CmdInput = {
  description: 'Slide related operations',
}

export const globalOptions: OptionInput[] = [
  {
    name: 'slide-docker-options',
    description: 'Additional options to pass to the docker run command',
    multiple: true,
    env: 'DINGHY_SLIDE_DOCKER_OPTIONS',
  },
  {
    name: 'slide-slides-dir',
    description: 'Path to the slides directory',
    env: 'DINGHY_SLIDE_SLIDES_DIR',
    default: 'slides',
  },
  {
    name: 'slide-output-dev',
    description: 'The directory name for slide dev server in output directory',
    default: 'slide-dev',
    env: 'DINGHY_SLIDE_OUTPUT_DEV_DIR',
  },
  {
    name: 'slide-output-build',
    description: 'The directory name for slide build in output directory',
    default: 'slide-build',
    env: 'DINGHY_SLIDE_OUTPUT_BUILD_DIR',
  },
]
