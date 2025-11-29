import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_DISHED_ROOF = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(dished_roof);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 95,
}

export function TankDishedRoof(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TANK_DISHED_ROOF)} />
}
