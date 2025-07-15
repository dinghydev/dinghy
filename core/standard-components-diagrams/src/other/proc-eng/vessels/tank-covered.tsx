import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_COVERED = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(covered);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 75,
}

export function TankCovered(props: DiagramNodeProps) {
  return <Shape {...TANK_COVERED} {...props} />
}
