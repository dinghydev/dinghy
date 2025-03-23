import type { DisplayStringType } from '@reactiac/base-components'
import type { DrawioRenderOptions } from '../types.js'

const DISPLAYS = {
  none: {
    flags: {
      isHidden: true,
    },
  },
  invisible: {
    element: {
      style: {
        noLabel: 1,
        opacity: 0,
      },
    },
    dimension: {
      boxWidth: 0,
      boxHeight: 0,
      textHeight: 0,
      spaceX: 0,
      spaceY: 0,
    },
  },
  inactive: {
    group: {
      style: {
        dashed: 1,
      },
    },
    dependency: {
      style: {
        dashed: 1,
      },
    },
  },
  entity: {
    flags: {
      isEntity: true,
    },
  },
}

export const _display = (
  display: DisplayStringType,
  options: DrawioRenderOptions,
) => {
  if ((options as any).view?.name !== 'all') {
    return DISPLAYS[display as keyof typeof DISPLAYS]
  }
}
