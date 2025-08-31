import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONCRETE_TANK = {
  _style:
    'shape=mxgraph.pid.vessels.concrete_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 160,
  _height: 75,
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
