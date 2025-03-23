import type { ReactElement } from 'react'
import type { HostContainer, Output } from '@reactiac/base-renderer'
import type { DrawioNodeTree, DrawioRenderOptions } from './types.js'

const renderValue = (value: unknown): unknown => {
  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>
    return Object.keys(obj)
      .map((key) => {
        const val = obj[key]
        return typeof val !== 'undefined' ? `${key}=${val}` : null
      })
      .filter(Boolean)
      .join(';')
  }
  return value
}

const renderProps = (
  props: Record<string, unknown>,
  padding: string,
): string => {
  const propsStr = Object.keys(props)
    .map((key) => `${key}="${renderValue(props[key])}"`)
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
  container.result = convertToXml(container.rootElement as ReactElement, '').trim()
  return container
}
