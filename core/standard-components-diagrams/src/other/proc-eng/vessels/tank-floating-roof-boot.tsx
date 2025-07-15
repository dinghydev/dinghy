import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TANK_FLOATING_ROOF_BOOT = {
  _style:
    'shape=mxgraph.pid.vessels.tank_(floating_roof,_boot);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 80,
}

export function TankFloatingRoofBoot(props: DiagramNodeProps) {
  return <Shape {...TANK_FLOATING_ROOF_BOOT} {...props} />
}
