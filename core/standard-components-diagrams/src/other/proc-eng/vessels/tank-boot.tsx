import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TANK_BOOT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(boot);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 91,
}

export function TankBoot(props: DiagramNodeProps) {
  return (
    <Shape {...TANK_BOOT} {...props} _style={extendStyle(TANK_BOOT, props)} />
  )
}
