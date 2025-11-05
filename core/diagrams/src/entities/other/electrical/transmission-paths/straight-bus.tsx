import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STRAIGHT_BUS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.straightBus;',
  },
  _width: 90,
  _height: 130,
}

export function StraightBus(props: NodeProps) {
  return (
    <Shape
      {...STRAIGHT_BUS}
      {...props}
      _style={extendStyle(STRAIGHT_BUS, props)}
    />
  )
}
