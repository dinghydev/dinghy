import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_DISHED_ROOF_CONICAL_BOTTOM = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(dished_roof,_conical_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 125,
}

export function TankDishedRoofConicalBottom(props: DiagramNodeProps) {
  return <Shape {...TANK_DISHED_ROOF_CONICAL_BOTTOM} {...props} />
}
