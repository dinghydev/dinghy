import type { Props } from '@diac/base-components'

const STYLE_CATEGORIES = ['entity', 'group', 'dependency', 'element']

const handleStringStyle = (
  style: any,
  stringStyle: string,
) => {
  if (stringStyle.includes('waf')) {
    // debugger
  }
  stringStyle.split(';').map((attr) => {
    if (attr) {
      const [key, value] = attr.split('=')
      style[key] = value
    }
  })
}

const parseStyle = (
  attributes: any,
  style: string | Props,
) => {
  if (typeof style === 'string') {
    handleStringStyle(attributes.element.style, style)
  } else if (typeof style === 'object') {
    Object.entries(style).map(([key, value]) => {
      if (!STYLE_CATEGORIES.includes(key)) {
        attributes.element.style[key] = value as string
      }
    })
    STYLE_CATEGORIES.map((type) => {
      const value = style[type]
      if (value) {
        if (typeof value === 'string') {
          handleStringStyle(attributes[type].style, value)
        } else {
          Object.entries(value).map(([key, value]) => {
            attributes[type].style[key] = value as string
          })
        }
      }
    })
  } else {
    throw new Error(`Style is not string or object:[${style}]`)
  }
}

export const _style = (style: any) => {
  const attributes = {
    element: {
      style: {},
    },
    entity: {
      style: {},
    },
    group: {
      style: {},
    },
    dependency: {
      style: {},
    },
  }
  if (Array.isArray(style)) {
    style.map((item) => {
      parseStyle(attributes, item)
    })
  } else {
    parseStyle(attributes, style)
  }
  return attributes
}
