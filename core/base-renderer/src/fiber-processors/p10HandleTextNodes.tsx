import type { ReactElement } from 'react'
import type { HostContainer } from '../types.ts'

function setTextAsTitle(parent: ReactElement, element: ReactElement) {
  if (element.type === 'text') {
    const textTitle = (element.props as any)._title
    const parentTitle = (parent.props as any)._node._props._title
    if (parentTitle) {
      throw new Error(
        `Cannot override _title[${parentTitle}] with children text[${textTitle}]`,
      )
    }
    ;(parent.props as any)._node._props._title = textTitle
    const parentChildren = (parent.props as any).children
    parentChildren.splice(parentChildren.indexOf(element), 1)
  } else {
    if ((element.props as any).children) {
      Object.values((element.props as any).children).map((c: any) => {
        setTextAsTitle(element, c)
      })
    }
  }
}

export const p10HandleTextNodes = (
  container: HostContainer<unknown, unknown>,
) => {
  setTextAsTitle(
    container.rootElement as ReactElement,
    container.rootElement as ReactElement,
  )
}
