import type { ReactElement } from 'react'
import {
  DependsSchema,
  NodeSchema,
  type NodeTree,
  type Props,
} from '@reactiac/base-components'
import type { JsonRenderOptions } from './types.ts'
import type { HostContainer, Output } from '@reactiac/base-renderer'

const NODE_PROPS_FIELDS = Object.keys(NodeSchema.shape)
const DEPENDS_FIELDS = Object.keys(DependsSchema.enum)
const DEPENDENCY_FIELDS = ['_source', '_target']

const showNodeAttributes = (element: ReactElement) => {
  const { type, props } = element
  const attributes: Props = {}
  const { _props } = (props as any)._node
  if (_props) {
    Object.keys(_props).map((key) => {
      if (NODE_PROPS_FIELDS.includes(key)) {
        attributes[key] = _props[key]
      } else if (DEPENDENCY_FIELDS.includes(key)) {
        attributes[key] = _props[key]._props._id
      }
    })
    DEPENDS_FIELDS.map((key) => {
      const value = (props as any)._node[key]
      if (value) {
        attributes[key] = value.map((dep: NodeTree) => dep._props._id)
      }
    })
  }
  const children = (element.props as any).children.map(showNodeAttributes)
  return { type, attributes, children }
}

export const toNodeJson = (
  hostContainer: HostContainer<string, JsonRenderOptions>,
): Output<string> => {
  const json = showNodeAttributes(hostContainer.rootElement as ReactElement)
  hostContainer.model = json
  hostContainer.result = JSON.stringify(
    json,
    null,
    hostContainer.renderOptions.indent || 2,
  )
  return hostContainer
}
