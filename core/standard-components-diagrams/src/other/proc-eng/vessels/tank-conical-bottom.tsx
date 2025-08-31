import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TANK_CONICAL_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(conical_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function TankConicalBottom(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_CONICAL_BOTTOM}
      {...props}
      _style={extendStyle(TANK_CONICAL_BOTTOM, props)}
    />
  )
}
