import type { Props } from '@reactiac/base-components'

const parseStyle = (style: string | Props) => {
  const attributes: Record<string, string> = {}
  if (typeof style === 'string') {
    style.split(';').map((attr) => {
      if (attr) {
        const [key, value] = attr.split('=')
        attributes[key] = value
      }
    })
  } else if (typeof style === 'object') {
    return style as Props
  }
  return attributes
}

export const _style = (style: string | Props) => {
  if (typeof style === 'string') {
    return ({
      element: {
        style: parseStyle(style),
      },
    })
  }

  return ({
    entity: {
      style: parseStyle(style.entity as Props),
    },
    group: {
      style: parseStyle(style.group as Props),
    },
    dependency: {
      style: parseStyle(style.dependency as Props),
    },
  })
}
