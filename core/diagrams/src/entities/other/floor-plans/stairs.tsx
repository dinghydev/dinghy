import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAIRS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairs;',
  },
  _width: 300,
  _height: 100,
}

export function Stairs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STAIRS)} />
}
