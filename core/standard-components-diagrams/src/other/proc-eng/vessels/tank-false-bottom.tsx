import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TANK_FALSE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(false_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 112,
}

export function TankFalseBottom(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_FALSE_BOTTOM}
      {...props}
      _style={extendStyle(TANK_FALSE_BOTTOM, props)}
    />
  )
}
