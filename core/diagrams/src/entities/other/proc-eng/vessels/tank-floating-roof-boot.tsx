import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_FLOATING_ROOF_BOOT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(floating_roof,_boot);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 80,
}

export function TankFloatingRoofBoot(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, TANK_FLOATING_ROOF_BOOT)} />
  )
}
