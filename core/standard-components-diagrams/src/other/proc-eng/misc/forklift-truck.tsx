import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORKLIFT_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.forklift_(truck);',
  },
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
