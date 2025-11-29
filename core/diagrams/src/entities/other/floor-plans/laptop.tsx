import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAPTOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.laptop;',
  },
  _width: 40,
  _height: 35,
}

export function Laptop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAPTOP)} />
}
