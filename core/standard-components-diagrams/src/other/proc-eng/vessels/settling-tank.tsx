import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SETTLING_TANK = {
  _style:
    'shape=mxgraph.pid.vessels.settling_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 80,
}

export function SettlingTank(props: DiagramNodeProps) {
  return <Shape {...SETTLING_TANK} {...props} />
}
