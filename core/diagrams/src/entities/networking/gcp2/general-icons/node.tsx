import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NODE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.node',
  },
  _width: 80,
  _height: 100,
}

export function Node(props: NodeProps) {
  return <Shape {...NODE} {...props} _style={extendStyle(NODE, props)} />
}
