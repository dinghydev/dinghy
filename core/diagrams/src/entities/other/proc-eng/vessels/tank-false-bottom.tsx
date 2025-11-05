import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_FALSE_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(false_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 40,
  _height: 112,
}

export function TankFalseBottom(props: NodeProps) {
  return (
    <Shape
      {...TANK_FALSE_BOTTOM}
      {...props}
      _style={extendStyle(TANK_FALSE_BOTTOM, props)}
    />
  )
}
