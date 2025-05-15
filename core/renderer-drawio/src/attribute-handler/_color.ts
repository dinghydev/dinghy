import type { Props } from '@reactiac/base-components'

export const _color = (c: string | Props) => {
  const color = typeof c === 'string' ? c : c.color
  const fill = typeof c === 'string' ? false : c.fill
  return {
    element: {
      style: {
        strokeColor: color,
        fontColor: color,
        ...(fill ? { fillColor: color } : {}),
        ...(color === 'none' ? { noLabel: 1 } : {}),
      },
    },
  }
}
