import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NODE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=node',
  },
  _width: 100,
  _height: 75,
}

export function Node(props: NodeProps) {
  return <Shape {...NODE} {...props} _style={extendStyle(NODE, props)} />
}
