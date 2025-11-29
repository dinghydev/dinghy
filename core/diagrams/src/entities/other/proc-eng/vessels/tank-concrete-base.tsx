import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TANK_CONCRETE_BASE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(concrete_base);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 120,
  _height: 91,
}

export function TankConcreteBase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TANK_CONCRETE_BASE)} />
}
