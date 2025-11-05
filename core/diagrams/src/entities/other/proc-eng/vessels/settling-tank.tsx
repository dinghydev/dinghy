import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SETTLING_TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.settling_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 80,
}

export function SettlingTank(props: NodeProps) {
  return (
    <Shape
      {...SETTLING_TANK}
      {...props}
      _style={extendStyle(SETTLING_TANK, props)}
    />
  )
}
