import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_VESSEL = {
  _style:
    'shape=mxgraph.pid.vessels.tank,_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 70,
}

export function TankVessel(props: DiagramNodeProps) {
  return <Shape {...TANK_VESSEL} {...props} />
}
