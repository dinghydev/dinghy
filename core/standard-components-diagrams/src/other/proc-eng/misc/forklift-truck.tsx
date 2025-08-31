import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORKLIFT_TRUCK = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(truck);',
  _width: 140,
  _height: 100,
}

export function ForkliftTruck(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORKLIFT_TRUCK}
      {...props}
      _style={extendStyle(FORKLIFT_TRUCK, props)}
    />
  )
}
