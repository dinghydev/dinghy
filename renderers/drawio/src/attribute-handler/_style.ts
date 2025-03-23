import type { Props } from '@reactiac/base-components'

export const _style = (style: Props) => ({
  element: {
    style: style.element,
  },
  entity: {
    style: style.entity,
  },
  group: {
    style: {
      shape: style.group,
    },
  },
})
