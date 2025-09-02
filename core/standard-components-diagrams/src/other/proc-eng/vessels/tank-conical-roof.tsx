import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TANK_CONICAL_ROOF = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(conical_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function TankConicalRoof(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_CONICAL_ROOF}
      {...props}
      _style={extendStyle(TANK_CONICAL_ROOF, props)}
    />
  )
}
