import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.industrial_truck;pointerEvents=1;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function IndustrialTruck(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_TRUCK}
      {...props}
      _style={extendStyle(INDUSTRIAL_TRUCK, props)}
    />
  )
}
