import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_TANK_CISTERN_BOOT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern_(boot);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 80,
}

export function ContainerTankCisternBoot(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONTAINER_TANK_CISTERN_BOOT)}
    />
  )
}
