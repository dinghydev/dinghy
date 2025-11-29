import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_CONCRETE_TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.double_concrete_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 160,
  _height: 75,
}

export function DoubleConcreteTank(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOUBLE_CONCRETE_TANK)} />
}
