import type { OptionInput } from '@dinghy/cli'

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
  },
  {
    name: 'slide-output-dev',
    description: 'The directory name for slide dev server in output directory',
    default: 'slides-dev',
  },
  {
    name: 'slide-output-build',
    description: 'The directory name for slide build in output directory',
    default: 'slides-build',
  },
]
