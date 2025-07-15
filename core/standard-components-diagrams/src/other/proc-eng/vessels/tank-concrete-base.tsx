import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_CONCRETE_BASE = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(concrete_base);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 120,
  _height: 91,
}

export function TankConcreteBase(props: DiagramNodeProps) {
  return <Shape {...TANK_CONCRETE_BASE} {...props} />
}
