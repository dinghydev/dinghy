import type { Props } from '@diac/base-components'

export const _icon = (icon: string | Props) =>
  typeof icon === 'string'
    ? {
      entity: {
        style: {
          resIcon: icon,
        },
      },
      group: {
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
      group: {
        style: {
          grIcon: icon.group,
        },
      },
    }
