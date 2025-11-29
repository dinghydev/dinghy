import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLAT_EDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.flatEdge2;strokeColor=none;fillColor=#F4B934;aspect=fixed;',
  },
  _width: 63.2,
  _height: 36,
}

export function FlatEdge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLAT_EDGE)} />
}
