import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_DISHED_ROOF = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(dished_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 95,
}

export function TankDishedRoof(props: DiagramNodeProps) {
  return <Shape {...TANK_DISHED_ROOF} {...props} />
}
