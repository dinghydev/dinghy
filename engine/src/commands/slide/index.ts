import type { CmdInput, OptionInput } from '@dinghy/cli'

export const schema: CmdInput = {
  description: 'Slide related operations',
}

export const globalOptions: OptionInput[] = [
  {
    name: 'docker-options',
    description: 'Additional options to pass to the docker run command',
    multiple: true,
    env: 'DINGHY_SLIDE_DOCKER_OPTIONS',
  },
  {
    name: 'slides-dir',
    description: 'Path to the slides directory',
    env: 'DINGHY_SLIDE_SLIDES_DIR',
    default: 'slides',
  },
  {
    name: 'filter',
    description:
      'Only process slides whose name contains the filter or is contained by the filter',
    env: 'DINGHY_SLIDE_FILTER',
  },
  {
    name: 'output-dev',
    description: 'The directory name for slide dev server in output directory',
    default: 'slide-dev',
    env: 'DINGHY_SLIDE_OUTPUT_DEV_DIR',
  },
  {
    name: 'output-build',
    description: 'The directory name for slide build in output directory',
    default: 'slide-build',
    env: 'DINGHY_SLIDE_OUTPUT_BUILD_DIR',
  },
]
