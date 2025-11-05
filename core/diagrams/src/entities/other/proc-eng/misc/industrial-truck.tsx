import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.industrial_truck;pointerEvents=1;',
  },
  _width: 120,
  _height: 20,
}

export function IndustrialTruck(props: NodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_TRUCK}
      {...props}
      _style={extendStyle(INDUSTRIAL_TRUCK, props)}
    />
  )
}
