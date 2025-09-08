import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NODE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=node',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Node(props: DiagramNodeProps) {
  return <Shape {...NODE} {...props} _style={extendStyle(NODE, props)} />
}
