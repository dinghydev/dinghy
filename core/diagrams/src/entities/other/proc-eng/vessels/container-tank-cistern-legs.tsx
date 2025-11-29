import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_TANK_CISTERN_LEGS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern_(legs);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 105,
}

export function ContainerTankCisternLegs(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTAINER_TANK_CISTERN_LEGS)}
    />
  )
}
