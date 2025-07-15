import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_CONICAL_ROOF = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(conical_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 90,
}

export function TankConicalRoof(props: DiagramNodeProps) {
  return <Shape {...TANK_CONICAL_ROOF} {...props} />
}
