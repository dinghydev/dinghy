import type { ReactElement } from 'react'
import type { HostContainer, Output } from '@reactiac/base-renderer'
import type { DrawioNodeTree, DrawioRenderOptions } from './types.ts'
import { encode } from 'html-entities'

const renderValue = (value: unknown): unknown => {
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>
    const stringValue = Object.keys(obj)
      .map((key) => {
        const val = obj[key]
        if (typeof val === 'undefined') {
          return key
        } else if (val === 'DELETED') {
          return null
        } else {
          return `${key}=${val}`
        }
      })
      .filter(Boolean)
      .join(';')
    if (stringValue.length > 0) {
      return stringValue + ';'
    }
    return undefined
  }
  return value
}

const renderProps = (
  props: Record<string, unknown>,
  padding: string,
): string => {
  const propsStr = Object.keys(props)
    .map((key) => {
      let value = renderValue(props[key])
      if (value === undefined) {
        return null
      }
      if (key === 'value' && typeof value === 'string') {
        value = encode(value)
      }
      return `${key}="${value}"`
    })
    .filter(Boolean)
    .join(` \n${padding}  `)
  return propsStr.length > 0 ? `\n${padding}  ${propsStr}\n${padding}  ` : ''
}

const convertToXml = (element: ReactElement, padding: string): string => {
  const { children, _node, ...props } = element.props as {
    children: ReactElement[]
    _node: DrawioNodeTree
    [key: string]: unknown
  }
  const propsString = renderProps(props, padding)
  const tag = element.type
  if (children?.length > 0) {
    const childrenString = children
      .map((c: ReactElement) => convertToXml(c, `${padding}  `))
      .join('')
    return `\n${padding}<${tag}${propsString}>${childrenString}\n${padding}  </${tag}>`
  }
  return `\n${padding}<${tag}${propsString}/>`
}

export const toDrawioXml = (
  container: HostContainer<string, DrawioRenderOptions>,
): Output<string> => {
  //todo: to generate xml model first instead use string concatenation
  container.result = convertToXml(
    container.rootElement as ReactElement,
    '',
  ).trim()
  container.model = container.rootElement
  return container
}
