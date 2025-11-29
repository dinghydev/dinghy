import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONCRETE_TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.concrete_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 160,
  _height: 75,
}

export function ConcreteTank(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONCRETE_TANK)} />
}
