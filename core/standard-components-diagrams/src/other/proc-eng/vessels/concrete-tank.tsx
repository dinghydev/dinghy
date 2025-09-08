import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONCRETE_TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.concrete_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 160,
  _original_height: 75,
}

export function ConcreteTank(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONCRETE_TANK}
      {...props}
      _style={extendStyle(CONCRETE_TANK, props)}
    />
  )
}
