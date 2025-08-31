import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIAL_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.industrial_truck;pointerEvents=1;',
  },
  _width: 120,
  _height: 20,
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
