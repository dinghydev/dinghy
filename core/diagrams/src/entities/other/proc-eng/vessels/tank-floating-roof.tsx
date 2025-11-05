import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_FLOATING_ROOF = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(floating_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 70,
}

export function TankFloatingRoof(props: NodeProps) {
  return (
    <Shape
      {...TANK_FLOATING_ROOF}
      {...props}
      _style={extendStyle(TANK_FLOATING_ROOF, props)}
    />
  )
}
