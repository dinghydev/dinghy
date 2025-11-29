import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_CONICAL_ROOF_AND_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(conical_roof_and_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 101,
  _height: 150,
}

export function TankConicalRoofAndBottom(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TANK_CONICAL_ROOF_AND_BOTTOM)}
    />
  )
}
