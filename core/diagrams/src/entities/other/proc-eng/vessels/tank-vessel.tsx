import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_VESSEL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank,_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 70,
}

export function TankVessel(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TANK_VESSEL)} />
}
