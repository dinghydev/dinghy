import type { DisplayStringType } from '@dinghy/base-components'
import type { DrawioRenderOptions } from '../types.ts'

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
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  },
  inactive: {
    container: {
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
