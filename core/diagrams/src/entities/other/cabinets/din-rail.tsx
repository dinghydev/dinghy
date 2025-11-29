import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIN_RAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.din_rail;',
  },
  _width: 500,
  _height: 25,
}

export function DinRail(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIN_RAIL)} />
}
