import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK_FLOATING_ROOF = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(floating_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function TankFloatingRoof(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_FLOATING_ROOF}
      {...props}
      _style={extendStyle(TANK_FLOATING_ROOF, props)}
    />
  )
}
