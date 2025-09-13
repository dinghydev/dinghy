import type { Props } from '@dinghy/base-components'

export const _shape = (shape: string | Props) =>
  typeof shape === 'string'
    ? {
      entity: {
        style: {
          shape,
        },
      },
      container: {
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
      container: {
        style: {
          shape: shape.container,
        },
      },
    }
