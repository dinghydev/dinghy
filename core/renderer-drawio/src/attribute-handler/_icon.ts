import type { Props } from '@dinghy/base-components'

export const _icon = (icon: string | Props) =>
  typeof icon === 'string'
    ? {
      entity: {
        style: {
          resIcon: icon,
        },
      },
      container: {
        style: {
          grIcon: icon,
        },
      },
    }
    : {
      entity: {
        style: {
          resIcon: icon.entity,
        },
      },
      container: {
        style: {
          grIcon: icon.container,
        },
      },
    }
