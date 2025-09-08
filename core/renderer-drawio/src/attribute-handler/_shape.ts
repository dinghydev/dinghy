import type { Props } from '@dinghy/base-components'

export const _shape = (shape: string | Props) =>
  typeof shape === 'string'
    ? {
      entity: {
        style: {
          shape,
        },
      },
      group: {
        style: {
          shape,
        },
      },
    }
    : {
      entity: {
        style: {
          shape: shape.entity,
        },
      },
      group: {
        style: {
          shape: shape.group,
        },
      },
    }
