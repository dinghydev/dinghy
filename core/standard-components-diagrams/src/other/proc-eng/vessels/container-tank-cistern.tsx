import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_TANK_CISTERN = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 70,
}

export function ContainerTankCistern(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_TANK_CISTERN}
      {...props}
      _style={extendStyle(CONTAINER_TANK_CISTERN, props)}
    />
  )
}
