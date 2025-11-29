import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_TANK_CISTERN = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 70,
}

export function ContainerTankCistern(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CONTAINER_TANK_CISTERN)} />
  )
}
