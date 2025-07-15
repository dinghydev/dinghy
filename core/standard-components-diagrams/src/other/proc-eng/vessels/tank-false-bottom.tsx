import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_FALSE_BOTTOM = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(false_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 40,
  _height: 112,
}

export function TankFalseBottom(props: DiagramNodeProps) {
  return <Shape {...TANK_FALSE_BOTTOM} {...props} />
}
